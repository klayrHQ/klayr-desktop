import React from 'react';
import { useTranslation } from 'react-i18next';
import DemoRenderer from '@theme/demo/demoRenderer';
import Onboarding from './onboarding';

/* eslint-disable-next-line no-console */
const finalCallback = console.log;

const getOnboardingSlides = () => [
  {
    title: 'Welcome to Klayr Validators!',
    content:
      'Klayr blockchain network is based on a Proof of Stake consensus algorithm, in which 101 validators are chosen to run the network by the community.',
    illustration: 'welcomeKlayrValidators',
  },
  {
    title: 'Your voice matters',
    content:
      'In this section of Klayr you can stake for up to 101 validators to run Klayr’s blockchain network, and by doing so have a real impact on the Klayr ecosystem.',
    illustration: 'yourVoiceMatters',
  },
];

const OnboardingDemo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('Onboarding')}</h2>
      <DemoRenderer>
        <Onboarding
          slides={getOnboardingSlides()}
          finalCallback={finalCallback}
          ctaLabel={t('Start staking')}
          name="validatorOnboarding"
        />
      </DemoRenderer>
    </div>
  );
};

export default OnboardingDemo;
