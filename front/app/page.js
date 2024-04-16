import React from 'react';
import Navbar from './componenents/Navbar/page';
import Image from "next/image";

import CarouselExample from './componenents/CarouselExample/page';

export default function HomePage() {
  return (
    <>
    <Navbar />
    
            <Image
              src="/image/img.jpg"
              alt="Vercel Logo"
              
              width={1500}
              height={1000}
              priority
            />
      
    
      

    </>
  );
}