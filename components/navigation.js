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
                        <CaretDownIcon className="CaretDown" aria-hidden />
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

                            <ListItem href="https://stitches.dev/" title="Course 1">Insert description</ListItem>
                            <ListItem href="/colors" title="Course 2">Insert description</ListItem>
                            <ListItem href="https://icons.radix-ui.com/" title="Course 3">Insert description</ListItem>
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
                            <ListItem title="Introduction" href="/docs/primitives/overview/introduction">Build high-quality, accessible design systems and web apps.</ListItem>
                            <ListItem title="Getting started" href="/docs/primitives/overview/getting-started">A quick tutorial to get you up and running with Radix Primitives.</ListItem>
                            <ListItem title="Styling" href="/docs/primitives/overview/styling">Unstyled and compatible with any styling solution.</ListItem>
                            <ListItem title="Animation" href="/docs/primitives/overview/animation">Use CSS keyframes or any animation library of your choice.</ListItem>
                            <ListItem title="Accessibility" href="/docs/primitives/overview/accessibility">Tested in a range of browsers and assistive technologies.</ListItem>
                            <ListItem title="Courses" href="/courses">Browse the entire course list.</ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="/about">About Us</NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/NJIT-WIS/project-2-is218-cbt">Github</NavigationMenu.Link>
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
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
                <div className="ListItemHeading">{title}</div>
                <p className="ListItemText">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default NavigationMenuDemo;