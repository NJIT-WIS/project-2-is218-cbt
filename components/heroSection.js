import React from 'react';
import styles from '../styles/HeroSection.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Button from './button';

function HeroSection() {
  return (
    <div className={styles.heroSection}>
    <row>
    <column1>
     <h1>Revolutionize Your Web Skills</h1>
      <wrapper>
      <p>Welcome to MyWebClass.org, an online platform for innovators wanting to learn cutting-edge web development techniques. Join our community of learners and teachers alike and take your skills to the next level.</p>

      <p2><Button label="Start Here" /></p2>
      </wrapper>
    </column1>
   {/*} <column1>
      <Link href="/">
              <Image
                priority
                src="/images/office_desk.jpg"
                className={utilStyles.borderCircle}
                height={350}
                width={350}
                alt={'desk'}
              />
      </Link>
    </column1>
    <column2>
      <h1>Revolutionize Your Web Skills</h1>
      <p>Welcome to MyWebClass.org, an online platform for innovators wanting to learn cutting-edge web development techniques. Join our community of learners and teachers alike and take your skills to the next level.</p>
    </column2>*/}
    <column2>
     <Link href="/">
              <Image
                priority
                src="/images/hero-image-v2.jpg"

                height={400}
                width={660}
                alt={'hero-image'}
              />
      </Link>
    </column2>
    </row>
    </div>
  );
}

export default HeroSection;