import * as React from 'react';
import { createBrowserRouter, HashRouter, RouterProvider  } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage'

import './GlobalStyles/styles.css'
function App () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    }
  ]);
  
  return ( 
    <RouterProvider router={router} />
  );
}

export default App;