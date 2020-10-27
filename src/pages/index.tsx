import { NextPage } from 'next';
import React from 'react';

import Page from 'components/layout/page';
import Main from 'components/main';

type Props = {};

const Index: NextPage<Props> = ({ ...rest }) => {
  return (
    <Page {...rest}>
      <Main>
        <h1>Page A</h1>
        Content here...
      </Main>
    </Page>
  );
};

export default Index;
