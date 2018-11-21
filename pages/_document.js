import Document, { Main, NextScript } from 'next/document';
import Head from '../components/Head';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}