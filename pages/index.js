import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useTranslation } from 'next-i18next'
import HeroSection from '../components/heroSection';
import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer';

export default function Home({ allPostsData }) {
  const { t } = useTranslation('common');
  return (
    <div>
     <Navbar />
     <HeroSection />
     <Layout>
            <section className={utilStyles.headingMd}>
                <p>{siteTitle} {t(' is created by ')} {name} {t(' - Callie Dieffenbach, Bryan Tello, and Truong Dang. Our mission is to provide accessible and engaging educational resources to learners and academies around the world.')}</p>
                <p>Join us by cloning the project on GitHub and watching the instruction video:</p>
                <div className={utilStyles.buttonContainerIndex}>
                    <Link href="https://github.com/NJIT-WIS/project-2-is218-cbt">
                        <button className={utilStyles.buttonIndex}>Clone on GitHub</button>
                    </Link>
                    <Link href="/simulator">
                        <button className={utilStyles.buttonIndex}>Instruction Video</button>
                    </Link>
                </div>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>{t('Blog')}</h2>
              <ul className={utilStyles.list}>{allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link> <br/>
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </section>
      </Layout>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
