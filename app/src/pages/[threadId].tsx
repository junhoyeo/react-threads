import { GetStaticProps, NextPage } from 'next';
import { Thread } from 'react-threads';
import { Thread as ThreadPost, ThreadsAPI } from 'threads-api';
import { BannerCTA } from '@/components/BannerCTA';

const threadsAPI = new ThreadsAPI();

type Props = {
  threadID: string;
  thread: ThreadPost;
};

const axiosOptions = {
  headers: {
    authority: 'www.threads.net',
    'cache-control': 'no-cache',
    origin: 'https://www.threads.net',
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'ko,en;q=0.9,ko-KR;q=0.8,ja;q=0.7',
    pragma: 'no-cache',
    referer: 'https://www.instagram.com/',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': `navigate`,
    'sec-fetch-site': `cross-site`,
    'sec-fetch-user': `?1`,
    'upgrade-insecure-requests': `1`,
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-full-version-list': `"Not.A/Brand";v="8.0.0.0", "Chromium";v="114.0.5735.198", "Google Chrome";v="114.0.5735.198"'`,
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-ch-ua-platform-version': '"13.0.0"',
    'user-agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36`,
    'viewport-width': `536`,
  },
};

export const getStaticProps: GetStaticProps<Props, { threadId: string }> = async (context) => {
  let postID: string | undefined;
  try {
    const threadID = context.params?.threadId;
    if (!threadID) {
      console.log('[!] Thread ID not provided');
      return { notFound: true };
    }
    postID = await threadsAPI.getPostIDfromThreadID(threadID, axiosOptions);
    if (!postID) {
      console.log(
        '[!] Post ID not found with provided Thread ID (in threadsAPI.getPostIDfromThreadID):',
        threadID,
      );
      return { notFound: true };
    }
    const thread = await threadsAPI.getThreads(postID, axiosOptions);
    const { containing_thread } = thread;

    return {
      props: {
        threadID,
        thread: containing_thread,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error('[*] Error fetching Thread', err, postID);
    throw new Error('[*] Error fetching Thread');
  }
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const ThreadDetailPage: NextPage<Props> = (props) => {
  console.log(props.thread);
  return (
    <div className="w-full flex items-center justify-center py-[36px] min-h-screen">
      <main className="flex flex-col w-full max-w-xl mx-auto">
        {!!props.thread ? (
          <Thread thread={props.thread} />
        ) : (
          <div className="w-full h-[120px] rounded-[8px] animate-pulse bg-[rgba(243,245,247,0.05)]" />
        )}
        <BannerCTA />
      </main>
    </div>
  );
};

export default ThreadDetailPage;
