import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/* <link rel="icon" href="marketplace/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="marketplace/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="marketplace/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="marketplace/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="marketplace/favicon/safari-pinned-tab.svg"
          /> */}

          <meta name="apple-mobile-web-app-title" content="Snippit" />
          <meta name="application-name" content="Marketplace | Ceuma" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#37466B" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@400;500&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
