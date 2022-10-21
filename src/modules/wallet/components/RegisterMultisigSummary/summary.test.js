import React from 'react';
import { cryptography } from '@liskhq/lisk-client';
import { mount } from 'enzyme';
import * as hwManager from '@transaction/utils/hwManager';
import { MODULE_COMMANDS_NAME_MAP } from 'src/modules/transaction/configuration/moduleCommand';
import accounts from '@tests/constants/wallets';
import { mockAuth } from 'src/modules/auth/__fixtures__';
import { useAuth } from 'src/modules/auth/hooks/queries';
import mockSavedAccounts from '@tests/fixtures/accounts';
import Summary from './Summary';

const mockedCurrentAccount = mockSavedAccounts[0];
jest.mock('@auth/hooks/queries');
jest.mock('@account/hooks', () => ({
  useCurrentAccount: jest.fn(() => [mockedCurrentAccount, jest.fn()]),
}));

const mockTransaction = {
  fee: BigInt(10000),
  mandatoryKeys: [
    Buffer.from('0fe9a3f1a21b5530f27f87a414b549e79a940bf24fdf2b2f05e7f22aeeecc86a', 'hex'),
    Buffer.from('86499879448d1b0215d59cbf078836e3d7d9d2782d56a2274a568761bff36f19', 'hex'),
  ],
  numberOfSignatures: 2,
  optionalKeys: [],
};
const address = 'lskdxc4ta5j43jp9ro3f8zqbxta9fn6jwzjucw7yt';

jest.mock('@transaction/api/index', () => ({
  create: jest.fn(() => Promise.resolve(mockTransaction)),
  computeTransactionId: jest.fn(() => mockTransaction.id),
}));
jest.mock('@transaction/utils/hwManager');
jest.spyOn(cryptography.address, 'getLisk32AddressFromPublicKey').mockReturnValue(address);

describe('Multisignature Summary component', () => {
  const members = [accounts.genesis, accounts.delegate].map((item) => ({
    address: item.summary.address,
    isMandatory: true,
  }));
  const mandatoryKeys = [accounts.genesis, accounts.delegate].map((item) => item.summary.publicKey);

  let wrapper;
  const props = {
    t: (v) => v,
    prevStep: jest.fn(),
    nextStep: jest.fn(),
    multisigGroupRegistered: jest.fn(),
    rawTx: {
      fee: 2000000,
      moduleCommand: MODULE_COMMANDS_NAME_MAP.registerMultisignature,
      params: {
        account: accounts.genesis,
        members,
        numberOfSignatures: 2,
        mandatoryKeys,
        optionalKeys: [],
        network: {
          networks: {
            LSK: {
              networkIdentifier: '01e47ba4e3e57981642150f4b45f64c2160c10bac9434339888210a4fa5df097',
            },
          },
          name: 'customNode',
        },
      },
    },
  };

  beforeEach(() => {
    wrapper = mount(<Summary {...props} />);
    hwManager.signTransactionByHW.mockResolvedValue({});
  });

  useAuth.mockReturnValue({ data: mockAuth });

  it('Should call props.nextStep', async () => {
    wrapper.find('.confirm-button').at(0).simulate('click');
    expect(props.nextStep).toHaveBeenCalledWith({
      rawTx: props.rawTx,
      actionFunction: props.multisigGroupRegistered,
    });
  });

  it('Should call props.prevStep', () => {
    wrapper.find('.cancel-button').at(0).simulate('click');
    expect(props.prevStep).toBeCalled();
  });

  it('Should render properly', () => {
    expect(wrapper.find('.member-info').length).toEqual(props.rawTx.params.members.length);
    expect(wrapper.find('.info-fee').at(0).text()).toContain('0.02 LSK');
  });
});
