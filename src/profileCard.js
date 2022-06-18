import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import image from "../src/surendar.png"

function Profile(){
  
    const [toggleAbout,settoggleAbout] = useState(false)
    const openRead = () => {
      settoggleAbout(!toggleAbout)
    }
  
    return(
        <div>
            <div className="row justify-contents-center mt-1 bg-dark container-fluid m-auto profilecard">
                <div className="col-lg-4 col-md-3 col-sm-4 m-auto py-4  justify-contents-center ">
                    
                                <img src={image} alt="myself" className="img-fluid rounded img-thumbnail mx-auto d-block" style={{width:"400px"}}></img>
                                
                            
                </div>
                <div className="col-lg-7 col-md-7 px-2 py-4 col-sm-6 px-2 py-2">
                    <div className="card border border-warning">
                      <div className="card-body bg-dark justify-content-center border-0">
                        <p className="text-light justify-contents-between">
                          <span className="me-1 h2"><nobr>Surendar S</nobr></span><span className="h6 text-info"><nobr><nobr>Front-End</nobr><nobr> Developer</nobr></nobr></span></p>
                        <a href='https://www.instagram.com/surendar__s' target='_blank' rel='noreferrer' className="btn btn-sm btn-outline-danger"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://www.linkedin.com/in/surendar-s-aa50891a0' target='_blank' rel='noreferrer' className="btn btn-sm btn-outline-info mx-2"><FontAwesomeIcon icon={faLinkedin} /></a>
                      </div>
                      <div className="card-footer bg-dark border-top-0">
                        <button className="btn btn-lg btn-outline-info" onClick={openRead}>Myself</button>
                        {toggleAbout && (
                        <div className="about text-light" id="mySelf">
                          <p className="mt-2">I have been pursuing and practising Front-End Development for past <nobr>one-year</nobr>. Here I found that i 
                            can create an eye-catching UI site with standard code practices. I could even develop a full stack website.</p>
                          <p className='h6'> Here is my project.</p>
                          <p><a className='link-warning text-decoration-none' href="https://surendarrus.github.io/MyProfile/" target='_blank' rel="noreferrer">My Profile</a></p>
                          <p><a className='link-danger text-decoration-none' href="https://surendarrus.github.io/RUS-Electronics-and-Automation/" target='_blank' rel="noreferrer">My Project - RUS Electronics and Automation</a></p>
                        </div>
                        )
                        }
                      </div>
                    </div>
                    
                </div>
            </div>
            
          </div>
        
    )
}

export default Profile
