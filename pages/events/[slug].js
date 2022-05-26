import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({ slug }) {
  return (
    <Layout>
      <h1>{slug}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  console.log('slug :' + slug);

  const events = await res.json();

  console.log('events :' + events);

  return {
    props: {
      evt: events[0],
    },
  };
}
