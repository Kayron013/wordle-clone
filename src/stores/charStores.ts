import { writable, get } from 'svelte/store';
import { statusValues } from '../constants';
import type { Evaluation } from '../types';

const createCharStore = () => {
  const store = writable<Evaluation | null>(null);
  const { subscribe, set } = store;

  return {
    subscribe,
    update: (status: Evaluation) => {
      const oldStatus = get(store);
      if (!oldStatus || statusValues[status] > statusValues[oldStatus]) {
        set(status);
      }
    },
    reset: () => {
      set(null);
    },
  };
};

// prettier-ignore
export const charStores = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'z', 'x', 'c', 'v', 'b', 'n', 'm',
].reduce((acc, c) => {
  acc.set(c, createCharStore());
  return acc;
}, new Map<string, CharStore>());

type CharStore = ReturnType<typeof createCharStore>;
