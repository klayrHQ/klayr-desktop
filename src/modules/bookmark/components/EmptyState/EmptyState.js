import React from 'react';
import { PrimaryButton } from 'src/theme/buttons';
import BoxEmptyState from 'src/theme/box/emptyState';
import Icon from 'src/theme/Icon';
import styles from '../BookmarksList/BookmarksList.css';

const EmptyState = ({ bookmarks, activeToken, emptyStateClassName, t, onAddBookmark }) => (
  <>
    {bookmarks[activeToken].length ? (
      <BoxEmptyState className={emptyStateClassName}>
        <p>{t('There are no results matching your search term.')}</p>
      </BoxEmptyState>
    ) : (
      <BoxEmptyState className={emptyStateClassName}>
        <>
          <p>{t('You do not have any bookmarks yet.')}</p>
          <PrimaryButton className={styles.addButton} onClick={onAddBookmark} size="l">
            <Icon name="plusWhiteIcon" className={styles.plusIcon} />
            {t('Add bookmark')}
          </PrimaryButton>
        </>
      </BoxEmptyState>
    )}
  </>
);

export default EmptyState;
