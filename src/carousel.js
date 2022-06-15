// import { AcroFormTextField } from 'jspdf';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactCarousel(props){
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className='mt-3 mx-3 justify-contents-center'>
          <p className='h4 text-muted'>Some Ideologies I used to say myself</p>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style:{
            border:'none',
           
          },
          // style: {
          //   alignSelf: 'center',
          //   background: 'black',
          //   border: 'none',
          //   borderRadius: '50%',
          //   color: 'white',
          //   cursor: 'pointer',
          //   fontSize: '20px',
          //   height: 30,
          //   lineHeight: 1,
          //   textAlign: 'center',
          //   width: 30,
          // },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style:{
            border:'none',
           
          },
          // style: {
          //   postion:'relative',
          //   alignSelf: 'center',
          //   background: 'black',
          //   border: 'none',
          //   borderRadius: '50%',
          //   color: 'white',
          //   cursor: 'pointer',
          //   fontSize: '20px',
          //   height: 30,
          //   lineHeight: 1,
          //   textAlign: 'center',
          //   width: 30,
          // },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
           
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
       <div className='container-lg w-75'>
        <div  style={{ width:1000,height: 100, background: "linear-gradient(to bottom, purple, midnightblue)",
        color:"#fff"
        }}>
          <p className='h4 text-sm-start text-md-center text-lg-center px-5 pt-2'>{props.qoute1}</p>
          <p className='h6 text-muted text-sm-start text-md-center text-lg-center px-5 ms-5'>{props.author1}</p>
        </div>
        </div>
        <div className='container-lg w-75'>
        <div  
        style={{ width:1000,height: 100, background: "linear-gradient(to bottom, purple, midnightblue)",
        color:"#fff"
        }}>
        <p className='h4 text-sm-start text-md-center text-lg-center px-5 pt-2'>{props.qoute2}</p>
          <p className='h6 text-muted text-sm-start text-md-center text-lg-center px-5 ms-5'>{props.author2}</p>
        </div>
        </div>
        <div className='container-lg w-75'>
        <div  style={{ width:1000,height: 100, background: "linear-gradient(to bottom, purple, midnightblue)",
        color:"#fff"
        }}>
        <p className='h4 text-sm-start text-md-center text-lg-center px-5 pt-2'>{props.qoute3}</p>
          <p className='h6 text-muted text-sm-start text-md-center text-lg-center px-5 ms-5'>{props.author3}</p>
        </div>
        </div>
        <div className='container-lg w-75'>
        <div  style={{ width:1000,height: 100, background: "linear-gradient(to bottom, purple, midnightblue)",
        color:"#fff"
        }}>
        <p className='h4 text-sm-start text-md-center text-lg-center px-5 pt-2'>{props.qoute4}</p>
          <p className='h6 text-muted text-sm-start text-md-center text-lg-center px-5 ms-5'>{props.author4}</p>
        </div>
        </div>
        
        
      </ReactSimplyCarousel>
    </div>
    )
}
export default ReactCarousel;