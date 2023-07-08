'use client';

import ReactLinkify from 'react-linkify';

const Linkify: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof window !== 'undefined') {
    return (
      <ReactLinkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
          <a target="_blank" href={decoratedHref} key={key} style={{ color: 'rgb(0, 149, 246)' }}>
            {decoratedText}
          </a>
        )}
      >
        {children}
      </ReactLinkify>
    );
  }
  return children;
};

export const LinkifyWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  // if (typeof window !== 'undefined') {
  //   return <Linkify>{children}</Linkify>;
  // }
  return children;
};
