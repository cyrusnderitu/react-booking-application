import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <div className="featuredItem">
                <img 
                    src="https://i.guim.co.uk/img/media/7838bda6a6162c3a2e7ebc0a78fafa2a75628b42/0_187_5616_3370/master/5616.jpg?width=620&quality=85&auto=format&fit=max&s=62db1045a67076d7ef7dba3f8cbbbf8c" 
                    alt="featured__img"  
                    className='featuredImg'
                />
                <div className="featuredData">
                    <h2 className="featuredTitle">Dubai</h2>
                    <span className="featuredDesc">123 Properties</span>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://www.pinsentmasons.com/-/media/images/hero/australia-1440.png?h=583&w=1200&hash=D04E87288A6DBC26F1E7C9D209D04E55" 
                    alt="featured__img"  
                    className='featuredImg'
                />
                <div className="featuredData">
                    <h2 className="featuredTitle">Australia</h2>
                    <span className="featuredDesc">523 Properties</span>
                </div>
            </div>
            <div className="featuredItem">
                <img 
                    src="https://www.expatica.com/app/uploads/sites/5/2014/05/moving-to-france-1920x1080.jpg" 
                    alt="featured__img"  
                    className='featuredImg'
                />
                <div className="featuredData">
                    <h2 className="featuredTitle">France</h2>
                    <span className="featuredDesc">365 Properties</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
