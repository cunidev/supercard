import React from 'react';
import { Card as CardType } from '../types/Card';
import './Card.css';

interface CardProps {
  card: CardType;
  onEdit: (card: CardType) => void;
  onDelete: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{card.name}</h2>
        <div className="card-actions">
          <button onClick={() => onEdit(card)}>Edit</button>
          <button onClick={() => onDelete(card)}>Delete</button>
        </div>
      </div>
      <div className="card-body">
        <img src={card.barcodeImage} alt="barcode" />
      </div>
    </div>
  );
};

export default Card;