import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import styles from '../styles/navigation.module.css'

const NavigationMenuDemo = () => {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item className = "Brand"><a href="/">MyWebClass.org</a></NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Courses
                        <CaretDownIcon className="CaretDown" aria-hidden/>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List one">
                            <li style={{ gridRow: 'span 3' }}>
                                <NavigationMenu.Link className="NavigationMenuLink" href="/courses">
                                    <a className="Callout" href="/courses">
                                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                        </svg>
                                        <div className="CalloutHeading">Full Course List</div>
                                        <p className="CalloutText">Browse all available courses.</p>
                                    </a>
                                </NavigationMenu.Link>
                            </li>

                            <ListItem href="https://www.coursera.org/learn/ai-for-everyone?" title="AI For Everyone">AI's fundamentals, applications, and its impact on industries and society.</ListItem>
                            <ListItem href="https://www.coursera.org/learn/ai-with-ibm-watson?specialization=applied-artifical-intelligence-ibm-watson-ai" title="Getting Started with AI using IBM Watson">Practical applications of AI in various industries.</ListItem>
                            <ListItem href="https://www.coursera.org/learn/python-for-applied-data-science-ai" title="Python for Data Science, AI & Development">Python for data science, AI, and web development.</ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Blog
                        <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="How cognitive technology is changing tertiary education" href="/posts/blog-post-1">How cognitive tech transforms tertiary education with online learning, personalization, ad AI integration.</ListItem>
                            <ListItem title="The Future of AI: Transforming Our World" href="/posts/blog-post-2">How AI could transform industries, jobs, and raise ethical issues.</ListItem>
                            <ListItem title="AI Applications: Revolutionizing Industries and Everyday Life" href="/posts/blog-post-3">AI's impact on healthcare, finance, transportation & entertainment.</ListItem>
                            <ListItem title="The Future of Web Development: Emerging Trends and Career Prospects" href="/posts/blog-post-4">Include emerging trends and career opportunities.</ListItem>
                            <ListItem title="Applications of Web Development: Industries and User Experiences" href="/posts/blog-post-5">Impact on e-commerce, media, entertainment & mobile design.</ListItem>
                            <ListItem title="Applications of AI on Mobile Phones" href="/posts/blog-post-6">iPhone's Face ID, Google Pixel's Super Res Zoom, etc.</ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="about.js">About Us</NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" target="blank" href="https://github.com/NJIT-WIS/project-2-is218-cbt">Github</NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item className ="Login">
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Language Select
                        <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List three">
                            <ListItem title="English" href=""></ListItem>
                            <ListItem title="French" href=""></ListItem>
                            <ListItem title="Spanish" href="s"></ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>
            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    )
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
                <div className="ListItemHeading">{title}</div>
                <p className="ListItemText">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
))

export default NavigationMenuDemo
