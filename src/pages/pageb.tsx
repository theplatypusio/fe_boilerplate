import { NextPage } from 'next';
import React from 'react';

import Page from 'components/layout/page';
import Main from 'components/main';

type Props = {};

const PageB: NextPage<Props> = ({ ...rest }) => {
  return (
    <Page {...rest}>
      <Main>
        <h1>Page B</h1>
        Content here...
      </Main>
    </Page>
  );
};

export default PageB;
