import React from "react"
// import MainForm from './components/MainForm.js';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/register";
import Profile from "./components/UserProfile/USerProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, PROFILE, LOGOUT, REGISTER } from "../src/config/path"


const queryClient = new QueryClient();


function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={LOGOUT} element={<Profile />} />

          <Route path='*' element={<h1>NOT FOUND !</h1>} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
