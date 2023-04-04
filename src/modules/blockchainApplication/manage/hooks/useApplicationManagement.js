import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSettings from '@settings/hooks/useSettings';
import { addApplication, deleteApplication, setApplications as setApps } from '../store/action';
import { selectApplications } from '../store/selectors';
import { useCurrentApplication } from './useCurrentApplication';
import { usePinBlockchainApplication } from './usePinBlockchainApplication';
import { useApplicationExploreAndMetaData } from './useApplicationExploreAndMetaData';

// eslint-disable-next-line max-statements
export function useApplicationManagement() {
  const dispatch = useDispatch();
  const [currentApplication, setCurrentApplication] = useCurrentApplication();
  const { applications: defaultApplications } = useApplicationExploreAndMetaData();
  const { mainChainNetwork = {} } = useSettings('mainChainNetwork');

  const { checkPinByChainId, pins } = usePinBlockchainApplication();
  const applicationsObject = useSelector(selectApplications)[mainChainNetwork.name] || {};

  const applications = useMemo(() => {
    const appsList = Object.values(applicationsObject);
    return appsList
      .map((app) => ({
        ...app,
        isPinned: checkPinByChainId(app.chainID),
      }))
      .sort((a) => (a.isPinned ? -1 : 1));
  }, [applicationsObject, pins]);

  const setApplication = useCallback((application) => {
    if (application.isDefault) return;
    dispatch(addApplication(application, mainChainNetwork.name));
  }, []);

  const setApplications = (apps) => {
    dispatch(setApps(apps, mainChainNetwork.name));
  };

  const getApplicationByChainId = useCallback(
    (chainId) => applications.find((app) => app.chainID === chainId),
    [applications]
  );

  const deleteApplicationByChainId = useCallback((chainId) => {
    const userApplication = getApplicationByChainId(chainId);
    if (userApplication.isDefault) return;

    dispatch(deleteApplication(chainId, mainChainNetwork.name));
    if (currentApplication.chainID === chainId) {
      // Set Lisk as default if application in use is being deleted
      setCurrentApplication(defaultApplications[0]);
    }
  }, []);

  return {
    applications,
    setApplication,
    setApplications,
    getApplicationByChainId,
    deleteApplicationByChainId,
  };
}
