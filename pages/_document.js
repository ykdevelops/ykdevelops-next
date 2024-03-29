import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
                    <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap' rel='stylesheet' />

                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
