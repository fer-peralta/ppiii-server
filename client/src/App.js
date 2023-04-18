import React from "react"
import MainForm from './components/MainForm.js';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <>
        <MainForm />
      </>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
