import React from "react";
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className='site-footer justify-content border-top pb-3 mb-0'>
            <div className=" container ">
                <div className='row'>
                    
                    <div className='col-4'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/home' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/engagement' className='link'>Engagement</Link>
                            </li>
                            <li>
                                <Link to='/wedding' className='link'>Wedding</Link>
                            </li>
                            
                            <li>
                                <Link to='/boudoir' className='link'>Boudoir</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/shop' href='#' className='link'>Shop</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4 text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/sincerelyjami'>
                            <i className='fa fa-instagram' />
                        </a>{" "}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/jami.owen.14'>
                            <i className='fa fa-facebook' />
                        </a>{" "}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'>
                            <i className='fa fa-twitter' />
                        </a>{" "}
                        
                    </div>
                    <div className='col-sm-4 text-center'>
                        <a role='button' className='link' href='tel:+8653408477'>
                            <i className='fa fa-phone' /> 865-340-8477
						</a>
                        <br />
                        
                        <a
                            role='button'
                            className='link'
                            href='mailto:JandJPhotograhy@gmail.com'>
                            <i className='fa fa-envelope-o' /> JandJPhotography@gmail.com
						</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
