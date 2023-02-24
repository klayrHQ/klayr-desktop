import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import { useHWStatus } from '@hardwareWallet/hooks/useHWStatus';
import  * as spyHWStatus  from '@hardwareWallet/hooks/useHWStatus';
import { setHWAccounts, removeHWAccounts } from '../store/actions';
import { mockHWAccounts, mockHWCurrentDevice } from '../__fixtures__';
import { getHWAccounts } from '../utils/getHWAccounts';
import { getNameFromAccount } from '../utils/getNameFromAccount';
import useManageHWAccounts from './useManageHWAccounts';
import * as utils from '../utils/getNameFromAccount'

jest.useRealTimers();
jest.spyOn(spyHWStatus, 'useHWStatus')
jest.spyOn(utils, 'getNameFromAccount')
const mockDispatch = jest.fn();
const mockAppState = {
  hardwareWallet: {
    currentDevice: mockHWCurrentDevice,
  },
  settings: {
    hardwareAccounts: {},
  },
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

jest.mock('../utils/getHWAccounts');
getHWAccounts.mockResolvedValue(mockHWAccounts);

describe('useManageHWAccounts hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('stores the list of accounts in the hardware wallet', async () => {
    useSelector.mockImplementation((callback) => callback(mockAppState));
    useHWStatus.mockReturnValue(mockHWCurrentDevice);
    const { waitFor } = renderHook(() => useManageHWAccounts());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(getNameFromAccount).toHaveBeenCalled();
      const hwWalletAccountsDetails = setHWAccounts(mockHWAccounts);
      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining(hwWalletAccountsDetails));
    });
  });

  it('removes the list of accounts when the device is disconnected', async () => {
    const updatedMockAppState = {
      ...mockAppState,
      settings: {
        hardwareAccounts: {
          [mockHWCurrentDevice.model]: [
            {
              address: mockHWAccounts[0].metadata.address,
              name: 'masoud123',
            },
            {
              address: mockHWAccounts[1].metadata.address,
              name: 'masoud456',
            },
          ],
        },
      },
    };
    useHWStatus.mockReturnValue(mockHWCurrentDevice);
    useSelector.mockImplementation((callback) => callback(updatedMockAppState));
    const { waitFor } = renderHook(() => useManageHWAccounts());

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(removeHWAccounts());
    });
  });
});
