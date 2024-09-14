import { useState , Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Umbrella from './components/umbrella'

import './App.css'
function App() {
  const [bodycolour, setbodycolour] = useState('bg-blue-200');
  return (
    <>
      <div className={`w-screen h-screen flex items-center overflow-x-hidden  ${bodycolour}`}>
        <Umbrella setbodycolour={setbodycolour} />
      </div>
    </>
  );
}

export default App;
