import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
<>
<div>
<Navbar/>
<Home/>
<About/>
<Skill/>
<Project/>
<Contact/>
<Footer/>
</div>
 <ToastContainer />
</>
  )
}

