import { NextPage } from 'next';

type SVGProps = React.FC<React.SVGAttributes<SVGElement>>;

const Verified: SVGProps = (props) => (
  <svg
    aria-label="Verified"
    color="rgb(0, 149, 246)"
    fill="rgb(0, 149, 246)"
    height="12"
    role="img"
    viewBox="0 0 40 40"
    width="12"
    {...props}
  >
    <title>Verified</title>
    <path
      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const Like: SVGProps = (props) => (
  <svg
    aria-label="Like"
    color="rgb(243, 245, 247)"
    fill="transparent"
    height="19"
    role="img"
    viewBox="0 0 24 22"
    width="20"
    {...props}
  >
    <title>Like</title>
    <path
      d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z"
      stroke="currentColor"
      strokeWidth="2"
    ></path>
  </svg>
);

const Comment: SVGProps = (props) => (
  <svg
    aria-label="Comment"
    color="rgb(243, 245, 247)"
    fill="rgb(243, 245, 247)"
    height="20"
    role="img"
    viewBox="0 0 24 24"
    width="20"
  >
    <title>Comment</title>
    <path
      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

const Repost: SVGProps = (props) => (
  <svg
    aria-label="Repost"
    className="x1lliihq x1n2onr6"
    color="rgb(243, 245, 247)"
    fill="rgb(243, 245, 247)"
    height="20"
    role="img"
    viewBox="0 0 24 24"
    width="20"
    {...props}
  >
    <title>Repost</title>
    <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
  </svg>
);

const Send: SVGProps = (props) => (
  <svg
    aria-label="Share"
    className="x1lliihq x1n2onr6"
    color="rgb(243, 245, 247)"
    fill="rgb(243, 245, 247)"
    height="20"
    role="img"
    viewBox="0 0 24 24"
    width="20"
    {...props}
  >
    <title>Share</title>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="22"
      x2="9.218"
      y1="3"
      y2="10.083"
    ></line>
    <polygon
      fill="none"
      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
  </svg>
);

const Home: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full min-h-screen">
      <div className="z-10 flex flex-col w-full max-w-xl mx-auto">
        <div>
          <div className="pt-1 pb-4">
            <div className="grid grid-cols-[48px_minmax(0,1fr)] grid-rows-[36px_0_max-content_max-content]">
              <div className="pt-0 row-[1/span_2] col-[1]">
                <div className="w-[36px] h-[36px] rounded-full bg-[rgb(30,30,30)]">
                  <img src="https://pbs.twimg.com/profile_images/1671510098169180161/xdQUtnOJ_400x400.jpg" />
                </div>
              </div>
              <div className="self-center pt-0 col-[2] row-[1/span_2]">
                <div className="grid h-full grid-cols-[1fr_max-content]">
                  <div className="col-[1] self-center">
                    <span className="flex items-center">
                      <a className="text-[rgb(243,245,247)] inline">netflix</a>
                      <span className="ml-1">
                        <Verified className="relative block" />
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center leading-[20px] col-[2]">
                    <span className="text-[rgb(97,97,97)] min-w-[24px] text-center inline-block">2h</span>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className="pt-[10px] row-[2/span_2] col-[1/span_2]">
                <div>
                  <div
                    className="mt-[3px] whitespace-pre-wrap leading-[140%]"
                    style={{ overflowWrap: 'anywhere', fontSize: '.9375rem' }}
                  >
                    <p className="my-0">A lil Wednesday Morning Motivation for us all</p>
                  </div>
                </div>
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
                      <Like />
                    </Button>
                    <Button>
                      <Comment />
                    </Button>
                    <Button>
                      <Repost />
                    </Button>
                    <Button>
                      <Send />
                    </Button>
                  </div>
                </div>

                <div className="flex items-end row-[4] col-[1/span_2]">
                  <div className="flex items-center min-h-[22px] leading-[21px] text-[15px] text-[rgb(97,97,97)]">
                    <span>488 replies</span>
                    <span>&nbsp;·&nbsp;</span>
                    <span>10,868 likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

const Button: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className="flex p-[8px] -ml-[7px] justify-center items-center">
      <div>{props.children}</div>
    </div>
  );
};
