import { usePosConstants } from '@pos/validator/hooks/queries';
import { useCurrentAccount } from '@account/hooks';
import { useTransactions } from '@transaction/hooks/queries';
import { MODULE_COMMANDS_NAME_MAP } from '@transaction/configuration/moduleCommand';
import { useNetworkStatus } from '@network/hooks/queries';

export const useLastCommissionChange = () => {
  const { data: posConstants } = usePosConstants();
  const [{ metadata: { address } = {} }] = useCurrentAccount();
  const { data: transactions } = useTransactions({
    config: {
      params: { address, moduleCommand: MODULE_COMMANDS_NAME_MAP.changeCommission, limit: 1 },
    },
  });
  const lastChangeCommissionTimestamp = transactions?.data[0]?.block?.timestamp;
  const networkStatus = useNetworkStatus();

  return (
    lastChangeCommissionTimestamp &&
    new Date(
      (lastChangeCommissionTimestamp +
        posConstants.data?.commissionIncreasePeriod *
          networkStatus.data?.data?.genesis?.blockTime) *
        1000
    )
  );
};
