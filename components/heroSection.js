import React from 'react'
import styles from '../styles/HeroSection.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Button from './button';
import { useTranslation } from 'next-i18next'
import { siteTitle, name } from '../components/layout'

function HeroSection() {

    const { t } = useTranslation('common');
    return (
        <div className={styles.heroSection}>
            <row>
                <column1>
                    <h1>Revolutionize Your Web Skills</h1>
                    <wrapper>
                        <p>{t('Welcome to ')} {siteTitle} {t('where Web Development meets Artificial Intelligence (AI). Our goal is to spread awareness of the AI movement and how it intersects with web development. Join us in exploring the exciting possibilities at the intersection of these two topics.')}</p>
                        <p2><Button label="Start Here"/></p2>
                    </wrapper>
                </column1>

                <column2>
                    <Link href="/">
                        <Image
                            priority
                            src="/images/hero-image-v2.jpg"
                            height={400}
                            width={660}
                            alt='hero-image'
                        />
                    </Link>
                </column2>
            </row>
        </div>
    );
}

export default HeroSection;