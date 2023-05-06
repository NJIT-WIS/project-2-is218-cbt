import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function CourseItem({ courseTitle, courseDescribe, courseLevel, courseDuration, instructor, number, link }) {
    const imageName = `/images/${number}.png`

    return (
        <div className={utilStyles.courseItem}>
            <img src={imageName} alt="Course Image"/>
            <h2 style={{color:'black'}}>{courseTitle}</h2>
            <p style={{color:'#2a2d34'}}>{courseDescribe}</p>
            <ul>
                <li style={{color:'#2a2d34'}}><strong style={{color:'#0c0a1f'}}>Level:</strong> {courseLevel}</li>
                <li style={{color:'#2a2d34'}}><strong style={{color:'#0c0a1f'}}>Duration:</strong> {courseDuration} weeks</li>
                <li style={{color:'#2a2d34'}}><strong style={{color:'#0c0a1f'}}>Instructor:</strong> {instructor}</li>
            </ul>
            <a target="blank" href={link}>Learn More</a>
        </div>
    )
}
