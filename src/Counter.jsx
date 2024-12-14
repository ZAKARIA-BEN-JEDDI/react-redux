import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrementer, Incrementer, Reset } from './action';

export default function Counter() {
  const num = useSelector(data => data.num);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl font-bold text-gray-800 mb-8">{num}</div>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          onClick={() => dispatch(Incrementer())}
        >
          Incrementer
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          onClick={() => dispatch(Decrementer())}
        >
          Decrementer
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
          onClick={() => dispatch(Reset())}
        >
          Reset
        </button>
      </div>
    </div>
      
      /* <button onClick={()=>{dispatch({type:"incrementer",num:num})}}>Incrementer</button>
      <button onClick={()=>{dispatch({type:"decrementer",num:num})}}>Decrementer</button>
      <button onClick={()=>{dispatch({type:"reset",num:num})}}>Reset</button> */
  );
}