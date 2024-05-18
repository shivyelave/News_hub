import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsContainer from './components/NewsContainer';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
         <Routes>
          <Route exact  path ="/" element={<NewsContainer key="general" pageSize="10" country ='in' category="general"/>}/>
          <Route exact  path ="/sports" element={<NewsContainer key="sports" pageSize="10" country ='in' category="sports"/>}/>
          <Route exact  path ="/entertainment" element={<NewsContainer key="entertainment" pageSize="6" country ='in' category="entertainment"/>}/>
          <Route exact  path ="/business" element={<NewsContainer key="business" pageSize="10" country ='in' category="business"/>}/> 
          <Route exact  path ="/science" element={<NewsContainer key="science" pageSize="10" country ='in' category="science"/>}/>
          <Route  exact path ="/technology" element={<NewsContainer key="technology" pageSize="10" country ='in' category="technology"/>}/>
          <Route  exact path ="/health" element={<NewsContainer key="health" pageSize="10" country ='in' category="health"/>}/>
         </Routes>

          <Footer/>
        </Router>
      </div>
    )
  }
}


