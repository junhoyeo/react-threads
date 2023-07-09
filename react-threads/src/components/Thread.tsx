import Image from 'next/image';
import { useMemo } from 'react';
import {
  Candidate,
  ThreadsHdProfilePicVersion,
  type Thread as ThreadPost,
  type Post,
  type RepostedPost,
} from 'threads-api';
import { formatToRelative } from '../utils/format';
import { LinkifyWrapper } from './LinkifyWrapper';
import { ThreadsIcons } from './ThreadsIcons';

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

export type ThreadImageProps = {
  post: Post | RepostedPost;
};
export const ThreadImage: React.FC<ThreadImageProps> = ({ post }) => {
  const bestCandidate = useMemo(() => {
    type CandiateItem = Candidate | ThreadsHdProfilePicVersion;
    const candidates: CandiateItem[] = post.image_versions2?.candidates;

    if (!candidates.length) {
      return null;
    }

    // largest candidate
    // let is_square: boolean = true;
    const best = candidates.reduce((prev, current) => {
      if ((prev?.width || 0) > (current?.width || 0)) {
        return prev;
      } else {
        return current;
      }
    }, undefined as CandiateItem | undefined)!;

    return best;
  }, [post.image_versions2]);

  if (!bestCandidate) {
    return null;
  }

  return (
    <div className="mt-2">
      <div className="z-0 flex min-h-0 position">
        <Image
          width={bestCandidate.width}
          height={bestCandidate.height}
          className="w-full h-auto border-[0.5px] rounded-[8px] border-[rgba(243,245,247,0.15)]"
          alt=""
          style={{
            aspectRatio: `${post.original_width / post.original_height}`,
          }}
          src={bestCandidate.url}
        />
      </div>
    </div>
  );
};

export type ThreadProps = {
  thread?: ThreadPost;
};
export const Thread: React.FC<ThreadProps> = ({ thread }) => {
  const item = thread?.thread_items?.[0];

  const reposted_post = item?.post.text_post_app_info.share_info.reposted_post;
  // const quoted_post = item?.post.text_post_app_info.share_info.quoted_post;
  const post = reposted_post || item?.post || null;
  const user = post?.user;

  const nestedPost = useMemo(() => {
    const reposted_post = post?.text_post_app_info.share_info.reposted_post;
    const quoted_post = post?.text_post_app_info.share_info.quoted_post;
    return reposted_post || quoted_post || null;
  }, [post]);

  if (!item) {
    return null;
  }

  const nestedRepliesCount = nestedPost?.text_post_app_info.direct_reply_count;

  return (
    <div className="px-3 pt-3 pb-4">
      {/* wrapper */}

      <div className="z-10 flex flex-col w-full max-w-xl mx-auto text-[rgb(243,245,247)]">
        {/* content */}
        <div>
          <div className="pt-1 pb-4">
            <div className="grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[36px_0_max-content_max-content]">
              <div className="pt-0 row-[1/span_2] col-[1]">
                <div className="w-[36px] h-[36px] rounded-full bg-[rgb(30,30,30)] overflow-hidden">
                  {user?.profile_pic_url && (
                    <Image
                      className="w-full h-full"
                      alt={user.username}
                      src={user.profile_pic_url}
                      width={1200}
                      height={1200}
                    />
                  )}
                </div>
              </div>
              <div className="self-center pt-0 col-[2] row-[1/span_2]">
                <div className="grid h-full grid-cols-[1fr_max-content]">
                  <div className="col-[1] self-center">
                    <span className="flex items-center">
                      <a className="text-[rgb(243,245,247)] inline">{user?.username}</a>
                      {user?.is_verified && (
                        <span className="ml-1">
                          <ThreadsIcons.Verified className="relative block" />
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="flex items-center leading-[20px] col-[2]">
                    <span className="text-[rgb(97,97,97)] min-w-[24px] text-center inline-block">
                      {formatToRelative(post?.taken_at)}
                    </span>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="pt-[10px] row-[2/span_2] col-[1/span_2]">
                <LinkifyWrapper>
                  {!!post?.caption?.text && (
                    <div>
                      <div
                        className="mt-[3px] whitespace-pre-wrap leading-[140%]"
                        style={{ overflowWrap: 'anywhere', fontSize: '.9375rem' }}
                      >
                        <p className="my-0">{post.caption?.text}</p>
                      </div>
                    </div>
                  )}
                </LinkifyWrapper>

                {post && <ThreadImage post={post} />}

                {post?.text_post_app_info.link_preview_attachment && (
                  <ThreadLinkPreviewAttachment
                    link_preview_attachment={post.text_post_app_info.link_preview_attachment}
                  />
                )}

                {nestedPost && (
                  <div className="border-[0.5px] border-[rgba(243,245,247,0.15)] p-4 mt-4 rounded-[8px]">
                    <div className="flex items-center w-full">
                      {nestedPost.user.profile_pic_url && (
                        <Image
                          className="w-[18px] h-[18px] mr-2 rounded-full"
                          alt={nestedPost.user.username}
                          src={nestedPost.user.profile_pic_url}
                          width={1200}
                          height={1200}
                        />
                      )}
                      <span className="font-semibold text-[13px] text-[rgb(243,245,247)]">
                        {nestedPost.user.username}
                      </span>
                      <span className="ml-auto text-[rgb(97,97,97)] min-w-[24px] text-center inline-block text-[13px]">
                        {formatToRelative(nestedPost.taken_at)}
                      </span>
                    </div>

                    <div className="mt-2">
                      <LinkifyWrapper>
                        {!!nestedPost?.caption?.text && (
                          <p
                            className="whitespace-pre-wrap leading-[140%] text-[13px]"
                            style={{ overflowWrap: 'anywhere' }}
                          >
                            {nestedPost.caption?.text}
                          </p>
                        )}
                      </LinkifyWrapper>

                      {nestedPost && <ThreadImage post={nestedPost} />}

                      {nestedPost?.text_post_app_info.link_preview_attachment && (
                        <ThreadLinkPreviewAttachment
                          link_preview_attachment={nestedPost.text_post_app_info.link_preview_attachment}
                        />
                      )}
                    </div>

                    <div className="mt-[6px] flex items-end row-[4] col-[1/span_2]">
                      <div className="flex items-center min-h-[22px] leading-[21px] text-[13px] text-[rgb(97,97,97)]">
                        {(nestedRepliesCount || 0) >= 1 && (
                          <span>
                            {`${nestedRepliesCount?.toLocaleString()} ${
                              nestedRepliesCount === 1 ? 'reply' : 'replies'
                            }`}
                          </span>
                        )}
                        {(nestedRepliesCount || 0) >= 1 && (nestedPost?.like_count || 0) >= 1 && (
                          <span>&nbsp;·&nbsp;</span>
                        )}
                        {(nestedPost?.like_count || 0) >= 1 && (
                          <span>{nestedPost?.like_count.toLocaleString()} likes</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-[6px]">
                  <div className="grid grid-cols-[36px_36px_36px_36px]">
                    <Button>
                      <ThreadsIcons.Like />
                    </Button>
                    <Button>
                      <ThreadsIcons.Comment />
                    </Button>
                    <Button>
                      <ThreadsIcons.Repost />
                    </Button>
                    <Button>
                      <ThreadsIcons.Send />
                    </Button>
                  </div>
                </div>

                <div className="flex items-end row-[4] col-[1/span_2]">
                  <div className="flex items-center min-h-[22px] leading-[21px] text-[15px] text-[rgb(97,97,97)]">
                    <span>{item.view_replies_cta_string}</span>
                    <span>&nbsp;·&nbsp;</span>
                    <span>{post?.like_count.toLocaleString()} likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Button: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className="flex p-[8px] -ml-[7px] justify-center items-center">
      <div>{props.children}</div>
    </div>
  );
};
