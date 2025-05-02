'use client';
import {memo} from 'react';

type Props = {
  children: string;
};

export const Title = memo((props: Props) => {
  return <h1 className="text-center text-3xl mt-5 md:text-4xl md:mt-10">{props.children}</h1>;
});
