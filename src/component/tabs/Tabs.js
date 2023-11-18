import React from 'react'
import { Link } from 'react-router-dom'
import { tabbels } from './constant'
import './Tabs.css'

const Tabs = ({activtabname,onclicktab}) => {
    const {Cancel_Any_Time, Watch_AnyWhere,Pick_Your_Price} = tabbels;
    const rendertabtitle = (tabtitle, Isactive,icon,id)=>{
return(
        <div  
        onClick={()=>onclicktab(tabtitle)}
         id={id} 
         className={`tab-item ${Isactive && "tab-border"}`}
         >
            <i className={icon}></i>
            <p>{tabtitle}</p>
        </div>
        )
    }


    return (

<>

    <section className="tabs">
        <div className="container">
            
         {rendertabtitle(
                Cancel_Any_Time,
                activtabname === Cancel_Any_Time,
                "fas fa-door-open fa-3x",
                "tab-1"
            )}

{rendertabtitle(
                Watch_AnyWhere,
                activtabname === Watch_AnyWhere,
                "fas fa-tablet-alt fa-3x",
                "tab-2"
            )}

{rendertabtitle(
                Pick_Your_Price,
                activtabname === Pick_Your_Price,
                "fas fa-tags fa-3x",
                "tab-2"
            )}


    </div>
    </section>

    {activtabname === Cancel_Any_Time &&(
        <section className="tab-content">
            <div className="container">
                <div id="tab-1-content" className={`tab-content-item ${activtabname === Cancel_Any_Time && "show"}`}>
                    <div className="tab-1-content-inner">
                        <div>
                            <p className="text-lg">
                                if you decide Netflix isnt for you, no problem cancel online anytime
                            </p>
                            <Link to="/netflixshow" className="btn btn-lg " >Watch free for 30 days</Link>
                        </div>
                        <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt=""/>
                    </div>
                </div>
            </div>
            
        </section>
    )}

{activtabname === Watch_AnyWhere &&(
        <section className="tab-content">
            <div className="container">
                <div id="tab-2-content" className={`tab-content-item ${activtabname === Watch_AnyWhere && "show"}`}>
                    <div className="tab-2-content-top">
                  
                            <p className="text-lg">
                                Watch tv showes and movies anytime, anywhere personalized for you
                            </p>
                            <Link to="/netflixshow" className="btn btn-lg ">Watch free for 30 days</Link>
                      
                    </div>

                    <div className="tab-2-content-bottom">
                    <div>
                        <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"/>
                        <p className="text-md">Watch on your Tv</p>
                        <p className="text-dark"> Smart Tv, playstation, xbox, chromcast, Apple Tv, blueray player, and more  </p>
                    </div>
                    
                    <div>
                    <img src="https://i.ibb.co/gDhnwWn/tab-content-2-2.png"/>
                        <p className="text-md">Watch on your Tv</p>
                        <p className="text-dark"> Smart Tv, playstation, xbox, chromcast, Apple Tv, blueray player, and more  </p>
                    </div>

                    <div>
                    <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"/>
                        <p className="text-md">Watch on your Tv</p>
                        <p className="text-dark"> Smart Tv, playstation, xbox, chromcast, Apple Tv, blueray player, and more  </p>
                    </div>


                </div>


                </div>
            </div>
            
        </section>
    )}

{activtabname === Pick_Your_Price &&(
    <section className="tab-content">
        <div className="container">

        <div id="tab-3-content" className={`tab-content-item ${activtabname === Watch_AnyWhere && "show"}`}></div>

        <div className="text-center">
                  <p className="text-lg">
                    Choose one plan and watch everthing in netflix
                  </p>
                  <Link to="/netflixshow" className="btn btn-lg">Watch free for 30 days</Link>
          </div>

          <table className="table">
              <thead>
              <tr>
                    <th></th>
                    <th>Bacic</th>
                    <th>Standard </th>
                    <th>Premium </th>
                 
              </tr>
              </thead>
              <tbody>

                  <tr>
                      <td>mothly price after free month end</td>
                      <td>6.5$</td>
                      <td>11.5$</td>
                      <td>17.5$</td>
                  </tr>

                  <tr>
                      <td>HD Available</td>
                      <td><i className="fas fa-times"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                  </tr>

                  <tr>
                      <td>Ultra HD Available</td>
                      <td><i className="fas fa-times"></i></td>
                      <td><i className="fas fa-times"></i></td>
                      <td><i className="fas fa-check"></i></td>
                  </tr>

                  
                  <tr>
                      <td>Screns you can watch in same time</td>
                      <td>1</td>
                      <td>2</td>
                      <td>4</td>
                  </tr>

                  <tr>
                      <td>Watch from tablet , labtop , mobile and Tv </td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                    
                  </tr>

                  <tr>
                      <td>First month free</td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                  </tr>

                  <tr>
                      <td>Cancel any time</td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                  </tr>


              </tbody>
          </table>

        </div>
    </section>
)
}
        </>
    )
}

export default Tabs
