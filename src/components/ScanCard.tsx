import React, { useState } from 'react';
import { BarcodeScannerService } from '../services/BarcodeScannerService';
import { Barcode } from '../types/Barcode';
import '../styles/ScanCard.css';

const ScanCard: React.FC = () => {
  const [barcode, setBarcode] = useState<Barcode | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async () => {
    try {
      const barcode = await BarcodeScannerService.scan();
      setBarcode(barcode);
      setError(null);
    } catch (err) {
      setError('Failed to scan the card. Please try again.');
    }
  };

  return (
    <div className="scan-card">
      <button onClick={handleScan}>Scan Card</button>
      {barcode && (
        <div className="barcode-info">
          <p>Barcode Type: {barcode.type}</p>
          <p>Barcode Data: {barcode.data}</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ScanCard;