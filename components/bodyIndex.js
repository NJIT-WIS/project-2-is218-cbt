import React from "react"
import bodyUI from '../styles/bodyIndex.module.css'
//import FeaturedPost from "./FeaturedPost"
//import SocialLinks from "./SocialLinks"
//import Newsletter from "./Newsletter"

function BodyIndex() {
    return (
        <div>
            <div className={bodyUI.header}>
                <h2>Featured Post</h2>
            </div>
            <div className={bodyUI.row}>
                <div className={bodyUI.leftcolumn}>
                    <div className={bodyUI.card}>
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className={bodyUI.fakeimg} style={{height: '200px'}}>Image</div>
                        <p>Some text..</p>
                    </div>
                    <div className={bodyUI.card}>
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className={bodyUI.fakeimg} style={{height: '200px'}}>Image</div>
                        <p>Some text..</p>
                    </div>
                </div>

                <div className={bodyUI.rightcolumn}>
                    <div className={bodyUI.card}>
                        <h2>About Me</h2>
                        <div className={bodyUI.fakeimg} style={{height: '100px'}}>Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className={bodyUI.card}>
                        <h3>Popular Post</h3>
                        <div className={bodyUI.fakeimg}>Image</div><br></br>
                        <div className={bodyUI.fakeimg}>Image</div><br></br>
                        <div className={bodyUI.fakeimg}>Image</div>
                    </div>
                    <div className={bodyUI.card}>
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyIndex;
