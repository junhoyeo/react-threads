import { ThreadsBannerCTA } from 'react-threads';

export const BannerCTA: React.FC = () => {
  return (
    <ThreadsBannerCTA
      imageProps={{
        alt: 'junhoyeo',
        src: 'https://github.com/junhoyeo.png',
      }}
      description="Follow and give @junhoyeo a star."
      title="Star on GitHub"
      href="https://github.com/junhoyeo/threads-api"
    />
  );
};
