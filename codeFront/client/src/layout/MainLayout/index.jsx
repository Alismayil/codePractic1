import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout