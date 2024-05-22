import React from 'react';
import { mount } from 'enzyme';
import Introduction from './index';
import styles from './introduction.css';

window.open = jest.fn();

describe('Reclaim balance Introduction screen', () => {
  const props = { nextStep: jest.fn() };

  it('Opens klayr blog windows', () => {
    const wrapper = mount(<Introduction {...props} />);
    wrapper.find('.link').first().simulate('click');
    expect(window.open).toHaveBeenCalledWith(
      'https://klayr.xyz/blog/posts/announcing-klayr-mainnet-v4-migration',
      '_blank',
      'rel=noopener noreferrer'
    );
  });

  it('should go to nextStep', () => {
    const wrapper = mount(<Introduction {...props} />);
    wrapper.find(styles.button).first().simulate('click');
    expect(props.nextStep).toHaveBeenCalledTimes(1);
  });
});
