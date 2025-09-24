import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="h-16 bg-purple-800 text-white flex items-center justify-between px-8">
            <div className="logo font-bold text-2xl">
                <Link href="/"> BitLinks </Link>
            </div>

            <ul className="flex items-center font-medium justify-between gap-3">
                <Link href="/"> <li className="hover:bg-purple-900 px-3 py-3 hover:rounded-lg">Home</li> </Link>
                <Link href="/shorten"> <li className="hover:bg-purple-900 px-3 py-3 hover:rounded-lg">Shorten</li> </Link>

                <li className="flex items-center gap-3">
                    {/* <Link href="/shorten"><button className="bg-purple-600 px-3 cursor-pointer hover:bg-purple-500 py-1 shadow-lg rounded-lg font-bold">Try Now</button></Link> */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 px-3 cursor-pointer hover:bg-purple-500 py-2 shadow-lg rounded-lg font-bold inline-block"
                    >
                        GitHub
                    </a>


                </li>
            </ul>
        </nav>
    )
}

export default Navbar
