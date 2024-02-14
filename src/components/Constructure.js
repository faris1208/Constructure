import flutterwave from "../assets/Img/Flutterwave - jpeg.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import vector from "../assets/Img/Vector 1.svg";
import left from "../assets/Img/webleftimage.svg";
import top from "../assets/Img/web top image.svg";
import right from "../assets/Img/Vector 2.svg";
import fourty from "../assets/Img/Frame 48 (1).svg";
import two from "../assets/Img//Frame 48 (2).svg";
import three from "../assets/Img/Frame 48 (3).svg";
import four from "../assets/Img/Frame 48 (4).svg";
import man from "../assets/Img/web const worker.svg";
import x from "../assets/Img/Group 2 (1).svg";
import pin from "../assets/Img/Group 3.svg";
import face from "../assets/Img/Group 4.svg";
import wave from "../assets/Img/Frame 43.svg";
import grid from "../assets/Img/Group 12.svg";
import tweet from "../assets/Img/Group 13.svg";
import insta from "../assets/Img/Group 14.svg";
import one from "../assets/Img/Rectangle 1.svg";
import Worker from "../assets/Img/web construction worker.svg";
import { RxMagnifyingGlass } from "react-icons/rx";



const Constructure = () => {
    return ( 
        <div className="Constructure-container">
            <div className="Navbar-container">
                <div className="Navbar">
                    <div className="Flutterwave">
                        <img src={flutterwave} alt="" className="flutterwave-image" width="100%" />
                    </div>
                    <div className="Hamburger">
                        <RxHamburgerMenu className="Menu" />
                    </div>
                    <div className="Menu-two">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Project</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li><RxMagnifyingGlass className="glass" /></li>
                        </ul>
                    </div>
                </div>
                <div className="Worker">
                    <div className="Innovation">
                        <h1>Innovation</h1>
                        <div className="Innovation-img">
                            <img src={vector} alt="" className="Innovation-image" width="100%" />
                            <h3>Constructure</h3>
                        </div>
                        <p>Hey Guys, Have a look at our new design about architecture landing page. don’t forget to check the attachment have a look at our new design about architecture</p>
                        <button className="Innovation-btn">Read More</button>
                    </div>
                    <div className="Worker-img">
                        <img src={Worker} alt="" className="Worker-image" width="100%" />
                    </div>
                </div>
            </div>

            <div className="Phlox-container">
                <div className="Phlox-img">
                    <img src={left} alt="" className="left-image" width="100%" />
                    <img src={top} alt="" className="top-image" width="100%" />
                </div>
                <div className="Phlox-heading"> 
                    <div className="Phlox-text">
                        <img src={right} alt="" className="right-image" width="100%" />
                        <h3>About phlox group</h3>
                    </div>
                    <div className="Phlox-head">
                        <h2>we are the leader in construction</h2>
                        <p>In a professional context it often happens that private or coporate clients order a publication to be made and presented with the actual content still not being ready.</p>
                        <div className="Phlox-vector">
                            <img src={vector} alt="" className="Phlox-vector-image" width="100%" />
                            <p>In a professional context it often happens that private or coporate clients order a publication to be made and presented with the actual content still not being ready.</p>
                        </div>
                    </div>
                    <div className="Phlox-yellow">
                        <div className="yellow">
                            <h3>53K</h3>
                            <p>Layout Done</p>
                        </div>
                        <div className="yellow">
                            <h3>10K</h3>
                            <p>Project Done</p>
                        </div>
                        <div className="yellow">
                            <h3>120K</h3>
                            <p>Get Award</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Experience-container">
                <div className="Experience-text">
                    <p>We Can Do It</p>
                    <h2>Improve Your Experience With Us</h2>
                </div>
                <div className="Experience-heading">
                    <div className="Experience-head">
                        <div className="news">
                            <img src={fourty} alt="" className="fourty-image" width="100%" />
                        </div>
                        <div className="news1">
                            <h3>Our Mission</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual. </p>
                        </div>
                    </div>

                    <div className="Experience-head">
                        <div className="news">
                            <img src={two} alt="" className="fourty-image" width="100%" />
                        </div>
                        <div className="news1">
                            <h3>Our Vision</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual. </p>
                        </div>
                    </div>

                    <div className="Experience-head">
                        <div className="news">
                            <img src={three} alt="" className="fourty-image" width="100%" />
                        </div>
                        <div className="news1">
                            <h3>Our Mission</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual. </p>
                        </div>
                    </div>

                    <div className="Experience-head">
                        <div className="news">
                            <img src={four} alt="" className="fourty-image" width="100%" />
                        </div>
                        <div className="news1">
                            <h3>Our Vision</h3>
                            <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Member-container">
                <div className="Member-contents">
                    <div className="Member-img">
                        <img src={right} alt="" className="Member-image" width="100%" />
                        <p>Our Team</p>
                    </div>
                    <h3>Meet With Pholx Team Member</h3>
                </div>
                <div className="construct">
                    <div className="man-text">
                        <img src={man} alt="" className="man-image" width="100%" />
                        <p>Founder and thinker</p>
                        <h2>Jack Mane</h2>
                        <div className="Facebook">
                            <img src={vector} alt="" className="pin-image" width="100%" />
                            <img src={x} alt="" className="face-image" width="100%" />
                            <img src={pin} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                        </div>
                    </div>

                    <div className="man-text">
                        <img src={man} alt="" className="man-image" width="100%" />
                        <p>Founder and thinker</p>
                        <h2>Jack Mane</h2>
                        <div className="Facebook">
                            <img src={vector} alt="" className="pin-image" width="100%" />
                            <img src={x} alt="" className="face-image" width="100%" />
                            <img src={pin} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                        </div>
                    </div>

                    <div className="man-text">
                        <img src={man} alt="" className="man-image" width="100%" />
                        <p>Founder and thinker</p>
                        <h2>Jack Mane</h2>
                        <div className="Facebook">
                            <img src={vector} alt="" className="pin-image" width="100%" />
                            <img src={x} alt="" className="face-image" width="100%" />
                            <img src={pin} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                        </div>
                    </div>

                    <div className="man-text">
                        <img src={man} alt="" className="man-image" width="100%" />
                        <p>Founder and thinker</p>
                        <h2>Jack Mane</h2>
                        <div className="Facebook">
                            <img src={vector} alt="" className="pin-image" width="100%" />
                            <img src={x} alt="" className="face-image" width="100%" />
                            <img src={pin} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                            <img src={face} alt="" className="face-image" width="100%" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Affordable">
                <div className="Overlay">
                    <div className="Affordable-text">
                        <p>Looking for a quality and affordable constructor for your <span>next project?</span></p>
                        <div className="Affordable-img">
                            <img src={wave} alt="" className="wave-image" width="100%" />
                            {/* <button>Request a quote</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-wrapper">
                    <div className="footer-flutter">
                        <div className="flutter">
                            <img src={flutterwave} alt="" className="flutter-image" width="100%" />
                            <div className="flutter-Constracture">
                                <h3>Constracture</h3>
                                <h6>Phlox Group</h6>
                            </div>
                        </div>
                        <p>In a professional context it often happens that private or coporate clients order a publication to be made and presented with the actual content still not being ready.</p>
                        <div className="Constracture-facebook">
                            <img src={grid} alt="" className="grid-image" width="100%" />
                            <img src={tweet} alt="" className="grid-image" width="100%" />
                            <img src={insta} alt="" className="grid-image" width="100%" />
                        </div>
                    </div>
                    <div className="Information-container">
                        <div className="Information-link">
                            <img src={vector} alt="" className="Information-image" width="100%" />
                            <h3>Useful Link</h3>
                        </div>
                        <div className="Information-Users">
                            <div className="Information-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>General Information for users</p>
                            </div>
                            <div className="Information-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>Interactive fairy tales</p>
                            </div>
                            <div className="Information-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>officials storybook maker website</p>
                            </div>
                            <div className="Information-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>Everyday mathematics links</p>
                            </div>
                        </div>
                    </div>

                    <div className="Contact-container">
                        <div className="Contact-wrapper"> 
                            <img src={vector} alt="" className="Information-image" width="100%" />
                            <h3>Contact Us</h3>
                        </div>
                        <div className="Contact-head">
                            <div className="Contact-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>Address: 123 Ave, lorem city, site country, the world</p>
                            </div>
                            <div className="Contact-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>Phone: +7 (212) 654-33-35</p>
                            </div>
                            <div className="Contact-img">
                                <img src={one} alt="" className="one-image" width="100%" />
                                <p>Email: info@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="Newsletter-container">
                        <div className="Newsletter-wrapper"> 
                            <img src={vector} alt="" className="Information-image" width="100%" />
                            <h3>Newsletter</h3>
                        </div>
                        <p>Subscribe to our MailChamp newsletter and stay up to date with all events coming straight in your mailbox</p>
                        <div className="Address">
                            <input type="text" placeholder="Your email address" className="Email-input" />
                        </div>
                    </div>
                </div>
                <div className="Last-footer">
                    <p>@2022 Phlox Construction. All rights reserved.</p>
                </div>
            </footer>
        </div>
     );
}
 
export default Constructure;