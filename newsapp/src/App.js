/** @format */

import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Navbar, { register } from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNews from './components/PageNews';
import { Form } from 'react-bootstrap';
// import { register } from './components/Navbar'

export default function App() {
  const [register, setRegister] = useState({
    // Hook used to change the layout of the login and Sign UP
    title: 'Login',
    color: 'primary',
    check: false,
  });
  const [loginVerified, setLoginVerified] = useState(false);
  const SideBarItems = [
    // SideBar Items
    {
      Icon: 'house',
      Name: 'Home',
      src: '/',
    },
    {
      Icon: 'volleyball',
      Name: 'Sport',
      src: '/',
    },
    { Icon: 'microchip', Name: 'Technology', src: '/' },
    { Icon: 'film', Name: 'Entertainment', src: '/' },
    { Icon: 'cloud', Name: 'Weather', src: '/' },
  ];
  const [newsCategories, setNewsCategories] = useState([
    // All the News Categories
    'Technology',
    'Sport',
    'Music',
    'Entertainment',
    'Education',
    'Video Game',
  ]);
  console.log(newsCategories);
  return (
    <Router>
      <Navbar
        setRegister={setRegister}
        loginVerified={loginVerified}
        setLoginVerified={setLoginVerified}
      />
      <Sidebar
        SideBarItems={SideBarItems}
        setNewsCategories={setNewsCategories}
      />
      {/* <PageNews/> */}
      <Switch>
        <Route path='/SignUp'>
          <SignUp register={register} setLoginVerified={setLoginVerified} />
        </Route>
        <Route path='/'>
          <Home
            newsCategories={newsCategories}
            setNewsCategories={setNewsCategories}
          />
          <Footer SideBarItems={SideBarItems}/>
        </Route>
      </Switch>
      <Form/>
    </Router>
  );
}
