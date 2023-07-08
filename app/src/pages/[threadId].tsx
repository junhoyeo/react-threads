import { GetStaticProps, NextPage } from 'next';
import { Thread } from 'react-threads';
import { Thread as ThreadPost, ThreadsAPI } from 'threads-api';
import { BannerCTA } from '@/components/BannerCTA';

const threadsAPI = new ThreadsAPI();

type Props = {
  threadID: string;
  thread: ThreadPost;
};

export const getStaticProps: GetStaticProps<Props, { threadId: string }> = async (context) => {
  try {
    const threadID = context.params?.threadId;
    if (!threadID) {
      console.log('[!] Thread ID not provided');
      return { notFound: true };
    }
    const postID = await threadsAPI.getPostIDfromThreadID(threadID);
    if (!postID) {
      console.log(
        '[!] Post ID not found with provided Thread ID (in threadsAPI.getPostIDfromThreadID):',
        threadID,
      );
      return { notFound: true };
    }
    const thread = await threadsAPI.getThreads(postID);
    const { containing_thread } = thread;

    return {
      props: {
        threadID,
        thread: containing_thread,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error('[*] Error fetching Thread', err);
    throw err;
  }
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const ThreadDetailPage: NextPage<Props> = (props) => {
  return (
    <div className="w-full flex items-center justify-center py-[36px] min-h-screen">
      <main className="flex flex-col w-full max-w-xl mx-auto">
        {!!props.thread && <Thread thread={props.thread} />}
        <BannerCTA />
      </main>
    </div>
  );
};

export default ThreadDetailPage;
