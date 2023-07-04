import React, { useEffect, useState } from 'react';
import { Supercard } from '../types/Supercard';
import { PDFService } from '../services/PDFService';
import Grid from './Grid';
import './SupercardPDF.css';

interface SupercardPDFProps {
  supercard: Supercard;
}

const SupercardPDF: React.FC<SupercardPDFProps> = ({ supercard }) => {
  const [pdfData, setPdfData] = useState<string | null>(null);

  useEffect(() => {
    const generatePDF = async () => {
      const pdfService = new PDFService();
      const data = await pdfService.generateSupercardPDF(supercard);
      setPdfData(data);
    };

    generatePDF();
  }, [supercard]);

  return (
    <div className="supercard-pdf">
      {pdfData ? (
        <embed
          src={`data:application/pdf;base64,${pdfData}`}
          type="application/pdf"
          className="supercard-pdf__embed"
        />
      ) : (
        <Grid cards={supercard.cards} />
      )}
    </div>
  );
};

export default SupercardPDF;