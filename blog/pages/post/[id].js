import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';

// SWR example from https://nextjs.org/docs/basic-features/data-fetching/client-side
function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
};

export default function Post() {
  const router = useRouter();
  const { data, error } = useSWR('https://api.publicapis.org/entries', fetcher);

  console.log('FETCHED', data);
  const countForDisplay = data && data.count ? `entry count: ${data.count}` : 'entries ar LOADING...';

  return (
    <div>
      <h3>Post #{router.query.id}</h3>
      <p>Lorem ipsum, {countForDisplay}</p>
      <Link href="/">
        <a>Back to blog</a>
      </Link>
    </div>
  );
}
