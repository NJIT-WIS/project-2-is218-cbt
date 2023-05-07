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

export default function Home({ allPostsData }) {

  const { t } = useTranslation('common')
  return (
    <div>
      <PopUp />
      <div className="content">
        <CookieDisplay />
        <NavigationMenuDemo />
        <HeroSection />

        <Layout>
          <div className={classNames(bodyUI.header, 'text-center')}>
            <h2 className={utilStyles.heading2Xl}>Popular Posts</h2>
          </div>
          <div className={classNames(bodyUI.row, 'flex-column-reverse flex-md-row')}>
            <div className={bodyUI.leftcolumn}>
              {allPostsData.map(({ author, date, title }) => (
                <div className={bodyUI.card}>
                  <h2>{title}</h2>
                  <h5>{author}. <Date dateString={date}/></h5>
                  <div className={bodyUI.fakeimg} style={{height: '200px'}}>Image</div>
                  <p>Some text..</p>
                </div>
              ))}
            </div>

            <div className={bodyUI.rightcolumn}>
              <div className={bodyUI.card} style={{display:'inline-block', justifyContent:'center', alignItems:'center'}}>
                <h2>About Us</h2>
                <img src="/images/profile.jpg" style={{height: '100px'}} alt={'aboutusimage'}/>
                <p>{siteTitle} is built by {name}</p>
              </div>
              <div className={bodyUI.card}>
                <h3>Featured Courses</h3>
                <p><a href='https://www.coursera.org/learn/ai-for-everyone?' className='text-reset'>AI For Everyone</a></p>
                <p><a href='https://www.coursera.org/learn/ai-with-ibm-watson' className='text-reset'>Getting Started with AI using IBM Watson</a></p>
                <p><a href='https://www.coursera.org/learn/python-for-applied-data-science-ai?' className='text-reset'>Python for Data Science, AI & Development</a></p>
                <p><a href='https://www.coursera.org/learn/building-ai-applications?' className='text-reset'>Building AI Applications with Watson APIs</a></p>
              </div>
            </div>
          </div>
        </Layout>

        <Layout>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>{t('Blog')}</h2>
            <ul className={utilStyles.list}>{allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link> <br/>
                <small className={utilStyles.lightText}><Date dateString={date}/></small>
              </li>
            ))}
            </ul>
          </section>
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
