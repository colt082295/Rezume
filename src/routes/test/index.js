import React from 'react';
import Test from './Test';
import Layout from '../../components/Layout';
import Media from '../../../server/Media/Media';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Test news={data.news} />
      </Layout>
    ),
  };
}

export default action;
