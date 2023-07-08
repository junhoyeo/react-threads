import Image from 'next/image';
import { type Thread as ThreadPost } from 'threads-api';
import { ThreadIcons } from './ThreadIcons';

type ThreadProps = {
  thread: ThreadPost;
};
export const Thread: React.FC<ThreadProps> = ({ thread }) => {
  const item = thread?.thread_items?.[0];

  if (!item) {
    console.log(thread);
    return null;
  }
  const reposted_post = item.post.text_post_app_info.share_info.reposted_post;
  const quoted_post = item.post.text_post_app_info.share_info.quoted_post;
  const post = reposted_post ? reposted_post : quoted_post ? quoted_post : item.post;
  const user = post.user;

  return (
    <div className="z-10 flex flex-col w-full max-w-xl mx-auto">
      <div>
        <div className="pt-1 pb-4">
          <div className="grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[36px_0_max-content_max-content]">
            <div className="pt-0 row-[1/span_2] col-[1]">
              <div className="w-[36px] h-[36px] rounded-full bg-[rgb(30,30,30)] overflow-hidden">
                <Image
                  className="w-full h-full"
                  alt={user.username}
                  src={user.profile_pic_url}
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
            <div className="self-center pt-0 col-[2] row-[1/span_2]">
              <div className="grid h-full grid-cols-[1fr_max-content]">
                <div className="col-[1] self-center">
                  <span className="flex items-center">
                    <a className="text-[rgb(243,245,247)] inline">{user.username}</a>
                    {user.is_verified && (
                      <span className="ml-1">
                        <ThreadIcons.Verified className="relative block" />
                      </span>
                    )}
                  </span>
                </div>

                <div className="flex items-center leading-[20px] col-[2]">
                  <span className="text-[rgb(97,97,97)] min-w-[24px] text-center inline-block">2h</span>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="pt-[10px] row-[2/span_2] col-[1/span_2]">
              {!!post.caption?.text && (
                <div>
                  <div
                    className="mt-[3px] whitespace-pre-wrap leading-[140%]"
                    style={{ overflowWrap: 'anywhere', fontSize: '.9375rem' }}
                  >
                    <p className="my-0">{post.caption?.text}</p>
                  </div>
                </div>
              )}
              <div className="mt-2">
                <div className="z-0 flex min-h-0 position">
                  {/* primary outline */}
                  <img
                    className="border-[0.5px] rounded-[8px] border-[rgba(243,245,247,0.15)]"
                    src="https://pbs.twimg.com/media/F0cYJwwWAAI4qQG?format=jpg&name=4096x4096"
                  />
                </div>
              </div>

              <div className="mt-[6px]">
                <div className="grid grid-cols-[36px_36px_36px_36px]">
                  <Button>
                    <ThreadIcons.Like />
                  </Button>
                  <Button>
                    <ThreadIcons.Comment />
                  </Button>
                  <Button>
                    <ThreadIcons.Repost />
                  </Button>
                  <Button>
                    <ThreadIcons.Send />
                  </Button>
                </div>
              </div>

              <div className="flex items-end row-[4] col-[1/span_2]">
                <div className="flex items-center min-h-[22px] leading-[21px] text-[15px] text-[rgb(97,97,97)]">
                  <span>{item.view_replies_cta_string}</span>
                  <span>&nbsp;·&nbsp;</span>
                  <span>{post.like_count.toLocaleString()} likes</span>
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
