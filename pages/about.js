import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {Instructor, InstructorInfo} from '../components/instructor'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Navbar from '../components/navbar'
import SubscribeForm from "../components/newsletter"
import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import NavigationMenuDemo from '../components/navigation'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'
import CookieDisplay from '../components/cookie'
import aboutUI from '../styles/about.module.css'

export default function About() {
    const { t } = useTranslation('common')

    return (
        <div className={utilStyles.container}>
            <CookieDisplay />
            <Head><title>MyWebClass.org | About</title></Head>
            <header className={utilStyles.header}><NavigationMenuDemo/></header>
            <main className={utilStyles.main}>
                <div className={aboutUI.aboutSection}>
                    <h1 className={utilStyles.heading2Xl}>About Our Team</h1>
                    <h3 style={{color: '#757f86'}}>{siteTitle} is founded by Callie Dieffenbach, Bryan Tello, Truong Dang</h3>
                    <h5 style={{color: '#757f86'}}>{siteTitle} helps teachers and learners apply AI into modern education</h5>
                </div>

                <div className={aboutUI.row}>
                    <div className={aboutUI.column}>
                        <div className={aboutUI.card}>
                            <img src="/images/instructor1.png" alt="bryan" />
                            <div className={aboutUI.container}>
                                <h2 className={aboutUI.H2}>Bryan Tello</h2>
                                <p className={aboutUI.title}>Business & Information Systems 2023</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>bat26@njit.edu</p>
                                <p className={aboutUI.H2}><button className={aboutUI.button}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className={aboutUI.column}>
                        <div className={aboutUI.card}>
                            <img src="/images/instructor0.png" alt="callie"/>
                            <div className={aboutUI.container}>
                                <h2 className={aboutUI.H2}>Callie Dieffenbach</h2>
                                <p className={aboutUI.title}>Add later</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>mike@example.com</p>
                                <p className={aboutUI.H2}><button className={aboutUI.button}>Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className={aboutUI.column}>
                        <div className={aboutUI.card}>
                            <img src="/images/instructor1.png" alt="truong" />
                            <div className={aboutUI.container}>
                                <h2 className={aboutUI.H2}>Truong Dang</h2>
                                <p className={aboutUI.title}>Computer Science 2025</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p>tdd4@njit.edu</p>
                                <p className={aboutUI.H2}><button className={aboutUI.button}>Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
