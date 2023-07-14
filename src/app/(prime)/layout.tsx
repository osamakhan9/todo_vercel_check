import React from 'react';
import Navbar from './components/Navbar';

const layout = ({ children }: any) => {
        return (
                <div className='max-w-7xl mx-auto'>
                        <Navbar></Navbar>
                        {children}
                </div>
        );
};

export default layout;