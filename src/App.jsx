// 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import * as serviceWorker from './serviceWorker';
import { Contact } from './components/contact';
// import UserLogin from './components/Login';
// import App5 from './Login page/App5';
import Login from './components/UserLogin';
import Registration from './components/userRegistration';
import ServiceLogin from './components/serviceProviderLogin';
import { ServiceList } from './components/Loginservices/ServiceList';
import JsonData from "./data/data.json";
import LandingPage from "./components/Landingpage";
import ServiceForm from './components/Loginservices/ServiceForm';
import ServiceRegistration from "./components/serviceProviderRegistration"

const App = () => {


  const AuthorizedService=()=>{
    const status=sessionStorage["status"]
    return status==="success" ? <ServiceList/> : <Login/>
  }

  const Authorizedrequest=()=>{
    const status=sessionStorage["status"]
    return status==="success" ? <ServiceList/> :<Login/>
  }
  const Authorizedserviceform=()=>{
    const status=sessionStorage["status"]
    return status==="success"?<ServiceForm/>:<Login/>
  }
  return (
    <div>
   
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage></LandingPage>}/>
      <Route path="login" element={<Login></Login>}/> 
      <Route path="register" element={<Registration></Registration>}/>
      {/* <Route path="login" element={<ServiceLogin></ServiceLogin>}></Route> */}
      <Route path="/servicelist" element={<AuthorizedService/>}/>
      <Route path="/servicerequest" element={<Authorizedrequest/>}/>
      <Route path="/serviceform" element={<Authorizedserviceform/>}/>
      <Route path="/serviceprovider" element={<ServiceLogin></ServiceLogin>}/>
      <Route path="/ServiceProviderregister" element={<ServiceRegistration></ServiceRegistration>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
