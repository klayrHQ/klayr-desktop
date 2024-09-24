import { useBlockchainApplicationExplore } from '../../explore/hooks/queries/useBlockchainApplicationExplore';
import { useBlockchainApplicationMeta } from './queries/useBlockchainApplicationMeta';
import { useCurrentApplication } from './useCurrentApplication';

export const useApplicationExploreAndMetaData = ({ appState = 'activated' } = {}) => {
  const [currentApplication] = useCurrentApplication();
  const {
    data: { data: activeApps = [] } = {},
    isLoading: isLoadingActiveApps,
    fetchNextPage,
    hasNextPage,
    error: errorGettingActiveApps,
  } = useBlockchainApplicationExplore({ config: { params: { status: appState } } });

  if (hasNextPage) {
    fetchNextPage();
  }

  const activeAppChainIds = activeApps.map((app) => app.chainID);
  const chainIDs = [...new Set([currentApplication.chainID, ...activeAppChainIds])].join();

  const {
    data: { data: applications = [] } = {},
    isLoading: isLoadingAppsMetaData,
    hasNextPage: hasNextPageAppsMetaData,
    fetchNextPage: fetchNextPageAppsMetaData,
    error: errorGettingAppsMetaData,
  } = useBlockchainApplicationMeta({
    config: { params: { chainID: chainIDs } },
    options: { enabled: !isLoadingActiveApps && !errorGettingActiveApps },
  });

  if (hasNextPageAppsMetaData) {
    fetchNextPageAppsMetaData();
  }

  return {
    applications,
    isLoading: isLoadingActiveApps || isLoadingAppsMetaData,
    error: errorGettingActiveApps || errorGettingAppsMetaData,
  };
};
