import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>Twitter Web</title>
      <Head></Head>
      <body className='bg-background text-textColor '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
