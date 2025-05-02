'use client';
import {useRouter} from 'next/navigation';

export const toTopPage = () => {
  const router = useRouter();
  router.push('/');
};
