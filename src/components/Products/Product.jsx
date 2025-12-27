import React from 'react'
import { Outlet } from "react-router-dom";
import SEO from '../SEO';
import GemstoneProductCollection from './GemstoneProductCollection/GemstoneProductCollection';

const Product = () => {
  return (
    <>
     {/* Minimal SEO for Products Listing */}
      <SEO
        title="Pateluxe® | Natural Loose Gemstones | Certified Navratna Stones"
        description="Explore Pateluxe's wide range of authentic, certified loose gemstones including Ruby, Diamond, Emerald, Sapphire, Pearl, Hessonite, Cat’s Eye, and Red Coral."
        keywords="Pateluxe products, loose gemstones, certified gemstones India, Navratna stones, Ruby, Diamond, Emerald, Sapphire"
        canonical="https://www.pateluxe.com/products"
      />
    <GemstoneProductCollection />
    <Outlet />
    </>
  )
}

export default Product