import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex  justify-center">
      {/* Sidebar */}
      
      {/* Main Content */}
      <main className=" w-[95%] p-4">
        {/* Navbar */}
        
          <Navbar/>
        {/* Main Content */}
        {children}
      </main>
    </div>
  );
}
