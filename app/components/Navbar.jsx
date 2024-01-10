import React from "react";
const { default: Link } = require("next/link");

const links = [
    { href: '/client', label: 'client'},
    { href: '/drinks', label: 'boissons' },
    { href: '/prisma-exemple', label: 'prisma'},
    { href: '/tasks', label: 'tâches'},
]

const Navbar = () => {
    return (
        <nav className="bg-base-300 py-2 shadow-2xl">
            <div className="navbar px-8  max-auto flex-col sm:flex-row justify-between items-center">
                <Link href="/" className="btn btn-primary text-white">
                    Samba NextJS
                </Link>
                <ul className="menu menu-horizontal md:ml-8 ">
                    {links.map((link) => {
                        return <li key={link.href}>
                            <Link href={link.href} className="capitalize">{link.label}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
