import React from 'react'
import './oursports.scss'

export default function Oursports() {
  return (
    <div className="oursports">

      <div className="titleDiv">
        Our Sports
      </div>
      <div className="cardDiv">
        <div className="card">
          <div className="topbox">
            <img src="assets/football.svg" alt="" />
          </div>
          <div className="cardTitle">
            football
          </div>
        </div>
        <div className="card">
          <div className="topbox">
            <img src="assets/badminton.svg" alt="" />
          </div>
          <div className="cardTitle">
            badminton
          </div>
        </div>
        <div className="card">
          <div className="topbox">
            <img src="assets/basketball.svg" alt="" />
          </div>
          <div className="cardTitle">
            basketball
          </div>
        </div>
        <div className="card">
          <div className="topbox">
            <img src="assets/running.svg" alt="" />
          </div>
          <div className="cardTitle">
            athletics
          </div>
        </div>
      </div>

    </div>
  )
}
