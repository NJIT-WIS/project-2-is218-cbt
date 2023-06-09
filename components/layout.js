import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Group CBT'
export const siteTitle = 'MyWebClass.Org'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Learn about AI and Web Development since AI is leading the technology these days."/>
                <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
                <meta name="og:title" content={siteTitle} />
                <meta property="og:url" content="https://njit-wis.github.io/project-2-is218-cbt/"/>
                <meta name="keywords" content="CBT, Sales, Funnel, MyWebClass" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content="This is an awesome website!" />
                <meta name="twitter:image" content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelp.twitter.com%2Fen%2Fusing-twitter%2Ftwitter-live&psig=AOvVaw2ZJA3yRZaGz7FXBojPYBpL&ust=1681502175314000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9fPRp_4CFQAAAAAdAAAAABAJ"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload"
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <main>{children}</main>
        </div>
    )
}
