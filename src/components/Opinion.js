import React, { Fragment } from 'react'
import './style.css'

const Opinion = () => {
    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="site-header">
                    <img class="header-img" src="images/header.png"alt="BeSTEscolario" />
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
                    <h1>OPINION</h1>
                </div>

                <div class="headline-container">
                    <img class="sample-img" src="images/sample-img.jpg"alt="OPINION" />
                    <li className="headline1"><a href="features.html"><h1>headline headline <br />headline</h1><h3 class="byline">byline</h3></a></li>
                </div>

                <div class="sort-container">
                    <li class="dropdown"><a href="#" id="sort-link">Sort &#9660;</a>
                        <div class="dropdown-content">
                            <a href="#">By Date (Latest-Oldest)</a>
                            <a href="#">Alphabetically (A-Z)</a>
                        </div></li>
                </div>

                <div class="text-container">
                    <img class="img2" src="images/sample-img2.jpg" alt="" />

                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel eleifend nunc. Donec ex lacus, convallis sit amet auctor sit amet, interdum id dolor.
                        Donec interdum, mauris et viverra ullamcorper, quam justo luctus eros, quis porttitor quam est pretium dui. Nullam lobortis dolor quam.
                        Aliquam mi nunc, vestibulum id tristique vel, fringilla non erat. Proin quis urna et mauris eleifend pharetra vitae in mauris.
                        Curabitur sollicitudin ante non mi rhoncus blandit. Etiam laoreet ornare mollis. Nunc fermentum tortor turpis, eget lobortis nulla consectetur sed.
                        Phasellus sodales pretium diam, vel euismod ipsum faucibus ac.
                </div>

                    <div class="link-container">
                        <li><a href="#" id="article-link">read full article</a></li>
                    </div>

                </div>

                <div class="text-container2">
                    <img class="img3" src="images/sample-img2.jpg" alt="" />
                    <div class="text2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel eleifend nunc. Donec ex lacus, convallis sit amet auctor sit amet, interdum id dolor.
                        Donec interdum, mauris et viverra ullamcorper, quam justo luctus eros, quis porttitor quam est pretium dui. Nullam lobortis dolor quam.
                        Aliquam mi nunc, vestibulum id tristique vel, fringilla non erat. Proin quis urna et mauris eleifend pharetra vitae in mauris.
                        Curabitur sollicitudin ante non mi rhoncus blandit. Etiam laoreet ornare mollis. Nunc fermentum tortor turpis, eget lobortis nulla consectetur sed.
                        Phasellus sodales pretium diam, vel euismod ipsum faucibus ac.
                    </div>

                    <div class="link-container2">
                        <li><a href="#" id="article-link">read full article</a></li>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Opinion;
