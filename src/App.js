import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
//import { useGlobalContext } from './context';
import './style.css';

export default function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
