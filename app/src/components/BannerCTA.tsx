import { ThreadAppIcon } from './ThreadIcon';

export const BannerCTA: React.FC = () => {
  return (
    <div className="mx-4 mt-4">
      {/* wrapper */}

      <div className="flex flex-col items-center w-full py-[44px] px-[16px] bg-[rgb(10,10,10)] rounded-[16px]">
        {/* contents */}
        <div className="mb-[16px] relative w-[84px] h-[84px]">
          <ThreadAppIcon className="bg-black rounded-[22%] -py-[7px]" />
          <div className="bg-slate-[rgb(10,10,10)] p-1 rounded-full absolute right-0 bottom-0">
            <img
              className="h-[54px] w-[54px] object-cover rounded-full"
              alt="junhoyeo"
              src="https://github.com/junhoyeo.png"
            />
          </div>
        </div>
        <p className="text-[rgb(97,97,97)] text-[15px]">Follow and give @junhoyeo a star.</p>
        <a href="https://github.com/junhoyeo/threads-api" target="_blank">
          <button className="mt-[32px] border-[0.9px] border-[rgba(243,245,247,0.15)] rounded-[10px] px-4 text-[rgb(243,245,247)] font-semibold text-[15px] h-[34px] transition-transform focus:scale-95">
            Star on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};
