import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import CourseItem from '../components/courseitem'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga'
import SubscribeForm from "../components/newsletter"
import Navbar from '../components/navbar'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import NavigationMenuDemo from '../components/navigation'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'
import aboutUI from '../styles/about.module.css'


export default function Courses() {
    return (
        <div className={utilStyles.container}>
            <Head>
                <title>Courses | MyWebClass.org</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXE9WXQFQG"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-CXE9WXQFQG');
                    `,
                }}></script>
            </Head>

        <header className={utilStyles.header}>
            <NavigationMenuDemo />
        </header>
    <div className={utilStyles.wrapper}>
            <main className={utilStyles.main}>
                <div className={aboutUI.aboutSection}>
                    <h1 className={utilStyles.heading2Xl}>Course Catalog</h1>
                    <h3 style={{color: '#757f86'}}>{siteTitle} is featured with Coursera</h3>
                    <h5 style={{color: '#757f86'}}>Invest in your professional goals with Coursera Plus</h5>
                </div>

                <div className={utilStyles.courseList}>
                    <CourseItem courseTitle="AI For Everyone"
                                courseDescribe="AI is not only for engineers. If you want your organization to become better at using AI, this is the course to tell everyone - especially your non-technical colleagues - to take. "
                                courseLevel="Beginner" courseDuration="4" instructor="Andrew Ng" number="deeplearningai"/>
                    <CourseItem courseTitle="Getting Started with AI using IBM Watson"
                                courseDescribe="Kickstart your career in artificial intelligence. Learn Python, build a chatbot, explore machine learning and computer vision, and leverage IBM Watson."
                                courseLevel="Beginner" courseDuration="4" instructor="Rav Ahuja" number="ibm" />
                    <CourseItem courseTitle="Python for Data Science, AI & Development"
                                courseDescribe="Python is one of the most popular languages in the programming and data science. Demand for individuals who have the ability to apply Python is very high."
                                courseLevel="Beginner" courseDuration="5" instructor="Joseph Santarcangelo" number="ibm"/>
                    <CourseItem courseTitle="Building AI Applications with Watson APIs"
                                courseDescribe="Kickstart your career in artificial intelligence. Use Python and Watson APIs to publish AI applications."
                                courseLevel="Intermediate" courseDuration="8" instructor="Antonio Cangiano" number="ibm"/>
                    <CourseItem courseTitle="Advanced React"
                                courseDescribe="Launch your career as a front-end developer. Build skills for career and earn a credential from Meta."
                                courseLevel="Intermediate" courseDuration="8" instructor="Meta Staff" number="meta"/>
                    <CourseItem courseTitle="Advanced Django: Building a Blog"
                                courseDescribe="Create a blog an an accompanying API using industry-standard tools and software packages without installing."
                                courseLevel="Advanced" courseDuration="4" instructor="Patrick Ester, Ben Shaw" number="codio"/>
                </div>
            </main>
            </div>

            <SubscribeForm/>
            <Footer />
        </div>
    )
}