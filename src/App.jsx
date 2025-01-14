import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Himanshu from './pages/blogs/Himanshu';
import Jason from './pages/blogs/Jason';
import Brian from './pages/blogs/Brian';
import Nikita from './pages/blogs/Nikita';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' index element={<About />} />
        <Route path='/stories' index element={<Stories />} />
        {/* All the stories links - start */}
        <Route path='stories/Himanshu' index element={<Himanshu />} />
        <Route path='stories/Jason' index element={<Jason />} />
        <Route path='stories/Brian' index element={<Brian />} />
        <Route path='stories/Nikita' index element={<Nikita />} />
        {/* All the stories links - end */}
        {/* 404 Page */}
        <Route path='*' index element={<PageNotFound />} />
        {/* Contact Page */}
        <Route path='/contact' index element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
