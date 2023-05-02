import utilStyles from '../styles/utils.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'next-i18next';

export function Instructor({name, id, number}) {
    const imageName = `/images/${id}${number % 2}.png`
    const realID = id + number
    return (
        <div className={utilStyles.image}>
            <img src={imageName} alt={id}/>
            <div className={utilStyles.buttonContainer}>
                <button className={`${utilStyles.button} slideToSection`} onClick={() => {document.getElementById(realID).scrollIntoView();}}>{name}</button>
            </div>
        </div>
    )
}

export function InstructorInfo({name, id, intro, edu, exp, number}) {
    let nameID = ""
    if (id === "professor") nameID = "Professor"
    else nameID = "Teacher Assistant"

    const realID = id + number

    const { t } = useTranslation('common')

    return (
        <section>
            <h2 className={utilStyles.headingLg} id={realID}>{t(nameID)}. {name}</h2>
            <p>{intro}</p>
            <p><strong>Education:</strong> {edu}</p>
            <p><strong>Professional Background:</strong></p>
            <ul>
                {exp.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    )
}