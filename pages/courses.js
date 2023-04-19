import Head from 'next/head'
import Layout from '../components/layout'
import CourseItem from '../components/courseitem'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'
import ReactGA from 'react-ga'
import SubscribeForm from "../components/newsletter"
import Navbar from '../components/navbar'

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
         <Navbar />
           {/*} <nav className={utilStyles.navbar}>
                <ul className={utilStyles.navlist}>
                    <li className={utilStyles.navitem}>
                        <Link href="/" legacyBehavior>
                            <a className={utilStyles.navlink}>MyWebClass</a>
                        </Link>
                    </li>
                    <li className={utilStyles.navitem}>
                        <Link href="/" legacyBehavior>
                            <a className={utilStyles.navlink}>Home</a>
                        </Link>
                    </li>
                    <li className={utilStyles.navitem}>
                        <Link href="/courses" legacyBehavior>
                            <a className={utilStyles.navlink}>Courses</a>
                        </Link>
                    </li>
                    <li className={utilStyles.navitem}>
                        <Link href="/about" legacyBehavior>
                            <a className={utilStyles.navlink}>About</a>
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </header>

            <main className={utilStyles.main}>
                <h1 className={utilStyles.heading2XL}>Course Catalog</h1>
                <div className={utilStyles.courseList}>
                    <CourseItem courseTitle = "Course Title 1" courseDescribe = "Course Description 1" courseLevel = "Course Level 1"
                        courseDuration = "Course Duration 1" coursePrerequisite = "Courses" number = "1" />
                    <CourseItem courseTitle = "Course Title 2" courseDescribe = "Course Description 2" courseLevel = "Course Level 2"
                        courseDuration = "Course Duration 2" coursePrerequisite = "Courses" number = "2" />
                    <CourseItem courseTitle = "Course Title 3" courseDescribe = "Course Description 3" courseLevel = "Course Level 3"
                        courseDuration = "Course Duration 3" coursePrerequisite = "Courses" number = "3" />
                    <CourseItem courseTitle = "Course Title 4" courseDescribe = "Course Description 4" courseLevel = "Course Level 4"
                        courseDuration = "Course Duration 4" coursePrerequisite = "Courses" number = "4" />
                    <CourseItem courseTitle = "Course Title 5" courseDescribe = "Course Description 5" courseLevel = "Course Level 5"
                        courseDuration = "Course Duration 5" coursePrerequisite = "Courses" number = "5" />
                </div>
            </main>
            <SubscribeForm/>
        </div>
    )
}