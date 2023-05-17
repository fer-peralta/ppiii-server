import React from 'react'
// import MainForm from './components/MainForm.js';
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Login from './components/Login/Login.js'
import Register from './components/Register/register'
import Profile from './components/UserProfile/USerProfile'
import Error404 from './components/Error404/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
