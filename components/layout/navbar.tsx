import Link from 'next/link';
import React from 'react';
import Logo from '../logo';

type Props = {
  path: string;
};

const routes = [
  {
    name: 'Hem',
    path: '/',
  },
  {
    name: 'Om',
    path: '/about',
  },
];

const Navbar: React.FC<Props> = ({ path }) => {
  return (
    <header className="h-16 px-12 bg-emerald-400 flex md:px-24">
      <Logo />

      <div className="flex gap-8 h-full items-center ml-auto">
        {routes.map((route) => {
          const isActive = path === route.path;
          return (
            <Link href={route.path} key={route.path} passHref>
              <a
                className={`${
                  isActive ? 'font-semibold' : 'font-normal'
                } cursor-pointer`}
              >
                {route.name}
              </a>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
