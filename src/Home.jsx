import React from 'react'
import './Home.css'
import logo from './assests/logo.svg'
import profileicon from './assests/profileicon.svg'
import inpimg from './assests/inpimg.svg'
import inpimg2 from './assests/inpimg2.svg'
import arrow from './assests/arrow.png'
import car from './assests/car.svg'
import playstore from './assests/playstore.svg'
import appstore from './assests/appstore.png'
import download from './assests/download.svg'
import firstimg from './assests/firstimg.svg'
import twoimg from './assests/twoimg.svg'
import threeimg from './assests/threeimg.svg'
import rating from './assests/rating.svg'
import economic from './assests/economic.svg'
import safety from './assests/safety.svg'
import sustainability from './assests/sustainability.svg'
import qrone from './assests/qrone.png'
import rightarrow from './assests/rightarrow.png'
import x from './assests/x.png'
import youtube from './assests/youtube.png'
import website from './assests/website.png'
import instagram from './assests/instagram.png'
import send from './assests/send.png'




const Home = () => {
    return (
        <>

            {/* navbar sectioin */}
            <nav className='header'>
                <img src={logo} alt="" className='logo' />
                <ul className='navliitem'>
                    <a href="#" className='lihome'><li>Home</li></a>
                    <a href="http://64.227.134.128:4008/" className='lijoin'><li>Join Us</li></a>
                    <img src={profileicon} alt="" />
                </ul>
            </nav >

            {/* landing Page */}


            <section className='landingpage'>

                <div className='landingone'></div>
                <div className='landingtwo'>

                    <div className='ltwoitem'>
                        <div className='lfitem'>
                            <h1 className='gettext'>Get A Fare Estimate</h1>
                            <p className='howtext'>How much will riding with Cabby Cost?</p>
                        </div>
                        <div className='inpdiv'>
                            <img src={inpimg} alt="" />
                            <input type="text" id='inppicklocation' placeholder='Enter Pickup Location' />
                        </div>

                        <div className='inpdiv'>
                            <img src={inpimg2} alt="" />
                            <input type="text" id='inppicklocation' placeholder='Enter Drop-Off Location' />
                        </div>

                        <div>
                            <button className='btn'><img src={arrow} alt="" /></button>
                        </div>

                    </div>


                </div>

                <div className='scrollsection'>
                    <img src={car} alt="" />
                    <h1>Scroll Down</h1>
                </div>

            </section>

            {/* mapsection */}
            <section className='mapsection'>
                <div className='mapsectiondiv'>
                    <h1 className='mapabout'>About <span className='mapspan'> Cabby</span> </h1>
                    <p className='mappara'>In a world where electric vehicles are on the rise, hybrids offer drivers a reliable and flexible solution. They cater to a variety of needs, from environmental consciousness to practicality.</p>
                    <div className='readmordiv'>
                        <div className='readmoredivtwo'>
                            <p className='readmoretext'>Read More</p>
                            <img src={arrow} alt="" />
                        </div>

                        <div className='appicondiv'>
                            <img src={playstore} alt="" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* how cabby works section */}

            <section className='workssection'>


                <p className='workssectionp'>How Cabby Works?</p>
                <h1 className='worksectionh1'>Easy Step To book your <span className='worksectionhspan'>Cabby</span> </h1>


                <div className='worksdivparent'>
                    <div className='worksdiv'>
                        <button className='dnbtn'><img src={download} alt="" /></button>
                        <h1 className='worksh1'>Download Our Free App</h1>
                        <p className='worksp'>Manage and track business travel and more on one dashboard.</p>
                    </div>

                    <div className='worksdiv'>
                        <button className='dnbtn'><img src={download} alt="" /></button>
                        <h1 className='worksh1'>Enter Your Destination</h1>
                        <p className='worksp'>Manage and track business travel and more on one dashboard.</p>
                    </div>

                    <div className='worksdiv'>
                        <button className='dnbtn'><img src={download} alt="" /></button>
                        <h1 className='worksh1'>Your Driver is On the Way</h1>
                        <p className='worksp'>Manage and track business travel and more on one dashboard.</p>
                    </div>

                    <div className='worksdiv'>
                        <button className='dnbtn'><img src={download} alt="" /></button>
                        <h1 className='worksh1'>Review Your Ride</h1>
                        <p className='worksp'>Manage and track business travel and more on one dashboard.</p>
                    </div>
                </div>

            </section>

            {/* What People Are Saying section */}
            <section className='feedback'>
                <h1 className='feedbacktittle'>What People Are Saying</h1>

                <div className='mainfeedbackdiv'>
                    <div className='feedbackdiv'>
                        <div className='feedbackdetails'>
                            <img src={firstimg} alt="" />
                            <div className='detailsdiv'>
                                <h1 className='detailsh1'>Prakash Bhisht</h1>
                                <p className='detailsp'>Founder at Allsim</p>
                            </div>
                            <img src={rating} alt="" />
                        </div>

                        <p className='feedbackdivpara'>At Invento, we believe in the power of creativity and technology to bring your brand to life. With a team of seasoned experts.</p>
                    </div>



                    <div className='feedbackdiv'>
                        <div className='feedbackdetails'>
                            <img src={twoimg} alt="" />
                            <div className='detailsdiv'>
                                <h1 className='detailsh1'>Prakash Bhisht</h1>
                                <p className='detailsp'>Founder at Allsim</p>
                            </div>
                            <img src={rating} alt="" />
                        </div>

                        <p className='feedbackdivpara'>At Invento, we believe in the power of creativity and technology to bring your brand to life. With a team of seasoned experts.</p>
                    </div>


                    <div className='feedbackdiv'>
                        <div className='feedbackdetails'>
                            <img src={threeimg} alt="" />
                            <div className='detailsdiv'>
                                <h1 className='detailsh1'>Prakash Bhisht</h1>
                                <p className='detailsp'>Founder at Allsim</p>
                            </div>
                            <img src={rating} alt="" />
                        </div>

                        <p className='feedbackdivpara'>At Invento, we believe in the power of creativity and technology to bring your brand to life. With a team of seasoned experts.</p>
                    </div>



                </div>


            </section>




            {/* Our Commitments Section */}


            <section className='Commitments'>
                <div className='commitmentsheading'>
                    <div className='line'></div>
                    <h1 className='commitmentsh1'>Our Commitments</h1>
                    <div className='line'></div>
                </div>
                <div className='commitmaindiv'>
                    <div className='commitementsdiv'>
                        <div><img src={economic} alt="" /></div>
                        <div className='committittle'>
                            <h1 className='commith1'>Economic Empowerment</h1>
                            <p className='commitp'>Manage and track business travel and more on one dashboard.</p>
                        </div>
                    </div>


                    <div className='commitementsdiv'>
                        <div><img src={sustainability} alt="" /></div>
                        <div className='committittle'>
                            <h1 className='commith1'>Sustainability</h1>
                            <p className='commitp'>Manage and track business travel and more on one dashboard.</p>
                        </div>
                    </div>


                    <div className='commitementsdiv'>
                        <div><img src={safety} alt="" /></div>
                        <div className='committittle'>
                            <h1 className='commith1'>Safety</h1>
                            <p className='commitp'>Manage and track business travel and more on one dashboard.</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className='appssection'>
                <h1>Its easier in the apps</h1>
                <p>Cabby for Business gives your organisation more control, deeper insights, and features built for enterprise users.</p>
            </section>


            <section className='qrsection'>

                <div className='qrdiv'>
                    <img src={qrone} alt="" />
                    <div className='qrtittle'>
                        <h1>Download the Cabby App</h1>
                        <p>Scan to download</p>
                    </div>
                    <div className='rightarrowdiv'>
                        <img src={rightarrow} alt="" className='rightarrow' />
                    </div>
                </div>

                <div className='qrdiv'>
                    <img src={qrone} alt="" />
                    <div className='qrtittle'>
                        <h1>Download the Cabby App</h1>
                        <p>Scan to download</p>
                    </div>
                    <div className='rightarrowdiv'>
                        <img src={rightarrow} alt="" className='rightarrow' />
                    </div>
                </div>

            </section>

            <footer className='footer'>
                <div className='parentdiv'>
                    <div className='leftfooter'>
                        <img src={logo} alt="" />
                        <p className='copyright'>Copyright © 2024 Cabby Cab.</p>
                        <p className='reserved'>All rights reserved</p>
                        <div className='socialicon'>
                            <img src={instagram} alt="" />
                            <img src={website} alt="" />
                            <img src={x} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>

                    <div className='rightfooter'>
                        <div className='footernav'>
                            <h1>Company</h1>
                            <a href="#" className='footernava'>Home</a>
                            <a href="http://64.227.134.128:4008/">Join Us</a>
                            <a href="#">Login</a>

                        </div>

                        <div className='footernav'>
                            <h1>Company</h1>
                            <a href="#" className='footernava'>Terms of service</a>
                            <a href="#">Contact Us</a>
                            <a href="#">FAQ's</a>

                        </div>

                        <div className='msgparentdiv'>
                            <h1>Stay up to datey</h1>
                            <div>
                                <input type="email" placeholder='Your email address' name="" id="" />
                                <img src={send} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </footer>


        </>
    )
}

export default Home
