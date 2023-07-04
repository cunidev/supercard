import { Card } from '../types/Card';

class CardService {
  private cards: Card[] = [];

  addCard(card: Card): void {
    this.cards.push(card);
  }

  getCards(): Card[] {
    return this.cards;
  }

  getCard(id: string): Card | undefined {
    return this.cards.find(card => card.id === id);
  }

  updateCard(updatedCard: Card): void {
    const index = this.cards.findIndex(card => card.id === updatedCard.id);
    if (index !== -1) {
      this.cards[index] = updatedCard;
    }
  }

  deleteCard(id: string): void {
    this.cards = this.cards.filter(card => card.id !== id);
  }
}

export default new CardService();