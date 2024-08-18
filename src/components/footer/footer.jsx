import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="topdiv">

                <div className="left">
                    <div className="logoDiv">
                        <img src="assets/logoLorem.png" alt="" />
                    </div>
                    <div className="addressDiv">
                        <h3>NewScoutGen inc.</h3>
                        <p>
                            Address LN 01,
                            addrs
                            Bengaluru, Karnataka
                            India - 560011
                        </p>
                    </div>
                </div>
                <div className="right">
                    <ul>
                        <li>contact us</li>
                        <li>what we do</li>
                        <li>testimonials</li>
                        <li>blogs</li>

                    </ul>
                </div>
            </div>
            <div className="copyrights">
            © Copyright NewScoutGen 2024. All rights reserved.
            </div>
        </div>
    )
}
