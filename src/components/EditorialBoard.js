import React, { Fragment } from 'react'
import './style.css'

const EditorialBoard = () => {
    return (
        <Fragment>
            <div className="content=wrapper">
                <div className="site-header">
                    <img class="header-img" src="images/header.png" alt="BeSTEscolario" />
                </div>

                {/* nav bar */}
                <div class="container">
                    <ul class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="news-page.html">News</a></li>
                        <li class="dropdown"><a href="features.html" class="dropbtn1">Features</a>
                            <div class="dropdown-content1">
                                <a href="feature-article.html">Feature Article</a>
                                <a href="literary.html">Literary</a>
                            </div></li>
                        <li><a href="opinion.html">Opinion</a></li>
                        <li><a href="#">Beyond Espana</a></li>
                        <li class="dropdown"><a href="#" class="dropbtn">About</a>
                            <div class="dropdown-content">
                                <a href="#">Escolario</a>
                                <a href="#">The BeST</a>
                                <a href="#">BeST Projects</a>
                                <a href="#">Be an Escolario!</a>
                            </div></li>
                    </ul>
                </div>

                <div className="page-title">
                    <h1>Editorial Board</h1>
                </div>

                <div className="editorial-container">
                    <img class="sample-img" src="images/sample-img.jpg" alt="About" />
                    <li class="name"><h2>Criscelle Corpuz</h2><h3 class="position">Editor-in-chief</h3></li>
                    <img class="sample-img2" src="images/sample-img.jpg" alt="About" />
                    <li class="name2"><h2>Criscelle Corpuz</h2><h3 class="position2">Editor-in-chief</h3></li>
                    <img class="sample-img3" src="images/sample-img.jpg" alt="About" />
                    <li class="name3"><h2>Criscelle Corpuz</h2><h3 class="position3">Editor-in-chief</h3></li>
                    <img class="sample-img4" src="images/sample-img.jpg" alt="About" />
                    <li class="name4"><h2>Criscelle Corpuz</h2><h3 class="position4">Editor-in-chief</h3></li>

                    <h1>Section Editors</h1>
                    <div class="editors-container">
                        <img class="sample-imgOne" src="images/sample-img.jpg" alt="About" />
                        <li className="name-one"><h2>Criscelle Corpuz</h2><h3 class="position-one">Editor-in-chief</h3></li>
                        <img className="sample-imgTwo" src="images/sample-img.jpg" alt="About" />
                        <li className="name-two"><h2>Criscelle Corpuz</h2><h3 class="position-two">Editor-in-chief</h3></li>
                        <img class="sample-imgThree" src="images/sample-img.jpg" alt="About" />
                        <li class="name-three"><h2>Criscelle Corpuz</h2><h3 class="position-three">Editor-in-chief</h3></li>
                        <img class="sample-imgFour" src="images/sample-img.jpg" alt="About" />
                        <li class="name-four"><h2>Criscelle Corpuz</h2><h3 class="position-four">Editor-in-chief</h3></li>
                        <img class="sample-imgFive" src="images/sample-img.jpg" alt="About" />
                        <li class="name-five"><h2>Criscelle Corpuz</h2><h3 class="position-five">Editor-in-chief</h3></li>
                        <img class="sample-imgSix" src="images/sample-img.jpg" alt="About" />
                        <li class="name-six"><h2>Criscelle Corpuz</h2><h3 class="position-six">Editor-in-chief</h3></li>
                        <img class="sample-imgSeven" src="images/sample-img.jpg" alt="About" />
                        <li class="name-seven"><h2>Criscelle Corpuz</h2><h3 class="position-seven">Editor-in-chief</h3></li>

                        <div class="grid-container">
                            <div class="content-about">About Escolario</div>
                            <div class="text-about1">Escolario is the official publication of Becarios de Santo Tomas,
                            the Sole Thomasian Scholars Association. Managed by the Research and Evaluation Committee
                            Heads alongside the Editorial Board, it serves as a forum for community discussions and a
                            platform for maximized scholars’ participation geared towards the organization’s primary
                            objectives. With the goal of giving Thomasian scholars an established communication armory
                            linked with the organization, Escolario contains original news and articles written by
                            appointed scholars as writers and contributors.
                        </div><br /><br/>

                        <div class="text-about2">Founded in 2015, the publication was first launched online through Wordpress.
                            It was not until 2017 when the publication was formally promulgated through Wixsite.
                            Today, Escolario envisions to be a catalyst of change and serve as a platform that aims
                            to inform, inspire and evolve beyond the Thomasian Scholars’ sphere.
                        </div>

                        <div class="content-mission">Mission</div>
                            <div class="text-mission">
                                Escolario aspires to thrive in relaying
                                credible and sensible stories that uphold
                                the standards of responsible journalism.
                                This publication aims to produce and
                                encourage students to be critical, creative
                                and socially-aware for the service of God and of the people.
                            </div>

                            <div class="content-vision">Vision</div>
                            <div class="text-vision">
                                Escolario is committed to serve as an avenue
                                for news and stories revolving within and beyond
                                the scholars’ sphere. By reviving the publication
                                and recognizing the abilities of diverse and passionate
                                writers, the publication aims to build a stronger
                                foundation for responsible journalism.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditorialBoard
