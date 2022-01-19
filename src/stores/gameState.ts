import { writable } from 'svelte/store';

export const gameState = writable<GameState>('playing');
type GameState = 'playing' | 'paused' | 'over';
