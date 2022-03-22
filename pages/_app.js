import '../styles/bootstrap.min.css';
import "../styles/theme.css";
import '../styles/globals.css';
import Head from "next/head";
import Hero from "../components/hero";
import Header from "../UI/header";
import Footer from "../UI/footer";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-multi-carousel/lib/styles.css";
config.autoAddCss = false;

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Sharry Nexus</title>
                <meta name='description' content='Innovative Web Designer & Developer with 4+ years of
                experience in React.js & Node.js. Demonstrated talent
                for front and back-end web development. Expert in
                scripting languages such as TypeScript and JavaScript
                and frameworks like React, Next, Node & Express.' />

                <link
                    href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet" />
            </Head>
            <Hero />
            <Header />
            <Component {...pageProps} />
            <div style={{height: '100px'}} />
            <Footer />
        </>
    )
}

export default MyApp
