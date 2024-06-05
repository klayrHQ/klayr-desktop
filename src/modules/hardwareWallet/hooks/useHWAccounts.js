import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentHWDevice,
  selectHWAccounts,
} from '@hardwareWallet/store/selectors/hwSelectors';
import { getNameFromAccount } from '@hardwareWallet/utils/getNameFromAccount';
import { getMultipleAddresses } from '@libs/hardwareWallet/ledger/ledgerKlayrAppIPCChannel/clientLedgerHWCommunication';
import { extractAddressFromPublicKey } from '@wallet/utils/account';

function useHWAccounts(nrOfAccounts) {
  const currentHWDevice = useSelector(selectCurrentHWDevice);
  const persistedHwAccounts = useSelector(selectHWAccounts);
  const [hwAccounts, setHwAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [loadingHWAccountsError, setLoadingHWAccountsError] = useState();

  useEffect(() => {
    if (nrOfAccounts > 0) {
      (async () => {
        setIsLoading(true);
        try {
          const accountIndexes = Array.from(Array(nrOfAccounts).keys());
          const addressesAndPubkeys = await getMultipleAddresses(
            currentHWDevice.path,
            accountIndexes
          );
          const accounts = Object.values(addressesAndPubkeys).map((addressAndPubkey, index) => {
            const { pubKey } = addressAndPubkey;
            const address = extractAddressFromPublicKey(Buffer.from(pubKey, 'hex'));
            const accountIndex = index + 1;
            const persistedName = getNameFromAccount(address, persistedHwAccounts);
            const name = persistedName || `Account ${accountIndex}`;

            return {
              hw: currentHWDevice,
              metadata: {
                address,
                pubkey: pubKey,
                accountIndex: index,
                name,
                isHW: true,
                isImported: !!persistedName,
                creationTime: new Date().toISOString(),
                path: '',
              },
            };
          });
          setHwAccounts(accounts);
        } catch (error) {
          setLoadingHWAccountsError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [nrOfAccounts]);

  return { hwAccounts, isLoading, loadingHWAccountsError };
}

export default useHWAccounts;
