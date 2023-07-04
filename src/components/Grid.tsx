import React from 'react';
import './Grid.css';

interface GridProps {
  children: React.ReactNode;
  rows: number;
  columns: number;
}

const Grid: React.FC<GridProps> = ({ children, rows, columns }) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className="grid-container" style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;