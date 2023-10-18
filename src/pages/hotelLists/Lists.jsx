import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'
import Results from '../../components/Results/Results'
import {useLocation} from 'react-router-dom'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import './lists.css'

const Lists = () => {

  const location = useLocation()
  const [showDate, setShowDate]=useState(false)
  const [date, setDate]= useState(location.state.date)
  // const [options, setOptions]= useState(location.state.options)

  // const handleChange = (event) => {
  //   const {name, value} = event.target

  //   setOptions((prevState)=> {
  //     return {
  //       ...prevState, 
  //       [name]: Number(value)
  //     }
  //   })
  // }

  // console.log({options})
  return (
    <div>
        <Header type='hotel-lists'/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              {/* FIRST LIST ITEM IN LIST SEARCH */}
                <div className="lsItem">
                  <label htmlFor="search">Destination: </label> <br />
                  <input 
                    type="text" 
                    name="" 
                    id="search" 
                    className="lsSearchInput" 
                    placeholder={location.state.destination}
                    />
                </div>

                <div className="checkInItem lsItem">
                  <label htmlFor="time" className='checkIn'>Check-in-out Date: </label> <br />
                  <span className="listSearchText" id='time' onClick={()=> setShowDate(!showDate)}>
                    {`${format(date[0].startDate, 'MM/dd/yyyy')}  to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                  </span>
                  {showDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className='listCalender'
                  />}
                </div>

                <div className="lsItem">
                  <h4 className="lsOptions">Options</h4>
                  <div className="lsOptionsItems">

                    <div className="lsOptionsItem">
                      <span className="lsOptionTitle">Min Price <small>per night</small></span>
                      <input 
                        type="number" 
                        className='lsOptionsInput' 
                        />
                    </div>
                    <div className="lsOptionsItem">
                      <span className="lsOptionTitle">Max Price <small>per night</small></span>
                      <input 
                        type="number" 
                        className='lsOptionsInput' 
                      />
                    </div>
                    <div className="lsOptionsItem">
                      <span className="lsOptionTitle">Adults</span>
                      <input 
                        type="number" 
                        // name={options[0]}
                        className='lsOptionsInput'
                        placeholder={location.state.options.adults} 
                        // onChange={handleChange}
                        min={1}
                      />
                    </div>
                    <div className="lsOptionsItem">
                      <span className="lsOptionTitle">Children</span>
                      <input 
                        type="number" 
                        className='lsOptionsInput' 
                        // name={options[1]}
                        placeholder={location.state.options.children}
                        // onChange={handleChange}
                        min={0}
                      />
                    </div>
                    <div className="lsOptionsItem">
                      <span className="lsOptionTitle">Rooms</span>
                      <input 
                        type="number" 
                        className='lsOptionsInput' 
                        // name={options[2]}
                        placeholder={location.state.options.rooms}
                        // onchange={handleChange}
                        min={1}
                        />
                    </div>
                    <button className="lsOptionsSearch">Search</button>
                </div>
                </div>
            </div>
            
            <div className="listResults">
              <Results />
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
    </div>
  )
}

export default Lists
