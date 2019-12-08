import React, { useState } from 'react';
export const PanelAddFromUrl = () => {
  const [inputVal, setInputVal] = useState('');
  return (
    <div>
      HELLO WORLD
      <input value={inputVal} type='text' onChange={e => setInputVal(e.target.value)} />
      <button onClick={() => {

      }} >add</button>
    </div>

  )
}
