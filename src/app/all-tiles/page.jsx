import AllTiles from '@/components/AllTiles';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const AllTilesPage = ({ searchParams }) => {
  return (
    <>
      <Navbar></Navbar>
      <AllTiles searchParams={searchParams}></AllTiles>
      <Footer></Footer>
    </>
  );
};

export default AllTilesPage;