import React from 'react';
import { RouterProvider } from 'react-router-dom';
import route from './route/Routs';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
   <div className='max-w-[1440px] mx-auto'>
    <RouterProvider router={route}></RouterProvider>
    <Toaster></Toaster>
   </div>
  );
};

export default App;