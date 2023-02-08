import React,{Fragment} from 'react'
// import pricingimage from '../images/offer.png'
function Pricing() {
  return (
   <div id ='presentation'>
    <div className='pr-heading'>
        <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
        <p className='details'>- Workout Videos By International Trainers</p>
        <p className='details'>- LIVE Sessions By International Master Trainer</p>
        <p className='details'>- LIVE Sessions By Indian Master Trainer</p>
        <p className='details'>- Nutrition Counseling</p>
        </div>
        <div id='creview-c'>
        <Fragment>
            <section className='testimonal-c'>
                <div className='row-c'>
                <div className="col-c">
                <div className="content-c">
                <div className='text-c'>
                <span className="position-c">₹800 Basic</span>
                </div>
                </div>    
                </div>

                <div className="col-c">
                <div className="content-c">
                <div className='text-c'>
                <span className="position-c">₹1500 Premium</span>
                </div>
                </div>    
                </div>


                <div className="col-c">
                <div className="content-c">
                <div className='text-c'>
                <span className="position-c">₹3000 Diamond</span>
                </div>
                </div>    
                </div>
                </div>
            </section>
          </Fragment>
          </div>


        {/* <div className="pricing-image">
            <img src = {pricingimage} alt=''>
            </img>
        </div>
         */}


          <div className='pr-btns'>
          <a href='contact' className='pr-btn'>Join Now</a>
        </div>
   </div>

    );
};

export default Pricing