import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useSettings from '@settings/hooks/useSettings';
import { Client } from 'src/utils/api/client';
import Box from 'src/theme/box';
import BoxHeader from 'src/theme/box/header';
import BoxContent from 'src/theme/box/content';
import TokenAmount from '@token/fungible/components/tokenAmount';
import { DoughnutChart } from '@common/components/charts';
import Tooltip from 'src/theme/Tooltip';
import { useTheme } from 'src/theme/Theme';
import { getColorPalette } from '@common/components/charts/chartOptions';
import GuideTooltip, { GuideTooltipItem } from '@common/components/charts/guideTooltip';
import { useBlockchainApplicationStatistics } from '../../hooks/queries/useBlockchainApplicationStatistics';
import prepareChartDataAndOptions from '../../utils/prepareChartDataAndOptions';
import styles from './blockchainApplicationStatistics.css';

const BlockchainApplicationStatistics = () => {
  const { t } = useTranslation();
  const { mainChainNetwork } = useSettings('mainChainNetwork');
  const { data: statistics } = useBlockchainApplicationStatistics({
    client: new Client({ http: mainChainNetwork?.serviceUrl }),
  });
  const colorPalette = getColorPalette(useTheme());
  const { doughnutChartData, doughnutChartOptions } = prepareChartDataAndOptions(
    statistics?.data ?? {},
    colorPalette,
    t
  );

  const cardsMap = useMemo(
    () => [
      {
        title: t('Total supply'),
        description: t('Total KLY tokens in circulation'),
        amount: statistics?.data?.totalSupplyLSK || 0,
        tooltipSize: 'maxContent',
      },
      {
        title: t('Staked'),
        description: t(
          'Amount of KLY tokens staked by validators and nominators for PoS governance'
        ),
        amount: statistics?.data?.totalStakedLSK || 0,
        tooltipSize: 'm',
      },
    ],
    [statistics]
  );

  return (
    <Box className={styles.container}>
      <BoxHeader>
        <h1>{t('Statistics')}</h1>
      </BoxHeader>
      <BoxContent className={styles.chartBox}>
        <div className={`${styles.chart} showOnLargeViewPort`}>
          <DoughnutChart data={doughnutChartData} options={doughnutChartOptions.largeViewport} />
        </div>
        <div className={`${styles.chart} hideOnLargeViewPort`}>
          <DoughnutChart data={doughnutChartData} options={doughnutChartOptions.mediumViewport} />
        </div>
        <div className={`${styles.chartGuides} hideOnLargeViewPort`}>
          <GuideTooltip>
            {doughnutChartData.labels.map((label, i) => (
              <GuideTooltipItem
                key={`blockchain-app-statistic-GuideTooltip-${i}-${label}`}
                label={label}
                color={doughnutChartData.datasets[0].backgroundColor[i]}
              />
            ))}
          </GuideTooltip>
        </div>
      </BoxContent>
      {cardsMap.map(({ title, description, amount, tooltipSize }) => (
        <BoxContent key="app-stats-card" className={styles.statsBox}>
          <div>
            <div>
              <span className={styles.statsInfoTitle}>{title}</span>
              <Tooltip size={tooltipSize} position="left">
                <p>{description}</p>
              </Tooltip>
            </div>
            <div className={`${styles.statsInfo} stats-info-value`}>
              <TokenAmount isLsk val={amount} showRounded={2} />
            </div>
          </div>
        </BoxContent>
      ))}
    </Box>
  );
};

export default BlockchainApplicationStatistics;
