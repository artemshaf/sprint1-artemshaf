import { FunctionComponent } from 'react';
import { HashRouter } from 'react-router-dom';

import { Container } from '../container';
import { Footer } from '../footer';
import { Header } from '../header';

import { ILayoutInterface } from './layout-interface';

export const Layout = ({ children, ...props }: ILayoutInterface) => (
  <Container>
    <Header />
    <main {...props}>{children}</main>
    <Footer />
  </Container>
);

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <HashRouter>
        <Layout>
          <Component {...props} />
        </Layout>
      </HashRouter>
    );
  };
