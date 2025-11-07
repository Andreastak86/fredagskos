import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className='flex flex-row text-red-700 font-bold text-lg p-4'>
            <ul className='flex flex-row gap-4 ml-8'>
                <Link href='/'>
                    <li>Hjem</li>
                </Link>
                <Link href='/om-meg'>
                    <li>Om meg</li>
                </Link>
                <Link href='/fredagskos'>
                    <li>Fredagskos</li>
                </Link>
            </ul>
        </div>
    );
}
