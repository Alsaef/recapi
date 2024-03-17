import React from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Reccapi from './recapi/Reccapi';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Reccapi></Reccapi>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
