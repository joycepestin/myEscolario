import React, { Fragment } from 'react'
import './style.css'

export const BestOfficers = () => {
    return (
        <Fragment>
            <div className="content-wrapper">
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
                    <h1>Best Officers</h1>
                </div>

                <div className="officers-container">
                    <button class="batch1"><a href="#">BeST Officers <br />1994-1995</a></button>
                    <button class="batch2"><a href="#">BeST Officers <br />1995-1996</a></button>
                    <button class="batch3"><a href="#">BeST Officers <br />1996-1997</a></button>
                    <button class="batch4"><a href="#">BeST Officers <br />1997-1998</a></button>
                    <button class="batch5"><a href="#">BeST Officers <br />1998-1999</a></button>
                    <button class="batch6"><a href="#">BeST Officers <br />1999-2000</a></button>
                    <button class="batch7"><a href="#">BeST Officers <br />2000-2001</a></button>
                    <button class="batch8"><a href="#">BeST Officers <br />2001-2002</a></button>
                    <button class="batch9"><a href="#">BeST Officers <br />2002-2003</a></button>
                    <button class="batch10"><a href="#">BeST Officers <br />2003-2004</a></button>
                    <button class="batch11"><a href="#">BeST Officers <br />2004-2005</a></button>
                    <button class="batch12"><a href="#">BeST Officers <br />2005-2006</a></button>
                    <button class="batch13"><a href="#">BeST Officers <br />2006-2007</a></button>
                    <button class="batch14"><a href="#">BeST Officers <br />2007-2008</a></button>
                    <button class="batch15"><a href="#">BeST Officers <br />2008-2009</a></button>
                    <button class="batch16"><a href="#">BeST Officers <br />2009-2010</a></button>
                    <button class="batch17"><a href="#">BeST Officers <br />2010-2011</a></button>
                    <button class="batch18"><a href="#">BeST Officers <br />2011-2012</a></button>
                    <button class="batch19"><a href="#">BeST Officers <br />2012-2013</a></button>
                    <button class="batch20"><a href="#">BeST Officers <br />2013-2014</a></button>
                    <button class="batch21"><a href="#">BeST Officers <br />2014-2015</a></button>
                    <button class="batch22"><a href="#">BeST Officers <br />2015-2016</a></button>
                    <button class="batch23"><a href="#">BeST Officers <br />2016-2017</a></button>
                    <button class="batch24"><a href="#">BeST Officers <br />2017-2018</a></button>
                    <button class="batch25"><a href="#">BeST Officers <br />2018-2019</a></button>
                    <button class="batch26"><a href="#">BeST Officers <br />2019-2020</a></button>
                    <button class="batch27"><a href="#">BeST Officers <br />2020-2021</a></button>
                </div>

            </div>
        </Fragment>
    )
}
