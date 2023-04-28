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

export default function About() {
    const { t } = useTranslation('common')

    return (
        <div className={utilStyles.container}>
            <CookieDisplay />
            <Head><title>MyWebClass.org | About</title></Head>
            <header className={utilStyles.header}>
                <NavigationMenuDemo />
            </header>
            <main className={utilStyles.main}>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h1 className={utilStyles.h1}>{t('About ')} {siteTitle}</h1>
                    <section>
                        <h3 className={utilStyles.h3}>{t('Welcome to ')} {siteTitle}!</h3>
                        <p>{t('Type short description 1 here.')}</p>

                        <p>{t('Type short description 2 here.')}</p>
                    </section>

                    <h1 className={utilStyles.heading2Xl}>{t('Meet The Instructors')}</h1>
                    <div className={utilStyles.imageContainer}>
                        <Instructor name="Professor. Keith Williams" id="professor" number="1"/>
                    </div>
                    <div className={utilStyles.imageContainer}>
                        <Instructor name="TA. Truong Dang" id="instructor" number="3"/>
                        <Instructor name="TA. Callie Dieffenbach" id="instructor" number="4"/>
                        <Instructor name="TA. Bryan Tello" id="instructor" number="5"/>
                    </div>

                    <InstructorInfo name="Keith Williams" id="professor" number="1"
                        intro="I am a University Lecturer in the Informatics Department at New Jersey Institute of Technology."
                        edu="M.S. in instructional design and technology from the Bloomsburg University of Pennsylvania."
                        exp={["Over 20 years of experience in the software industry - as a software engineer, UX designer, system analyst and entrepreneur.",
                              "Worked at the executive level for a seed capital investment fund overseeing the development of multiple startup companies.",
                              "Worked professionally as a consultant on large software projects such as the development of eGovernment services for the Zambian government."]}
                    />
                    <InstructorInfo
                        name="Truong Dang"
                        id="instructor"
                        number="3"
                        intro="I am a Computer Science sophomore at New Jersey Institute of Technology."
                        edu="B.S. in Computer Science from the New Jersey Institute of Technology"
                        exp={["Mathematics Undergraduate Teacher Assistant at New Jersey Institute of Technology", "Data Structures & Algorithms Teacher Assistant at New Jersey Institute of Technology", "Software Engineer Intern at CRANE CP&E"]}
                    />
                    <InstructorInfo name="Callie Dieffenbach" id="instructor" number="4"
                        intro="I am a <Major> <year> at New Jersey Institute of Technology."
                        edu="B.S. in <Major> from the New Jersey Institute of Technology"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Bryan Tello" id="instructor" number="5"
                        intro="I am a <Major> <year> at New Jersey Institute of Technology."
                        edu="B.S. in <Major> from the New Jersey Institute of Technology"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}
