import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className="h-full aspect-square p-2">
        <Image src="/logo.svg" alt="Logotyp" height="60px" width="60px" />
      </a>
    </Link>
  );
};

export default Logo;
