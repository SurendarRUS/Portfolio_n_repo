import React,{useState, useEffect} from "react";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import logo from '../src/surendar.png'
// import jsPDF from 'jspdf'
import Page404 from './page404';


// import fileDownload from "js-file-download";

function Header(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth,setscreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setscreenWidth(window.innerWidth)
        }

        window.addEventListener('resize',changeWidth)
    },[])
// pdf create and downloader
    // eslint-disable-next-line no-undef
    // const pdfGenerate=()=>{
    //     var doc=new jsPDF('portrait','px','a4','false');
    //     doc.addImage(logo,'JPG',65,20,300,400)
    //     doc.save('a.pdf')

    // }
    
    return(
        
        <div className="container-fluid"> 
            
            <div className="row p-2 align-items-center">
                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-9 col-9 justify-contents-center">
                    <p className="h3 text-light"><img src={logo} alt="myself" className="img-fluid rounded img-thumbnail" style={{width:"30px"}}></img>
  <span className="ms-1">Surendar</span></p>
                </div>
                <div className="col-sm-3 col-3 justify-contents-end">
                    <button className="btn btn-outline-light btn-sm menuBtn" onClick={toggleNav}>Menu</button>
                </div>
                
                {(toggleMenu || screenWidth > 767) && (
                <div className="d-flex flex-col col-xl-4 col-lg-4 col-md-3 gap-3 navList" id="navItems">
                    {/* <p className="btn btn-link text-light text-decoration-none h6" onClick={pdfGenerate}><FontAwesomeIcon icon={faFilePdf} /> Resume</p> */}
                   
                    <p className="hover btn btn-link text-light text-decoration-none h6"><FontAwesomeIcon icon={faFilePdf} />
                    <a className="text-light text-decoration-none" href="https://drive.google.com/file/d/1AuxGiG47lLGZ7cQ3OrU_4il3-Qdf7cVB/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a> </p>
                    <BrowserRouter>
                    <p className="hover btn btn-link text-decoration-none h6 "><Link className="text-light text-decoration-none" to="/page404"><FontAwesomeIcon icon={faCoffee} /> Projects</Link></p>
                    <Routes>
                        
                    <Route path='/page404' element={<Page404/>}/>
                    </Routes>
                    </BrowserRouter>
                    <p className="hover btn btn-link text-light text-decoration-none h6"><FontAwesomeIcon icon={faCheckCircle} /> Achievements</p>

                </div>
                )}
                
            </div>
            
           
        </div>
        
    )    


}
export default Header