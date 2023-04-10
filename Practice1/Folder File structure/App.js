import explorer from './Data';
import Folder from './Folder';
import React from 'react';

export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}