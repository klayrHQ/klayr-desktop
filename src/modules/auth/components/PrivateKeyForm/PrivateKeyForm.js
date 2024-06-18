import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import Input from '@theme/Input';
import { PrimaryButton, TertiaryButton } from '@theme/buttons';
import CheckBox from '@theme/CheckBox';
import Tooltip from '@theme/Tooltip';
import { regex } from 'src/const/regex';
import { useAccounts } from '@account/hooks';
import nacl from 'tweetnacl';
import styles from './PrivateKeyForm.css';

const setPasswordFormSchema = yup
  .object({
    accountName: yup.string().when((val) => {
      if (!val.length) {
        return yup.string().notRequired();
      }
      return yup
        .string()
        .matches(
          regex.accountName,
          'Can be alpha numeric with either !,@,$,&,_,. as special characters'
        )
        .max(20, "Character length can't be more than 20")
        .min(3, "Character length can't be less than 3");
    }),
    password: yup
      .string()
      .required()
      .matches(
        regex.password,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    cPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Confirm that passwords match'),
    hasAgreed: yup.boolean().required(),
  })
  .required();

function PrivateKeyForm({
  prevStep,
  onSubmit,
  privateKey,
}) {
  const { t } = useTranslation();
  const { accounts } = useAccounts();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(setPasswordFormSchema),
  });
  const formValues = watch();
  const { password, cPassword, hasAgreed } = formValues;

  const isButtonDisabled = useMemo(
    () => !password?.length || !cPassword?.length || !hasAgreed,
    [formValues.password, formValues.cPassword, formValues.hasAgreed]
  );
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line max-statements
  const onFormSubmit = async (values) => {
    setIsLoading(true);
    const existingAccountName = accounts.some(
      (acc) => acc.metadata.name.toLowerCase() === values.accountName.toLowerCase()
    );

    if (values.accountName && existingAccountName) {
      setError('accountName', {
        message: t(`Account with name "${values.accountName}" already exists.`),
      });

      setIsLoading(false);
      return null;
    }

    const encryptAccountWorker = new Worker(new URL('./encryptAccount.worker.js', import.meta.url));
    /* istanbul ignore next */
    const showEncryptAccountError = () => {
      toast.error(t('Failed to setup password'));
      setIsLoading(false);
    };
    if (privateKey?.value.length === 64) {
      const privateKeyBytes = Buffer.from(privateKey.value, 'hex');
      const publicKeyBytes = nacl.sign.keyPair.fromSeed(privateKeyBytes.subarray(0, 32)).publicKey;

      privateKey.value = Buffer.concat([privateKeyBytes, publicKeyBytes]).toString('hex');
    }
    encryptAccountWorker.postMessage({
      privateKey,
      ...values,
    });

    encryptAccountWorker.onmessage = ({ data: { error, result } }) => {
      if (error) return showEncryptAccountError();
      onSubmit?.(result);
      encryptAccountWorker.terminate();
      return setIsLoading(false);
    };

    encryptAccountWorker.onerror = showEncryptAccountError;

    return null;
  };

  return (
    <div data-testid="setPasswordFormContainer" className={styles.container}>
      <div className={`${styles.titleHolder} ${grid['col-xs-12']}`}>
        <div className={grid.row}>
          <div className={grid['col-xs-12']}>
            <h1>{t('Set up your account password')}</h1>
          </div>
        </div>
        <p>
          {t(
            'This password will be used for decrypting your account every time you initiate any transaction from your wallet, and also during backup or removal of an account from the wallet.'
          )}
        </p>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className={styles.fieldWrapper}>
          <Input
            size="l"
            secureTextEntry
            feedback={errors.password?.message}
            status={errors.password ? 'error' : undefined}
            placeholder={t('Enter password')}
            label={
              <span className="password-label-wrapper">
                {t('Password')}
                <Tooltip position="right" title={t('Requirements')}>
                  <p>
                    {t(
                      'Password should be a combination of uppercase and lowercase alpha numeric characters with length more than 8'
                    )}
                  </p>
                </Tooltip>
              </span>
            }
            {...register('password')}
          />
        </div>
        <div className={styles.fieldWrapper}>
          <Input
            size="l"
            secureTextEntry
            feedback={errors.cPassword?.message}
            status={errors.cPassword ? 'error' : undefined}
            placeholder={t('Enter password confirmation')}
            label="Password confirmation"
            {...register('cPassword')}
          />
        </div>
        <div className={styles.fieldWrapper}>
          <Input
            size="l"
            feedback={errors.accountName?.message}
            status={errors.accountName ? 'error' : undefined}
            label="Account name (Optional)"
            placeholder={t('Enter account name')}
            {...register('accountName')}
          />
        </div>
        <label className={`${styles.checkBoxWrapper}`}>
          <CheckBox className={`${styles.checkbox}`} {...register('hasAgreed')} />
          <span>{t('I agree to store my encrypted secret recovery phrase on this device.')}</span>
        </label>
        <div className={[styles.fieldWrapper, styles.submitWrapper].join(' ')}>
          <PrimaryButton
            isLoading={isLoading}
            type="submit"
            className={styles.submitButton}
            disabled={isButtonDisabled}
          >
            {t('Save Account')}
          </PrimaryButton>
          <TertiaryButton onClick={() => prevStep()}>{t('Go back')}</TertiaryButton>
        </div>
      </form>
    </div>
  );
}

export default PrivateKeyForm;
