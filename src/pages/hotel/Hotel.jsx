import React from 'react'
import Header from '../../components/Header/Header'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './hotel.css'

const Hotel = () => {
  return (
    <div>
        <Header  type='hotel-lists'/>
        <div className="hotelContainer">
          <div className="wrapper">
            {/* Header Section of Hotel */}
            <div className="wrapperHeader">
              <div className="location">
                <h1 className="hotelTitle">
                  Tower Street Apartments
                </h1>
                <span className="hotelStreet">
                  <FontAwesomeIcon icon={faLocationDot} className='locationDot'/>
                  Elton St 125 New York, USA
                </span>
                <span className="hotelLocation">Excellent location - 500m from center</span>
                <span className="hotelSub">Book a stay over $114 at this property and get a free airport taxi</span>
              </div>
              <button className="hotelReserve btn button">Reserve or Book Now!</button>
            </div>
            {/* Gallery Section of the Hotel */}
            <div className="hotelGallery">
              <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-residence-nairobi-arboretum/pooloutdoor/16256-124762-f66803469_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610" alt="radisson" className='hotelImg'/>
              <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-residence-nairobi-arboretum/guestroom/16256-124762-f66803477_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610" alt="radisson" className='hotelImg'/>
              <img src="https://exp.cdn-hotels.com/hotels/40000000/39490000/39484300/39484258/0c9117a0_z.jpg?impolicy=fcrop&w=773&h=530&q=high" alt="radisson" className='hotelImg'/>
              <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-residence-nairobi-arboretum/barlounge/16256-124762-f66548370_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610" alt="radisson" className='hotelImg'/>
              <img src="https://az712897.vo.msecnd.net/images/full/5ebd84ac-e44b-4a4d-aefa-7851b5b777b9.jpeg" alt="radisson" className='hotelImg'/>
              <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-leipzig/suitebath/16256-116544-f68168685_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610" alt="radisson" className='hotelImg'/>
            </div>
            {/*Short Description of the Hotel*/}
            <div className="hotelContent">
              <div className="hotelData">
                <h2 className="hdTitle">
                  Stay in the heart of City
                </h2>
                <p className="hdDescribtion">
                Located just 20 minutes' drive from both Nairobi National Park and the airport, 
                the new Radisson Blu Hotel in the heart of the fast-growing business district of Upper Hill is the perfect base for a Kenyan safari or business trip. 
                Discover Nairobi National Park—a well-known wildlife preserve with herds of zebras, wildebeests and giraffes—right on your doorstep.
                </p>
              </div>
              <div className="hotelNights">
                <h3 className="hotelSubtitle">
                  Perfect for 2-night stay!
                </h3>
                <p className="hdDescribtion">
                Located just 20 minutes' drive from both Nairobi National Park and the airport, this 
                property has an exellent location score of 9.8!
                </p>
                <span className="hdPrice"> <strong>$945</strong> (2 nights)</span>
                <button className="hotelReserve btn button">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
    </div>
  )
}

export default Hotel
