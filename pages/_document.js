import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="description" content="Version three of OSnet System" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
