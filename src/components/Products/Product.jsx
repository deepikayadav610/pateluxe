import React from 'react'
import { Outlet } from "react-router-dom";
import GemstoneProductCollection from './GemstoneProductCollection/GemstoneProductCollection';

const Product = () => {
  return (
    <>
    <GemstoneProductCollection />
    <Outlet />
    </>
  )
}

export default Product