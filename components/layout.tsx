import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from './header'
import { Footer } from './footer'

export const SITE_TITLE = 'mako-makok.dev'

interface Props {
  home: boolean
}
export const Layout: FC<Props> = ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="mako_makokのブログ" />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="max-w-5xl mx-auto mb-16">
          <div className="mb-16">
            <Header home={home} />
          </div>
          <main>{children}</main>
          {home || (
            <div className="mt-12 mb-0 mx-0">
              <Link href="/">
                <a>← back to home</a>
              </Link>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
