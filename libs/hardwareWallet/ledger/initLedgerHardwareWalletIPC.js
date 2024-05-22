import { ledgerDeviceListener } from '@libs/hardwareWallet/ledger/ledgerDeviceListener';
import { ledgerKlayrAppIPCChannel } from '@libs/hardwareWallet/ledger/ledgerKlayrAppIPCChannel';

export function initLedgerHardwareWalletIPC(win) {
  ledgerDeviceListener(win);
  ledgerKlayrAppIPCChannel();
}
