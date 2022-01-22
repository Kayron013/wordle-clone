import { writable } from 'svelte/store';

export const gameStore = writable<GameStatus>('playing');
type GameStatus = 'playing' | 'paused' | 'over';
