import React from 'react'
import './result.css'
import {useNavigate} from 'react-router-dom'

const Results = () => {

const navigate = useNavigate()

const handleSearch = ()=> {
    navigate('/hotels/:id')
}
  return (
    <div className='results'>
        <div className="resultsCont">
            <div className="resultsItem">
                <img 
                src="https://media-cdn.tripadvisor.com/media/photo-s/12/1e/e3/96/baraka-restaurant.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Baraka Accomodations</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/e2/0c/30/certainly-nairobi-s-most.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Seven Seafood & Grill</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://www.tripsavvy.com/thmb/YHKCk80sAaVNqCsmRXLZABZeMOk=/1440x863/filters:fill(auto,1)/132045025_1575383172669460_8723750846461443503_o-573305f0836c4744a37867458d78e888.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Tower Street Apartment</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://www.tripsavvy.com/thmb/YHKCk80sAaVNqCsmRXLZABZeMOk=/1440x863/filters:fill(auto,1)/132045025_1575383172669460_8723750846461443503_o-573305f0836c4744a37867458d78e888.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Tower Street Apartment</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://www.tripsavvy.com/thmb/YHKCk80sAaVNqCsmRXLZABZeMOk=/1440x863/filters:fill(auto,1)/132045025_1575383172669460_8723750846461443503_o-573305f0836c4744a37867458d78e888.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Tower Street Apartment</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen"onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://www.tripsavvy.com/thmb/YHKCk80sAaVNqCsmRXLZABZeMOk=/1440x863/filters:fill(auto,1)/132045025_1575383172669460_8723750846461443503_o-573305f0836c4744a37867458d78e888.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Tower Street Apartment</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
            <div className="resultsItem">
                <img 
                src="https://www.tripsavvy.com/thmb/YHKCk80sAaVNqCsmRXLZABZeMOk=/1440x863/filters:fill(auto,1)/132045025_1575383172669460_8723750846461443503_o-573305f0836c4744a37867458d78e888.jpg" 
                alt="result-img"
                className='resultsImg'
                />
                <div className="resultsAccomodation">
                    <h2 className="resultsTitle">Tower Street Apartment</h2>
                    <span className="resultsDistance">500m from center</span>
                    <button className="resultsTaxi">Free airport taxi</button>
                    <div className="resultsDesc">
                        <h4 className="descSub">Studio Apartment with Air Conditioning.</h4>
                        <p className="desc">Entire studio 1 bathroom * 21m full bed</p>
                    </div>
                    <h4 className="resultsInfo">Free Cancelation</h4>
                    <span className="resultsLock">You can cancel later, so lock in this great price today !</span>
                </div>

                <div className="resultsData">
                    <div className="resultsRating">
                        <h3 className="resultsTitle">Excellent</h3>
                        <span className="resultsRate">8.9</span>
                    </div>

                    <div className="resultsAvail">
                        <span className="resultsPrice">$112</span>
                        <h6 className="resultsPriceDesc">includes taxes and fees</h6>
                        <button className="resultsOpen" onClick={handleSearch}>See availability</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Results
