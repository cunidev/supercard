export interface Barcode {
  id: string;
  type: string; // barcode type (e.g., QR, EAN, UPC, etc.)
  data: string; // the actual barcode data
}