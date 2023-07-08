import { NextPage } from 'next';
import { BannerCTA } from 'react-threads';

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full min-h-screen py-[36px]">
      <div className="flex flex-col w-full max-w-2xl mx-auto">
        <header className="flex flex-col items-center gap-3 px-4 py-4">
          <h1 className="text-2xl text-white">React Threads</h1>
          <div className="border-[0.9px] border-[rgba(243,245,247,0.15)] rounded-[8px] w-full p-2 px-4 text-zinc-400/60">
            Library coming soon...
          </div>
          <a href="/CuW23qzhIdJ">
            <button className="border-[0.9px] border-[rgba(243,245,247,0.15)] rounded-[10px] px-4 text-[rgb(243,245,247)] font-semibold text-[15px] h-[34px] transition-transform focus:scale-95">
              Go to Example
            </button>
          </a>
        </header>

        <BannerCTA />
      </div>
    </main>
  );
};

export default Home;
