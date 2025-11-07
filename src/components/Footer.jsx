import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className='w-full bg-gray-800 text-white py-4 mt-8'>
                <div className='container mx-auto text-center'>
                    <p>
                        &copy; {new Date().getFullYear()} Fredagskos. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
