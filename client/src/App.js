import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import MainForm from './components/MainForm.js';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Sessions/Login/Login.js'
import HomePage from './components/Home/Home-page.js'
import Register from './components/Sessions/Register/Register'
import Profile from './components/Sessions/UserProfile/UserProfile'
import MentoryListContainer from './components/Mentories/MentoryListContainer/MentoryListContainer'
import MentoryOwnListContainer from './components/Mentories/MentoryOwnListContainer/MentoryOwnListContainer'
import MentoryCreate from './components/Mentories/MentoryCreate/MentoryCreate'
import MentoryUpdate from './components/Mentories/MentoryUpdate/MentoryUpdate'
import SubscriptionListContainer from './components/Subscriptions/SubscriptionListContainer/SubscriptionListContainer'
import Error404 from './components/Error404/Error404'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mentories' element={<MentoryListContainer />} />
        <Route path='/mentories/create' element={<MentoryCreate />} />
        <Route path='/mentories/update/' element={<MentoryUpdate />} />
        <Route path='/mentories/own' element={<MentoryOwnListContainer />} />
        <Route path='/subscriptions' element={<SubscriptionListContainer />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
