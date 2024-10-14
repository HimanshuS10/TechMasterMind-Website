import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Main from './pages/Main';
import Stories from './pages/Stories';
import Himanshu from './pages/Story/Himanshu';
import Jason from './pages/Story/Jason';
import Brian from './pages/Story/Brian';
import PageNotFound from './pages/PageNotFound';
import Nikita from './pages/Story/Nikita'
import Contact from './pages/Contact';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path='/stories' index element={<Stories />} />
        {/* All the stories links */}
        <Route path='stories/Himanshu' index element={<Himanshu />} />
        <Route path='stories/Jason' index element={<Jason />} />
        <Route path='stories/Brian' index element={<Brian />} />
        <Route path='stories/Nikita' index element={<Nikita />} />
        {/* 404 Page */}
        <Route path='*' index element={<PageNotFound />}/>
        {/* Contact Page */}
        <Route path='/contact' index element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  
  )
}
