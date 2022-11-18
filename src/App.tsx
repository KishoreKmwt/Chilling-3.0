import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Dashboard from './Components/Dashboard';
import Teachers from './Components/Teachers/Teachers';
import AddTeachers from './Components/Teachers/AddTeachers';
import Students from './Components/Students/Students';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
    <Route path={"/"} element={<Dashboard />}></Route>
    <Route path={"/teachers"} element={<Teachers />}></Route>
    <Route path={"/teachers-add"} element={<AddTeachers />}></Route>

    <Route path ={"/students"} element={<Students/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
