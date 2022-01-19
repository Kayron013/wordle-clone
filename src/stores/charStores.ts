import { writable, get } from 'svelte/store';
import { statusValues } from '../constants';
import type { Status } from '../types';

const createCharStore = () => {
  const store = writable<Status>('');
  const { subscribe, set } = store;

  return {
    subscribe,
    update: (status: Status) => {
      const oldStatus = get(store);
      if (statusValues[status] > statusValues[oldStatus]) {
        set(status);
      }
    },
  };
};

export const charStores = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
].reduce((acc, c) => {
  acc.set(c, createCharStore());
  return acc;
}, new Map<string, ReturnType<typeof createCharStore>>());
