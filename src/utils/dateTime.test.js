import {
  getUnixTimestampFromValue,
  convertUnixSecondsToKlayrEpochSeconds,
} from 'src/utils/dateTime';

describe('Datetime', () => {
  describe('getUnixTimestampFromValue', () => {
    it('should return valid unix timestamp', () => {
      expect(getUnixTimestampFromValue(131302820)).toEqual(131302820000);
    });
  });

  describe('convertUnixSecondsToKlayrEpochSeconds', () => {
    it('should return valid unix timestamp', () => {
      expect(convertUnixSecondsToKlayrEpochSeconds(1595584910)).toEqual(131475710);
    });
  });
});
