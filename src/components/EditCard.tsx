import React, { useState } from 'react';
import { Card } from '../types/Card';
import { CardService } from '../services/CardService';
import '../styles/EditCard.css';

interface EditCardProps {
  card: Card;
  onCardUpdate: (card: Card) => void;
}

export const EditCard: React.FC<EditCardProps> = ({ card, onCardUpdate }) => {
  const [name, setName] = useState(card.name);
  const [color, setColor] = useState(card.color);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleSave = () => {
    const updatedCard = { ...card, name, color };
    CardService.updateCard(updatedCard);
    onCardUpdate(updatedCard);
  };

  return (
    <div className="edit-card">
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Color:
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};