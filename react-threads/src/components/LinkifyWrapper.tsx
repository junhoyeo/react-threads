'use client';

import { useEffect, useState } from 'react';
import { Linkify } from './Linkify';

export const LinkifyWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // typeof window !== 'undefined'
    setIsClient(true);
  }, []);

  if (isClient) {
    return <Linkify>{children}</Linkify>;
  }
  return children;
};
