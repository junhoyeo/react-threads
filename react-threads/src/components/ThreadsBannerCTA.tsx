import { ThreadsAppIcon } from './ThreadsAppIcon';

export type ThreadsBannerCTAProps = {
  // FIXME: pass classnames with `clsx`
  imageProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'className'>;
  description?: string;
  title?: string;
  href?: string;
};

export const ThreadsBannerCTA: React.FC<ThreadsBannerCTAProps> = ({
  imageProps,
  description,
  title,
  href,
}) => {
  return (
    <div className="mx-4 mt-4">
      {/* wrapper */}

      <div className="flex flex-col items-center w-full py-[44px] px-[16px] bg-[rgb(10,10,10)] rounded-[16px]">
        {/* contents */}
        <div className="mb-[16px] relative w-[84px] h-[84px]">
          <ThreadsAppIcon className="bg-black rounded-[22%] -py-[7px]" />
          <div className="bg-slate-[rgb(10,10,10)] p-1 rounded-full absolute right-0 bottom-0">
            <img className="h-[54px] w-[54px] object-cover rounded-full" {...imageProps} />
          </div>
        </div>
        <p className="text-[rgb(97,97,97)] text-[15px]">{description}</p>
        <a className="mt-[32px]" href={href} target="_blank">
          <button className="border-[0.9px] border-[rgba(243,245,247,0.15)] rounded-[10px] px-4 text-[rgb(243,245,247)] font-semibold text-[15px] h-[34px] transition-transform focus:scale-95">
            {title}
          </button>
        </a>
      </div>
    </div>
  );
};
