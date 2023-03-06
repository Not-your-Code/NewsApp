import logo from './logo.svg';
import './App.css';
import React, { Component , useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

export default class App extends Component {
 
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <NavBar />
         
          <Routes>
            <Route path="/" element={<News key="general" pagesize={12} category="general" country="us" />}></Route>
            <Route path="/general" element={<News key="general" pagesize={12} category="general" country="us" />}></Route>
            <Route path="/sports" element={<News key="sports" pagesize={12} category="sports" country="us" />}></Route>
            <Route path="/technology" element={<News key="tech" pagesize={12} category="technology" country="us" />}></Route>
            <Route path="/business" element={<News key="bussi" pagesize={12} category="business" country="us" />}></Route>
            <Route path="/entertainment" element={<News key="ent" pagesize={12} category="entertainment" country="us" />}></Route>
            <Route path="/health" element={<News key="general" pagesize={12} category="health" country="us" />}></Route>
          
          
          
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



