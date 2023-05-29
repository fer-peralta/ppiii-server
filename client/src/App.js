import React from 'react'
// import MainForm from './components/MainForm.js';
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from './components/navbar/Navbar'
import Login from './components/Sessions/Login/Login.js'
import Register from './components/Sessions/Register/register'
import Profile from './components/Sessions/UserProfile/USerProfile'
import MentoryListContainer from './components/Mentories/MentoryListContainer/MentoryListContainer'
import MentoryOwnListContainer from './components/Mentories/MentoryOwnListContainer/MentoryOwnListContainer'
//import MentoryCreate1 from './components/Mentories/MentoryCreate/MentoryCreate'
import MentoryCreate1 from './components/Mentories/MentoryCreate/mentoryCreate1'
import MentoryUpdate from './components/Mentories/MentoryUpdate/MentoryUpdate'
import Error404 from './components/Error404/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const queryClient = new QueryClient()

function App () {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/mentories' element={<MentoryListContainer />} />
          <Route path='/mentories/create' element={<MentoryCreate1 />} />
          <Route path='/mentories/update/' element={<MentoryUpdate />} />
          <Route path='/mentories/own' element={<MentoryOwnListContainer />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
