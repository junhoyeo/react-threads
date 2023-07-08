import Image from 'next/image';
import { useMemo } from 'react';

export type ThreadLinkPreviewAttachmentProps = {
  link_preview_attachment: {
    image_url: string;
    title: string;
    url: string;
  };
};
export const ThreadLinkPreviewAttachment: React.FC<ThreadLinkPreviewAttachmentProps> = ({
  link_preview_attachment,
}) => {
  const cleanedHostname = useMemo(
    () => (link_preview_attachment.url.split('://')[1] || link_preview_attachment.url).split('/')[0],
    [link_preview_attachment.url],
  );

  return (
    <div className="mt-4 mb-2 border border-[rgba(243,245,247,0.15)] rounded-[8px] overflow-hidden">
      <div className="flex flex-col">
        <Image
          width={1200}
          height={1200}
          className="object-cover w-full"
          alt=""
          src={link_preview_attachment.image_url}
        />
        <div className="flex flex-col p-4">
          <span className="text-[rgb(97,97,97)] text-[13px]">{cleanedHostname}</span>
          <span className="mt-1 truncate text-[rgb(243,245,247)] text-[15px] leading-[21px]">
            {link_preview_attachment.title}
          </span>
        </div>
      </div>
    </div>
  );
};
