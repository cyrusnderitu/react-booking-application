import { useState } from 'react'
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faPersonHiking, faCalendar, faPerson, faMapLocation  } from '@fortawesome/free-solid-svg-icons'
import {format} from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [showDate, setShowDate]= useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const navigate = useNavigate() 
    const [showOptions, setShowOptions]= useState(false)
    const [options, setOptions]= useState({
        adults: 2,
        children: 2,
        rooms: 2
    })
    const [destination, setDestination]= useState('')
    const handleSearch = ()=>{
        navigate('/hotels', {state: {destination, date, options}})
    }
    const handleHome = ()=>{
        navigate('/')
    }
  return (
    <div className="heroSection">
        <div className="navbar">
          <div className="nav-container">
            <span className="nav-logo" onClick={handleHome}>
            <FontAwesomeIcon icon={faMapLocation} className='nav-icon'/>
              Real Adventures Booking</span>
            <div className="nav-items">
              <button className="navbarBtn">Register</button>
              <button className="navbarBtn">Login</button>
            </div>
          </div>
        </div>
    <div className='header'>
        <div className="header-container">
            <div className="headerLists">
                <div className="headerListsItems active">
                    <FontAwesomeIcon icon={faBed }/>
                    <span className="headerListName">Stay</span>
                </div>
                <div className="headerListsItems">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span className="headerListName">Flights</span>
                </div>
                <div className="headerListsItems">
                    <FontAwesomeIcon icon={faCar}/>
                    <span className="headerListName">Car Rentals</span>
                </div>
                <div className="headerListsItems">
                    <FontAwesomeIcon icon={faPersonHiking}/>
                    <span className="headerListName">Attractions</span>
                </div>
                <div className="headerListsItems">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span className="headerListName">Airport Taxis</span>
                </div>
            </div>
        
{  type !== 'hotel-lists' &&     <>  
            <h1 className="headerTitle">A lifetime if discount? It's Genius...</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or more <br /> with a free Real Adventure Bookings
            </p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearchArea">
                <div className="headerSearchCont">
                    <div className="headerSearchInput">
                        <FontAwesomeIcon icon={faBed} />
                        <input 
                            type="text" 
                            className="headerInput" 
                            placeholder="Your Tour Destination ?"
                            onChange={(event)=> setDestination(event.target.value) }
                        />
                    </div>
                    <div className="headerSearchInput">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="headerSearchText" onClick={()=> setShowDate(!showDate)}>
                            {`${format(date[0].startDate, 'MM/dd/yyyy')}  to  ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {showDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='headerCalender'
                        />}
                    </div>
                    <div className="headerSearchInput">
                        <FontAwesomeIcon icon={faPerson} />
                        <span className="headerSearchText" onClick={()=> setShowOptions(!showOptions)}>{`${options.adults} Adults . ${options.children} Children . ${options.rooms} Rooms`}</span>

                            { showOptions && <div className="options">
                            <div className="optionsContainer">
                                <div className="optionsField">
                                    <span className="optionsName">Adults</span>
                                    <div className="optionsChanges">
                                        <button className="optionsBtn" disabled={options.adults <= 1} onClick={()=> setOptions((prevState)=> ({ ...prevState, adults: prevState.adults - 1}))}>-</button>
                                        <span>{options.adults}</span>
                                        <button className="optionsBtn" onClick={()=> setOptions((prevState)=> ({ ...prevState, adults: prevState.adults + 1}))}>+</button>
                                    </div>
                                </div>
                                <div className="optionsField">
                                    <span className="optionsName">Children</span>
                                    <div className="optionsChanges">
                                        <button className="optionsBtn" disabled={options.children <= 0 } onClick={()=> setOptions((prevState)=> ({ ...prevState, children: prevState.children - 1}))}>-</button>
                                        <span>{options.children}</span>
                                        <button className="optionsBtn" onClick={()=> setOptions((prevState)=> ({ ...prevState, children: prevState.children + 1}))}>+</button>
                                    </div>
                                </div>
                                <div className="optionsField">
                                    <span className="optionsName">Rooms</span>
                                    <div className="optionsChanges">
                                        <button className="optionsBtn" disabled={options.rooms <= 1} onClick={()=> setOptions((prevState)=> ({ ...prevState, rooms: prevState.rooms - 1}))}>-</button>
                                        <span>{options.rooms}</span>
                                        <button className="optionsBtn" onClick={()=> setOptions((prevState)=> ({ ...prevState, rooms: prevState.rooms + 1}))}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div> }
                    </div>
                    <div className="headerSearchInput">
                        <button className="headerSearchBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div> </>}
        </div>
      
    </div>
</div>
  )
}

export default Header
