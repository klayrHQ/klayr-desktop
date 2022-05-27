/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { Link } from 'react-router-dom';
import routes from '@screens/router/routes';
import { getNetworksList } from '@network/utils/getNetwork';
import { PrimaryButton } from 'src/theme/buttons';
import PassphraseInput from 'src/modules/wallet/components/PassphraseInput/PassphraseInput';
import DiscreetModeToggle from 'src/modules/settings/components/discreetModeToggle';
import NetworkSelector from 'src/modules/settings/components/networkSelector';
import styles from './AddAccountForm.css';

const AddAccountForm = ({
  settings,
  network,
  history,
}) => {
  const { t } = useTranslation();
  const [passphrase, setPass] = useState({ value: '', isValid: false });

  const setPassphrase = (value, error) => {
    setPass({
      value,
      isValid: !error,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (passphrase.value && passphrase.isValid) {
      history.push({ path: '/account/add', search: '?modal=setPassword' });
    }
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      onFormSubmit(e);
    }
  };

  useEffect(() => {
    // istanbul ignore else
    if (!settings.areTermsOfUseAccepted && network.networks?.LSK) {
      history.push(routes.termsOfUse.path);
    }

    i18next.on('languageChanged', getNetworksList);
  }, []);

  return (
    <>
      <div className={`${styles.addAccount} ${grid.row}`}>
        <div
          className={`${styles.wrapper} ${grid['col-xs-12']} ${grid['col-md-10']} ${grid['col-lg-8']}`}
        >
          <div className={`${styles.titleHolder} ${grid['col-xs-10']}`}>
            <h1>{t('Add account')}</h1>
            <p>
              {t('Enter your secret recovery phrase to manage your account.')}
            </p>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className={styles.inputFields}>
              {settings.showNetwork ? (
                <fieldset>
                  <label>{t('Select Network')}</label>
                  <NetworkSelector />
                </fieldset>
              ) : null}
              <fieldset>
                <label>{t('Secret recovery phrase')}</label>
                <PassphraseInput
                  inputsLength={12}
                  maxInputsLength={24}
                  onFill={setPassphrase}
                  keyPress={handleKeyPress}
                />
              </fieldset>
              <DiscreetModeToggle className={styles.discreetMode} />
            </div>
            <div className={`${styles.buttonsHolder}`}>
              <PrimaryButton
                className={`${styles.button} login-button`}
                type="submit"
                disabled={!passphrase.isValid}
              >
                {t('Continue')}
              </PrimaryButton>
              <Link
                className={`${styles.hwLink} signin-hwWallet-button`}
                to={routes.addAccountChoice.path}
              >
                {t('Go Back')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAccountForm;
