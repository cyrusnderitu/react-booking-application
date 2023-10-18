import React from 'react'
import './rated.css'

const Rated = () => {
  return (
    <div className='rated'>
        <h2 className="rSectionTitle">
            Home guests love 
        </h2>
        <div className="ratedItems">
            <div className="ratedItem">
                <img 
                    src="https://www.joinupsafaris.com/images/properties/471/2589.jpg" 
                    alt="rated__img" 
                    srcset="" 
                    className='ratedImg'
                />
                <div className="ratedData">
                    <h2 className="ratedTitle">Serena Hotel</h2>
                    <span className="ratedDesc">Nairobi</span>
                </div>
                <div className="ratingView">
                    <h4 className="ratedPrices">Starting from <br /> <span className='ratedPrice'>$170.99</span></h4>
                    <div className="rating">
                        <button className="ratedBtn">8.9</button>
                        <span className="ratedDesc">Excellent</span>
                    </div>
                </div>
            </div>
            <div className="ratedItem">
                <img 
                    src="https://www.kayak.com/rimg/himg/87/96/d9/ice-127852-67459836_3XL-810023.jpg?width=1366&height=768&crop=true" 
                    alt="rated__img" 
                    srcset="" 
                    className='ratedImg'
                />
                <div className="ratedData">
                    <h2 className="ratedTitle">Villa Rosa Kempinski</h2>
                    <span className="ratedDesc">Nairobi</span>
                </div>
                <div className="ratingView">
                    <h4 className="ratedPrices">Starting from <br /> <span className='ratedPrice'>$230.85</span></h4>
                    <div className="rating">
                        <button className="ratedBtn">9.0</button>
                        <span className="ratedDesc">Excellent</span>
                    </div>
                </div>
            </div>
            <div className="ratedItem">
                <img 
                    src="https://bountifulsafaris.com/wp-content/uploads/2017/02/Tribe-Hotel.jpg" 
                    alt="rated__img" 
                    srcset="" 
                    className='ratedImg'
                />
                <div className="ratedData">
                    <h2 className="ratedTitle">Tribe Hotel</h2>
                    <span className="ratedDesc">Nairobi</span>
                </div>
                <div className="ratingView">
                    <h4 className="ratedPrices">Starting from <br /> <span className='ratedPrice'>$200.99</span></h4>
                    <div className="rating">
                        <button className="ratedBtn">7.8</button>
                        <span className="ratedDesc">Excellent</span>
                    </div>
                </div>
            </div>
            <div className="ratedItem">
                <img 
                    src="https://www.wildlifekenyasafari.com/wp-content/uploads/2021/05/exterior.jpg" 
                    alt="rated__img" 
                    srcset="" 
                    className='ratedImg'
                />
                <div className="ratedData">
                    <h2 className="ratedTitle">Sankara Nairobi</h2>
                    <span className="ratedDesc">Nairobi</span>
                </div>
                <div className="ratingView">
                    <h4 className="ratedPrices">Starting from <br /> <span className='ratedPrice'>$200.45</span></h4>
                    <div className="rating">
                        <button className="ratedBtn">8.0</button>
                        <span className="ratedDesc">Excellent</span>
                    </div>
                </div>
            </div>
            <div className="ratedItem">
                <img 
                    src="https://media-cdn.tripadvisor.com/media/photo-s/09/03/5b/e5/ololo-safari-lodge.jpg" 
                    alt="rated__img" 
                    srcset="" 
                    className='ratedImg'
                />
                <div className="ratedData">
                    <h2 className="ratedTitle">Ololo Safari Lodge</h2>
                    <span className="ratedDesc">Nairobi</span>
                </div>
                <div className="ratingView">
                    <h4 className="ratedPrices">Starting from <br /> <span className='ratedPrice'>$490.85</span></h4>
                    <div className="rating">
                        <button className="ratedBtn">8.5</button>
                        <span className="ratedDesc">Excellent</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Rated

