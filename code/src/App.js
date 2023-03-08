import React from 'react';

import NewsList from 'components/NewsList';
import Header from 'components/Header';
import data from './data.json';

export const App = () => {
  return (
    <section>
      <Header title="Students don't seem to like React" />
      <NewsList albumList={data} />
    </section>
  );
}
