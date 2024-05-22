import { canExecuteDeepLinking } from './utils';

describe('utils', () => {
  describe('canExecuteDeepLinking', () => {
    it('Should return valid if url path is whitelisted and has required search params', () => {
      const urlWithoutMessage =
        'klayr://wallet?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000000';
      const urlWithMessage =
        'klayr://wallet?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000000&reference=test message';

      expect(canExecuteDeepLinking(urlWithoutMessage)).toBeTruthy();
      expect(canExecuteDeepLinking(urlWithMessage)).toBeTruthy();
    });

    it('Should return invalid if url path is not whitelisted and has required search params', () => {
      const url =
        'klayr://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000000';
      expect(canExecuteDeepLinking(url)).toBeFalsy();
    });

    it('Should return invalid if launch protocol is not klayr', () => {
      const url =
        'colecti://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000000';
      expect(canExecuteDeepLinking(url)).toBeFalsy();
    });

    it('Should return invalid if url path is whitelisted and does not have required search params', () => {
      const invalidUrls = {
        invalidExtraParamUrl:
          'klayr://wallet?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000000&test=test',
        invalidAmountUrl:
          'klayr://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=test&token=0200000000000000&recipientChain=02000000',
        invalidChainIDUrl:
          'klayr://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=0200000000000000&recipientChain=02000',
        invalidTokenIDUrl:
          'klayr://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8q2549oc&amount=1&token=00000000000&recipientChain=02000000',
        invalidAddressUrl:
          'klayr://test?modal=send&recipient=klydb3ja5dhr25jhwm6onstawj33yk74g8&amount=1&token=0200000000000000&recipientChain=02000000',
      };

      Object.values(invalidUrls).forEach((invalidUrl) => {
        expect(canExecuteDeepLinking(invalidUrl)).toBeFalsy();
      });
    });
  });
});
