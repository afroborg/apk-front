import { NextPage } from 'next';
import { ErrorProps } from 'next/error';
import React from 'react';

const Error: NextPage<ErrorProps> = ({ statusCode, title }) => {
  return (
    <div className="max-w-xs mx-auto p-4 mt-12 md:max-w-md text-center rounded-md flex flex-col	gap-4">
      <h2 className="font-bold text-6xl">{statusCode}</h2>
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export default Error;
