import React from 'react'
import './property.css'

const Property = () => {
  return (
    <div className='property'>
        <h2 className="pSectionTitle">
            Browse by property type
        </h2>
        <div className="propertyItems">
            <div className="propertyItem">
                <img 
                    src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" 
                    alt="property__img" 
                    srcset="" 
                    className='propertyImg'
                />
                <div className="propertyData">
                    <h2 className="propertyTitle">Hotels</h2>
                    <span className="propertyDesc">123 Hotels</span>
                </div>
            </div>
            <div className="propertyItem">
                <img 
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1" 
                    alt="property__img" 
                    srcset="" 
                    className='propertyImg'
                />
                <div className="propertyData">
                    <h2 className="propertyTitle">Apartments</h2>
                    <span className="propertyDesc">53 Hotels</span>
                </div>
            </div>
            <div className="propertyItem">
                <img 
                    src="https://www.thegari.in/blog/wp-content/uploads/2020/10/pexels-media-1134176-scaled.jpeg" 
                    alt="property__img" 
                    srcset="" 
                    className='propertyImg'
                />
                <div className="propertyData">
                    <h2 className="propertyTitle">Resort</h2>
                    <span className="propertyDesc">150 Resorts</span>
                </div>
            </div>
            <div className="propertyItem">
                <img 
                    src="https://homeadore.com/wp-content/uploads/2016/09/007-dolphin-coast-home-metropole-architects-1050x700.jpg" 
                    alt="property__img" 
                    srcset="" 
                    className='propertyImg'
                />
                <div className="propertyData">
                    <h2 className="propertyTitle">Villas</h2>
                    <span className="propertyDesc">43 Villas</span>
                </div>
            </div>
            <div className="propertyItem">
                <img 
                    src="https://cdn.thisiswhyimbroke.com/images/equoia-a-frame-cabin-airbnb-640x534.jpg" 
                    alt="property__img" 
                    srcset="" 
                    className='propertyImg'
                />
                <div className="propertyData">
                    <h2 className="propertyTitle">Cabins</h2>
                    <span className="propertyDesc">230 Cabins</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Property
