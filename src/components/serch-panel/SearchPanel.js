import React from 'react';
import './search-panel.css';

export default function SearchPanel() {
  return (
    <input
      className='form-control search-input'
      type="text"
      placeholder='Поиск по записям'
    />
  )
}
