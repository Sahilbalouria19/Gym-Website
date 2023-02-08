import React,{Fragment} from 'react'

function CustomerReview() {
  return (
        <div id='creview'>
        <Fragment>
            <section className='testimonal'>
                <div className='heading'>
                <h2>Customer Review</h2>
                </div>
                <div className='row'>
                <div className="col">
                <div className="content">
                <div className='text'>
                  <div className='names'><p>Sahil</p></div>
                    <p>This gym is amazing. Amazing facility, top equipment and great environment.
                       Good service with friendly staff and super clean and
                       comfortable gym for everyone from beginners to professional athletes to train at. 
                       I will definitely be returning on my next trip to Samui.
                        Has a crèche too, which is handy for those with young children.
                    </p>
                 
                <span className="position">Customer</span>
                </div>
                </div>    
                </div>

                <div className="col">
                <div className="content">
                <div className='text'>
                <div className='names'><p>Subhesh</p></div>
                    <p>This is my fourth trip here. Elite Gym is the best one on the Island. It has everything you need. 
                      A great and good variety of equipment, friendly and helpful staff, great trainers, great classes 
                      which are free to members, clean and happy environment, great central location and a variety of
                       awesome protein shakes...
                    </p>
                <span className="position">Customer</span>
                </div>
                </div>    
                </div>


                <div className="col">
                <div className="content">
                <div className='text'>
                <div className='names'><p>Gaurav</p></div>
                    <p>Good staff, great personal trainers! You got all the stuff you need for a perfect workout, good shakes, 
                      tasty meals low on calories avaible every day. Just an awesome gym in many different ways! :)
                      Greetings from Jharkhand.
                    </p>
                <span className="position">Customer</span>
                </div>
                </div>    
                </div>
                </div>
            </section>
          </Fragment>
          </div>
  )
}

export default CustomerReview