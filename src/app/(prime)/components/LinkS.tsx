'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'



const ActiveLink = ({ path, children }: any) => {

        const pathName = usePathname();

        return (
                <Link href={path} className={`${pathName === path ? 'text-white bg-blue-400 p-2 rounded-md' : ''} p-2`}>
                        {children}
                </Link>
        );
};

export default ActiveLink;