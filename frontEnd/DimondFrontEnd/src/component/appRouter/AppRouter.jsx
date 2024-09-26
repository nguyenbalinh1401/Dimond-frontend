import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../../Page/Home';
import SignIn from '../Authentication/SignIn';

export default function AppRouter() {
  return (
    <div className='w-full min-h-[80vh] flex items-start justify-center'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<SignIn/>} />
        </Routes>
      
    </div>
  );
}
