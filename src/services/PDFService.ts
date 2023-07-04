import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Supercard } from "../types/Supercard";

class PDFService {
  generateSupercardPDF(supercard: Supercard) {
    const doc = new jsPDF();

    const tableData = supercard.cards.map((card) => {
      return {
        name: card.name,
        barcode: card.barcode.value,
      };
    });

    doc.autoTable({
      head: [["Name", "Barcode"]],
      body: tableData,
      styles: { cellWidth: 'wrap' },
      columnStyles: { 1: { cellWidth: 40 } },
    });

    doc.save(`${supercard.name}.pdf`);
  }
}

export default new PDFService();