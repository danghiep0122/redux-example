import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addressInput } from './actions';

import './App.css';

function App() {
  const address = useSelector(state => state.address)
  const dispatch = useDispatch()

  const [addInput, setAddInput] = useState('')

  const handleChange = (e) => {
    setAddInput(e.target.value)
  }

  const handleClick = () => {
    dispatch(addressInput(addInput))
    setAddInput('')
  }
  return (
    <div className="App">
      <h1>Hello {address}</h1>
      <input 
        className='somethg'
        placeholder='Nhap dia chi'
        onChange={handleChange}
        value={addInput}
       />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
