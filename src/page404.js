import {faFaceSadCry} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {useState} from 'react'

function Page404(){
    // const [close,setClose] = useState(false)

    // const pageClose = () => {
    //     setClose(!close)
    // }

    
    return(
        <div>
        
        <div className='container d-flex flex-row  justify-content-between align-items-center'>
            <p className='h3 text-warning'><FontAwesomeIcon icon={faFaceSadCry}></FontAwesomeIcon> 404 page not found!</p>
            {/* <button className='btn btn-sm btn-danger' onClick={pageClose}>x</button> */}
        </div>
        
        </div>
    )
}


export default Page404;
