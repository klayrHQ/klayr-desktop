import React from 'react';
import { mount } from 'enzyme';
import AcountMigration from '.';
import accounts from '../../../../test/constants/accounts';

describe('AccountMigration component', () => {
  const props = {
    account: accounts.empty_account,
    showBalance: true,
  };

  it('should render properly', () => {
    const wrapper = mount(<AcountMigration {...props} />);
    const html = wrapper.html();
    expect(html).toContain(accounts.empty_account.legacy.address);
    expect(html).toContain(accounts.empty_account.summary.address);
    expect(html).toContain('98,970,000 LSK');
  });

  it('should not render balance', () => {
    const wrapper = mount(<AcountMigration {...props} showBalance={false} />);
    const html = wrapper.html();
    expect(html).toContain(accounts.empty_account.legacy.address);
    expect(html).toContain(accounts.empty_account.summary.address);
  });
});
