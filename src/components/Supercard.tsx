import React, { useState, useEffect } from 'react';
import { Supercard as SupercardType } from '../types/Supercard';
import { Card as CardType } from '../types/Card';
import CardService from '../services/CardService';
import Grid from './Grid';
import './Supercard.css';

interface SupercardProps {
  supercard: SupercardType;
}

const Supercard: React.FC<SupercardProps> = ({ supercard }) => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await CardService.getCards(supercard.cardIds);
      setCards(cards);
    };

    fetchCards();
  }, [supercard]);

  return (
    <div className="supercard">
      <h2>{supercard.name}</h2>
      <Grid cards={cards} />
    </div>
  );
};

export default Supercard;