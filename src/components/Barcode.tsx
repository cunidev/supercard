import React from 'react';
import { Barcode as BarcodeType } from '../types/Barcode';
import '../styles/Barcode.css';

interface BarcodeProps {
  barcode: BarcodeType;
}

const Barcode: React.FC<BarcodeProps> = ({ barcode }) => {
  return (
    <div className="barcode-container">
      <img src={barcode.image} alt="barcode" className="barcode-image" />
      <p className="barcode-type">{barcode.type}</p>
    </div>
  );
};

export default Barcode;