import { Card } from './Card';

export interface Supercard {
  id: string;
  cards: Card[];
  grid: '3x2' | '4x2';
}