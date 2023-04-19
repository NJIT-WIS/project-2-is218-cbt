import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {Instructor, InstructorInfo} from '../components/instructor'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Navbar from '../components/navbar';
import SubscribeForm from "../components/newsletter"

export default function About() {
    const { t } = useTranslation('common')

    return (
        <div className={utilStyles.container}>
            <Head><title>MyWebClass.org | About</title></Head>

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
                        <a className={utilStyles.navlink}>{t('Home')}</a>
                      </Link>
                    </li>
                    <li className={utilStyles.navitem}>
                      <Link href="/courses" legacyBehavior>
                        <a className={utilStyles.navlink}>{t('Courses')}</a>
                      </Link>
                    </li>
                    <li className={utilStyles.navitem}>
                      <Link href="/about" legacyBehavior>
                        <a className={utilStyles.navlink}>{t('About')}</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
            */}
            </header>
            <main className={utilStyles.main}>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h1 className={utilStyles.headingXl}>{t('About ')} {siteTitle}</h1>
                    <section>
                        <h3>{t('Welcome to ')} {siteTitle}!</h3>
                        <p>{t('Type short description 1 here.')}</p>
                        <p>{t('Type short description 2 here.')}</p>
                    </section>

                    <h1 className={utilStyles.heading2Xl}>{t('Meet The Instructors')}</h1>
                    <div className={utilStyles.imageContainer}>
                        <Instructor name="Professor Name" id="professor" number="1"/>
                        <Instructor name="Professor Name" id="professor" number="2"/>
                        <Instructor name="Professor Name" id="professor" number="3"/>
                    </div>
                    <div className={utilStyles.imageContainer}>
                        <Instructor name="Instructor Name" id="instructor" number="4"/>
                        <Instructor name="Instructor Name" id="instructor" number="5"/>
                        <Instructor name="Instructor Name" id="instructor" number="6"/>
                    </div>

                    <InstructorInfo name="Name 1" id="professor" number="1"
                        intro="I am a <Subject> Professor in the <Name of department> department at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Name 2" id="professor" number="2"
                        intro="I am a <Subject> Professor in the <Name of department> department at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Name 1" id="professor" number="3"
                        intro="I am a <Subject> Professor in the <Name of department> department at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Name 4" id="instructor" number="4"
                        intro="I am a <Major> <year> at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Name 5" id="instructor" number="5"
                        intro="I am a <Major> <year> at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                    <InstructorInfo name="Name 6" id="instructor" number="6"
                        intro="I am a <Major> <year> at <University>."
                        edu="<B.S./M.S./PhD> in <Major> from the <University>"
                        exp={["Experience 1", "Experience 2", "Experience 3"]}
                    />
                </section>
            </main>
            <SubscribeForm/>
        </div>
    )
}
