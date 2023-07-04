import React, { useState, useEffect } from 'react';
import CardService from '../services/CardService';
import Card from './Card';
import EditCard from './EditCard';
import { Card as CardType } from '../types/Card';
import '../styles/CardManager.css';

const CardManager: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const cards = await CardService.getCards();
    setCards(cards);
  };

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
  };

  const handleCardUpdate = async (updatedCard: CardType) => {
    await CardService.updateCard(updatedCard);
    fetchCards();
  };

  const handleCardDelete = async (cardId: string) => {
    await CardService.deleteCard(cardId);
    fetchCards();
  };

  return (
    <div className="card-manager">
      <div className="card-list">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleCardClick} />
        ))}
      </div>
      {selectedCard && (
        <EditCard
          card={selectedCard}
          onCardUpdate={handleCardUpdate}
          onCardDelete={handleCardDelete}
        />
      )}
    </div>
  );
};

export default CardManager;