import Head from 'next/head';
import Home from './home';

export default () => {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Home />
        </div>
    )
}