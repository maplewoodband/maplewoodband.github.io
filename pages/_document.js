// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Include external stylesheets or meta tags */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href='https://fonts.googleapis.com/css?family=Alegreya' rel='stylesheet'/>
          <link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet'/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;