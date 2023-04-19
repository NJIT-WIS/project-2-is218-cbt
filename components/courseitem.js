import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function CourseItem({ courseTitle, courseDescribe, courseLevel, courseDuration, coursePrerequisite, number }) {
    const imageName = `/images/course${number}.jpg`;
    return (
        <div className={utilStyles.courseItem}>
            <img src="/images/profile.jpg" alt="Course Image"/>
            <h2>{courseTitle}</h2>
            <p>{courseDescribe}</p>
            <ul>
                <li><strong>Level:</strong> {courseLevel}</li>
                <li><strong>Duration:</strong> {courseDuration} weeks</li>
                <li><strong>Prerequisites:</strong> {coursePrerequisite}</li>
            </ul>
            <a href="/">Learn More</a>
        </div>
    )
}
