import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = { children?: ReactNode };

const Page = ({ children, ...rest }: Props) => (
  <CSSTransition timeout={{ exit: 0, enter: 2000 }} {...rest}>
    {children}
  </CSSTransition>
);

export default Page;
