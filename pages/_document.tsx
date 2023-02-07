import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
      style={{
        background: '#000000',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '10000px',
      }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
