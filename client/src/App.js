import React from "react"
// import MainForm from './components/MainForm.js';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Login from "./components/Login.js/Login.js";
import Register from "./components/Register/register";


const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <>
        <Login />
        <Register />
        {/* <MainForm /> */}
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
