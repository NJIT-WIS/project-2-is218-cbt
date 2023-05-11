import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import NavigationMenuDemo from '../components/navigation'
import CookieDisplay from '../components/cookie'
import PopUp from '../components/popUp'
import BodyIndex from '../components/bodyIndex'
import bodyUI from '../styles/bodyIndex.module.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import ReactGA from 'react-ga'
import Modal from 'react-modal';
import styles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {

    ReactGA.initialize('G-Z5RWSV375R');
    if (typeof window !== 'undefined') {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    const { t } = useTranslation('common')
    return (
        <div>
            <Head>
                <title>MyWebClass.org</title>
                <link rel="icon" href="/images/favicon.ico" /><meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
        <PopUp />
        <div class="content">
            <CookieDisplay />
            <NavigationMenuDemo />
            <HeroSection />

            <Layout>
                    <div className={bodyUI.header}>
                        <h2 className={utilStyles.heading2Xl}>Popular Posts</h2>
                    </div>
                    <div className={bodyUI.row}>
                        <div className={bodyUI.leftcolumn}> {allPostsData.slice(0, allPostsData.length-2).map(({ author, date, title, description, banner, id }) => (
                            <div className={bodyUI.card}>
                                <a className={bodyUI.linkOfImage} href={"/posts/blog-post-" + id}><h2 className={bodyUI.nameOfTitle}>{title}</h2></a>
                                <h5 className={bodyUI.nameOfSubtitle}>Author: {author}. <Date dateString={date}/>.</h5>
                                <img src={banner} alt={'plswork'}/>
                                <p style={{textAlign: 'justify'}}>{description}</p>
                            </div>
                            ))}
                        </div>

                        <div className={bodyUI.rightcolumn}>
                            <div className={bodyUI.card} style={{ justifyContent:'center'}}>
                                <h2 className={bodyUI.rightSideTitle} style={{textAlign: 'center'}}>About Us</h2>
                                <img className={bodyUI.Logo} src="/images/profile.jpg" style={{height: '100px'}} alt='aboutusimage'/>
                                <p style={{textAlign: 'justify'}}>{siteTitle} is built by {name} that stands for Callie, Bryan, and Truong. We empower teachers and students with web development skill and AI knowledge.</p>
                            </div>
                            <div className={bodyUI.card}>
                                <h2 className={bodyUI.rightSideTitle} style={{textAlign: 'center'}}>Featured Courses</h2>
                                <p><a href='https://www.coursera.org/learn/ai-for-everyone?' className='text-reset'>AI For Everyone</a></p>
                                <p><a href='https://www.coursera.org/learn/ai-with-ibm-watson' className='text-reset'>Getting Started with AI using IBM Watson</a></p>
                                <p><a href='https://www.coursera.org/learn/python-for-applied-data-science-ai?' className='text-reset'>Python for Data Science, AI & Development</a></p>
                                <p><a href='https://www.coursera.org/learn/building-ai-applications?' className='text-reset'>Building AI Applications with Watson APIs</a></p>
                                <p><a href='https://www.coursera.org/learn/neural-networks-deep-learning' className='text-reset'>Neural Networks and Deep Learning</a></p>
                            </div>


                <div className={bodyUI.card}>
                    <form action="https://github.us21.list-manage.com/subscribe/post?u=25ca49d2ee853a0049c897437&amp;id=8f0f70b342&amp;f_id=0085b3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <h3 className={bodyUI.rightSideTitle} style={{fontSize: '24px'}}> Subscribe for Updates</h3>
                            <fields>
                                <label for = "mce-EMAIL">Email Address*</label>
                                    <textinput>
                                        <input type="email" name="EMAIL" class ="required email" id="mce-EMAIL"></input>
                                    </textinput>
                                <div className ={styles.buttonContainerIndex}>
                                    <button className={styles.buttonIndex} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
                                        Subscribe
                                    </button>
                                </div>
                            </fields>
                            <div class="response" id="mce-error-response"></div>
                    </form>
                    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`
                        }}
                    />
                </div>
                </div>
            </div>
            </Layout>
            <Footer />
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
