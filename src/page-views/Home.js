import React from 'react';

import '../styles/Home.css'



function Home () {
    
    return (
        <div>
            <div className="home-desc">
                <div className="profile-pic-container">
                    <img 
                        className="profile-pic" 
                        src="https://raw.githubusercontent.com/swayamraina/swayamraina.github.io/master/resources/images/swayamraina.jpg" 
                        alt="me"
                    />
                </div>
                <div className="home-desc-text">
                    Originally from <i>"The City Beautiful"</i>, Chandigarh. I moved to the famous city of TATA (Jamshedpur) to pursue 
                    my Bachelor's in Computer Science from National Institute of Technology in 2012. <br/><br/>
                    &emsp;&emsp;&emsp; Back then, a very few companies came to the campus for recruiting interns and one of them was 
                    Belzabar Software Design. After three rounds of technical interview and one month of waiting, they called in and 
                    hired me as an intern. <i>Yaaayyyy...!!!!!</i> <br/><br/>
                    &emsp;&emsp;&emsp; There I worked for about two months developing an algorithm for optimising the page load time 
                    for their projects. After completing the internship, I was soon offered a full time role to join one of their Backend 
                    teams which I happily accepted. <br/><br/>
                    &emsp;&emsp;&emsp; Currently I work for Swiggy, A hyperlocal delivery platform, helping them build and scale their 
                    Chat-Bot Platform. Prior to this, I was working with Airtel X Labs and helping them develop and scale systems for 
                    their Asia and Africa business. <br/><br/>
                    &emsp;&emsp;&emsp; Lastly, my love for writing and football is unparallel. I have been writing blogs for some time now 
                    and have been following &amp; playing football since 2008. I am not a one club fan but I hand out my heart to the team 
                    who is an underdog and is destrying big teams like anything.
                </div>
            </div>
            <div className="divider">
                <div className="bar" />
            </div>
            <div>
                <div className="timeline">
                    <div className="timeline-event">
                        <div className="timeline-heading">Swiggy</div>
                        <div className="timeline-description">
                            Currently working as Software Development Engineer II, I joined Swiggy HQ on 20th of Feburary, 2019 in Bangalore, 
                            India as Software Development Engineer I. <br/><br/>
                            I am part of Swiggy's chat platform team, majorly working on the bot framework. Currently Swiggy has kept me busy in designing 
                            the new bot framework with simulation and built-in emulator. Prior to this, I worked on various business &amp; product driven 
                            campaigns like,  
                            <ul>
                                <li>Solutioning and building <i>Swiggy Money</i> refunds to be given by bot</li>
                                <li>Revamping the <i>Payments &amp; Refunds</i> experience to all users in bot</li>
                                <li>Solutioning and building ticketing in post-delivery issues for segmented users</li>
                                <li>Solutioning and building chat closure experience by extending support to call and email from only chat experience.</li>
                            </ul>
                            Apart from these, I also worked on quite a lot of tech focused campaigns like,
                            <ul>
                                <li>Building a pluggable rule-engine library, using annotation processing, currently used for contextualisation of bot replies</li>
                                <li>Building a <a href="https://github.com/swayamraina/signal-group">DSL based http client</a>, supporting parallel http requests using DAG (Directed Acyclic Graph) based approach</li>
                                <li>Introducing in-memory caching layer close to the http layer to prevent leakages and optimise outgoing http requests</li>
                                <li>Introducing support for async message communication to downstream services in bot framework via Kafka</li>
                                <li>Optimising integrtion test-suite by introducing DFS based approach to test bot replies</li>
                                <li>Building a <a href="https://github.com/swayamraina/lua-scanner">go library</a> to scan all lua scripts and inject them to application context at server start for Redis to consume</li>
                                <li>Building an HTTP API layer over the MySQL DB for integrtion with the automation test suite and other Ops dashboards</li>
                                <li>In-depth <a href="https://github.com/swayamraina/aws-lambda-java-test">POC</a> for possible use of AWS lambda functions and GraalVM</li>
                                <li>Maintaining uptime and bringing down error rates from 1% to 0.1%</li>
                            </ul>

                        </div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-heading">Airtel X Labs</div>
                        <div className="timeline-description">
                            I joined Airtel's Engineering division, Airtel X Labs in the month of March, 2018 in Gurgaon, India as 
                            Software Development Engineer II. <br/><br/>
                            In Airtel, I worked for Airtel Thanks, Airtel Africa and Airtel Money Teams; primarimrily helping the 
                            team build solutions and scale out to their millions of users.<br/>
                            For the Airtel Thanks &amp; Airtel Africa team I was part of many product &amp; business driven campaigns like,
                            <ul>
                                <li>Building backend systems for <a href="https://play.google.com/store/apps/details?id=com.airtel.africa.selfcare">Airtel Africa app</a></li>
                                <li>Solutioning and launching <i>Prepaid on Postpaid</i> for users in J&amp;K</li>
                                <li>Migrating UPI payments to <a href="https://www.airtel.in/press-release/06-2019/airtel-payments-bank-enables-bhim-upi-based-payments-at-over-500000-merchants">Airtel Bank UPI</a> for improved success rate and profitability</li>
                                <li>Upgraded in-house developed coupon distribution and management engine to cater multi-expiry coupons</li>
                            </ul>
                            while also building some tech focused products like,
                            <ul>
                                <li>Building new contextual banner service to display banners on homepage of the <a href="https://www.airtel.in/bank/products/myairtel-app">Airtel Thanks</a> app</li>
                                <li>Building a module under the new contextual banner service to automate the ingestion of user to banner mappings</li>
                                <li>Migrating home page banner service from MongoDB to Aerospike</li>
                                <li>Building a new service to integrate with flipkart for the <a href="https://ultra-docs.readthedocs.io/en/latest/">Flipkart Ultra</a> project for app-in-app view for airtel thanks into flipkart app</li>
                                <li>Did a small <a href="https://github.com/swayamraina/gradle-multi-module-test">POC</a> around moving our monolithic repo to multi-module based gradle project</li>
                                <li>Complete dockerisation of Airtel Africa backend systems</li>
                                <li>Building a <a href="https://github.com/swayamraina/Airflow">CLI app</a> for QA/DEV team to easily deploy and manage builds on multi-staging environments</li>
                            </ul>
                            After all this, I was moved to Airtel payments team to,
                            <ul>
                                <li>Move all code and infra from <a href="https://www.communicationstoday.co.in/airtel-eyes-insourcing-to-manage-it-infra-as-ibm-contract-up-for-renewal/">IBM to Airtel</a></li>
                                <li>Decode and present optimisations around "Dynamic Payment Gateway switch" module for improved success rate</li>
                                <li>Introduce <a href="https://lazypay.in/">LazyPay</a> as part of "Payment instruments" listing page</li>
                                <li>Setup local and staging environment for QA and DEV debugging and replicating production environment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-heading">Belzabar</div>
                        <div className="timeline-description">
                            Before joining as a Full-Time employee, I had a two month stint with Belzabar as a Software intern. Back in 2015 during my third year
                            in the institute, Belzabar came for recruiting interns for multiple in-house projects. After three rounds of technical interview 
                            and one month of waiting, they called in and hired me as an intern. Back then, Belzabar was one of few companies that came for 
                            hiring interns. <br/>
                            My intern work was around,
                            <ul>
                                <li>Product demonstration with a <a href="https://docs.google.com/presentation/d/18NzANClPfTT_SvPYV6EwJAeQ-jhIFFm_65CgNpOvMmw">live pitch</a> to the Director of the company</li>
                                <li>Building an optimized algorithm for generating most spaced optimized sprite image for faster page rendering</li>
                                <li>Building a complete web-app with user management and UI to use the developed algorithm</li>
                                <li>Management and Download of all user sprite images with its bundled CSS file</li>
                            </ul>
                            Later, they offered me a Full-Time role at the company as a pre-placement offer. This meant I was already hoolding an offer before the 
                            placement session started. I joined Belzabar as a Computer Scientist in 2016 and was working on multiple projects where I was responsible for,
                            <ul>
                                <li>Maintaining, solutioning and building product requirements raised by <a href="https://www.hellovanguard.com/project/nyc-doe-sems/">New York DOE</a></li>
                                <li>Maintaining, solutioning and building product requirements raised by <a href="https://magnals.com/online-focus-groups-jury-confirm">Magna (Jury Confirm)</a></li>
                                <li>Maintaining, solutioning and building UI components for <a href="https://www.hellovanguard.com/verifi/">New York DMV</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-heading">National Institute of Technology</div>
                        <div className="timeline-description">
                            After passing my Xth and XIIth grade, I joined National Institute of Technology, Jamshedpur in 2012 to pusue bachelor's in Computer Science &amp; Engineering <br/><br/>
                            During my time in the institute I did multiple projects in,
                            <ul>
                                <li>Research - Segmentation of satellite image data using differential evolution technique. Improved upon vanilla “Davies Bouldin Index” for segmentation of satellite data for city planning using genetic algorithms</li>
                                <li>Planet visualisationion using OpenCV</li>
                                <li>Basic calculator using ASM (assembly language)</li>
                            </ul> 
                            Also, I was part of the
                            <ul>
                                <li>Institute Football Team</li>
                                <li>Institute Fine Arts Club</li>
                            </ul> 
                            Finally, I graduated from the institute in 2016 with a GPA of 8.21
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;