import React from 'react'
import './mainpage.scss'

export default function Main() {
  return (
    <div className="Main">
        <div className="leftMain">
            <div className="textdiv">
                <div className="titleText">
                    Unlock Global Talent
                </div>
                <div className="subtext">
                Expand your horizons by accessing top talent from around the world. Discover the skills you need to drive your business forward.
                </div>
                <div className="buttonComponents">
                    <div className="buttonDiv">
                        <button>
                            Schedule a call
                        </button>
                    </div>
                    <div className="outlineButtonDiv">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightMain">
            <div className="imgClass">
                <img src="assets/firstImage.png" alt="" />
            </div>
        </div>
    </div>
  )
}
