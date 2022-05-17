import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import SetPasswordForm from './SetPasswordForm';

jest.mock('react-i18next');

const props = {
  onSubmit: jest.fn((value) => value),
};
let password = null;
let cpassword = null;
let hasAgreed = null;
let accountName = null;

beforeEach(() => {
  render(<SetPasswordForm {...props} />);

  password = screen.getByTestId('password');
  cpassword = screen.getByTestId('cpassword');
  accountName = screen.getByTestId('accountName');
  hasAgreed = screen.getByTestId('hasAgreed');
});

const makeSubmitActive = () => {
  fireEvent.change(password, { target: { value: 'P' } });
  fireEvent.change(cpassword, { target: { value: 'cp' } });
  fireEvent.click(hasAgreed);
};

describe('Set Password Form validation should work', () => {
  it('Submit button should be disabled', async () => {
    fireEvent.change(password, { target: { value: 'password' } });
    expect(screen.getByText('Save Account')).toHaveAttribute('disabled');

    fireEvent.change(cpassword, { target: { value: 'cpassword' } });
    expect(screen.getByText('Save Account')).toHaveAttribute('disabled');

    fireEvent.click(hasAgreed);
    expect(screen.getByText('Save Account')).not.toHaveAttribute('disabled');
  });

  it('should display an error if password length is not up to 8', async () => {
    makeSubmitActive();
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => {
      expect(
        screen.getByText('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
      ).toBeTruthy();
    });
  });

  it('should display an error if password does not have a number', async () => {
    makeSubmitActive();
    fireEvent.change(password, { target: { value: 'Passsssss*' } });
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => {
      expect(
        screen.getByText('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
      ).toBeTruthy();
    });
  });

  it('should display an error if password does not have a combination of upper an lowercase characters', async () => {
    makeSubmitActive();
    fireEvent.change(password, { target: { value: 'tesssssttt12$' } });
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => {
      expect(
        screen.getByText('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
      ).toBeTruthy();
    });
  });

  it('should display an error if password does not have a combination of upper an lowercase characters', async () => {
    makeSubmitActive();
    fireEvent.change(password, { target: { value: 'tesssssttt12$' } });
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => {
      expect(
        screen.getByText('Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
      ).toBeTruthy();
    });
  });

  it('should display an error if confirm password is not the same as the passowrd', async () => {
    makeSubmitActive();
    fireEvent.change(password, { target: { value: 'Password1$' } });
    fireEvent.change(cpassword, { target: { value: 'Password1@' } });
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => {
      expect(
        screen.getByText('Confrim passwords must match password'),
      ).toBeTruthy();
    });
  });

  it('should invoke onSubmit with form values when validation is okay', async () => {
    fireEvent.change(password, { target: { value: 'Password1$' } });
    fireEvent.change(cpassword, { target: { value: 'Password1$' } });
    fireEvent.change(accountName, { target: { value: 'test account name' } });
    fireEvent.click(hasAgreed);
    fireEvent.click(screen.getByText('Save Account'));

    await waitFor(() => expect(props.onSubmit).toHaveBeenCalled());
  });
});
