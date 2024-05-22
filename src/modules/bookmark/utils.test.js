import { expect } from 'chai';
import { stub } from 'sinon';
import {
  validateBookmarks,
  getIndexOfBookmark,
  getIndexOfLabel,
  validateBookmarkLabel,
  validateBookmarkAddress,
} from './utils';

const t = (str) => str;
describe('Bookmarks', () => {
  const accounts = {
    KLY: [
      {
        address: 'klytzb4j7e3knk4mkxckdr3y69gtu2nwmsb3hjbkg',
        title: 'klayrer',
        balance: 0,
      },
      {
        address: 'klyzzxdju24drjsxo2mod53mtq7enehvh8t2keu9y',
        title: 'genesis_0',
        balance: 100000,
      },
    ],
  };

  beforeEach(() => {
    stub(localStorage, 'getItem');
    stub(localStorage, 'setItem');
  });

  afterEach(() => {
    localStorage.getItem.restore();
    localStorage.setItem.restore();
  });

  describe('validateBookmarks', () => {
    it('validates a valid list of bookmarks by token', () => {
      expect(validateBookmarks(accounts)).to.equal(accounts);
    });

    it('validates an invalid list of bookmarks and returns an empty list', () => {
      expect(validateBookmarks({})).to.deep.equal({ KLY: [] });
    });
  });

  describe('getIndexOfBookmark', () => {
    it('gets the index based on the address', () => {
      const data = {
        address: accounts.KLY[0].address,
        token: 'KLY',
      };
      expect(getIndexOfBookmark(accounts, data)).to.equal(0);
    });

    it('gets the index based on the address with default token', () => {
      const data = {
        address: accounts.KLY[0].address,
      };
      expect(getIndexOfBookmark(accounts, data)).to.equal(0);
    });
  });

  describe('getIndexOfLabel', () => {
    it('gets the index based on the label', () => {
      const data = {
        label: accounts.KLY[1].title,
        token: 'KLY',
      };
      expect(getIndexOfLabel(accounts, data)).to.equal(1);
    });

    it('gets the index based on the label with default token', () => {
      const data = {
        label: accounts.KLY[1].title,
      };
      expect(getIndexOfLabel(accounts, data)).to.equal(1);
    });
  });

  describe('validateBookmarkLabel', () => {
    it('returns feedback on invalid labels', () => {
      const value = 'an invalid bookmark name';
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal(
        'Label can be alphanumeric with either !,@,$,&,_,. as special characters.'
      );
    });

    it('returns feedback on very short labels', () => {
      const value = 'bk';
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal(
        'Label is too short, Min. 3 characters.'
      );
    });

    it('returns feedback on very long labels', () => {
      const value = 'really_long_bookmark_name';
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal(
        'Label is too long, Max. 20 characters.'
      );
    });

    it('returns feedback for duplicate labels', () => {
      const value = 'klayrer';
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal(
        `Bookmark with name "${value}" already exists.`
      );
    });

    it('returns no feedback for valid labels', () => {
      const value = 'validator';
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal('');
    });

    it('returns no feedback for default label value', () => {
      const value = undefined;
      expect(validateBookmarkLabel('KLY', value, accounts, t)).to.equal('');
    });
  });

  describe('validateBookmarkAddress', () => {
    it('returns feedback on invalid address', () => {
      const value = 'kly789';
      expect(validateBookmarkAddress('KLY', value, accounts, t, false)).to.equal('Invalid address');
    });

    it('returns feedback for duplicate addresses', () => {
      const value = accounts.KLY[0].address;
      expect(validateBookmarkAddress('KLY', value, accounts, t, true)).to.equal(
        'Address already bookmarked'
      );
    });

    it('returns no feedback for valid addresses', () => {
      const value = 'klyp9gw6rtqejqjoq3nzhpdxkx9mondjky3prphyx';
      expect(validateBookmarkAddress('KLY', value, accounts, t, false)).to.equal('');
    });

    it('returns no feedback for default address value', () => {
      const value = undefined;
      expect(validateBookmarkAddress('KLY', value, accounts, t)).to.equal('');
    });
  });
});
