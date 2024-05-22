import { mountWithRouter } from 'src/utils/testHelpers';
import { useTokenBalances } from '@token/fungible/hooks/queries';
import { mockAppsTokens } from '@token/fungible/__fixtures__';
import Review from './index';

jest.mock('@token/fungible/hooks/queries');

describe('Multisignature Review component', () => {
  let wrapper;
  const props = {
    t: (v) => v,
    members: [
      {
        address: 'klyehj8am9afxdz8arztqajy52acnoubkzvmo9cjy',
        isMandatory: true,
      },
      {
        address: 'klyehj0am9afxdz8arztqajy52acnoubkzvmo9cjy',
        isMandatory: false,
        publicKey: '0fe9a3f1a21b5530f27f87a414b549e79a940bf24fdf2b2f05e7f22aeeecc86a',
      },
      { address: 'klyehj1am9afxdz8arztqajy52acnoubkzvmo9cjy', isMandatory: false },
      { address: 'klyehj2am9afxdz8arztqajy52acnoubkzvmo9cjy', isMandatory: false },
      { address: 'klyehj3am9afxdz8arztqajy52acnoubkzvmo9cjy', isMandatory: false },
    ],
    fee: 2000000,
    numberOfSignatures: 2,
    token: { ...mockAppsTokens.data[0], availableBalance: '1000000000' },
    isMultisignature: false,
    isRegisterMultisigature: true,
  };

  useTokenBalances.mockReturnValue({ data: mockAppsTokens });

  it('Should render properly', () => {
    wrapper = mountWithRouter(Review, props);

    expect(wrapper).toContainMatchingElements(props.members.length, '.member-info');
    expect(wrapper.find('.infoColumn.info-numberOfSignatures')).toHaveText('Required signatures2');
    expect(wrapper.find('.infoColumn.info-fee')).toHaveText('Fees0.02 KLY');
  });

  it('Should render properly when editing register multi-signature transaction', () => {
    wrapper = mountWithRouter(Review, {
      ...props,
      isRegisterMultisigature: true,
      isMultisignature: true,
    });
    expect(wrapper.find('.membersContainer > p:first-child')).toHaveText('Registering members');
  });
});
