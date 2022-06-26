import './App.css';
import React, {useEffect, useState} from 'react';
//Introduction to React
//import Link from './Link';
//import Input from './Input';
//import Container from './Container';
//import Button from './Button';
//Store
import Storefront from './Storefront';
//Map
//import Map from './Map';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(() => {localStorage.getItem('loggedIn')});

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  if(loggedIn) {
    return(<>
      <Storefront />
      <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
    </>);
  }
  return (<>
    <h2>Please login</h2>
    <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
  </>);

  //return <Map />;
}