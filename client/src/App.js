import React from "react"
import MainForm from './components/MainForm.js';
import './App.css';
//import Btn from "./components/Btn";
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();


function App() {

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:8080/api")
  //     .then(res => res.json())
  //     .then(data => setData(data.message))
  //     .catch(error => console.log(error))
  // }, []);

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
