import React, { ReactNode, FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = Partial<{
  children: ReactNode
  title: string
}>;

const Layout: FC<Props> = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>ホーム</a>
        </Link>
        {' '}
        |
        {' '}
        <Link href="/about">
          <a>サンプルページ</a>
        </Link>
        {' '}
        |
        {' '}
        <Link href="/users">
          <a>リスト</a>
        </Link>
        {' '}
        |
        {' '}
        <a href="/api/users">API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
