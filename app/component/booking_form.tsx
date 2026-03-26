'use client'
import React, {useEffect} from 'react'

export default function BookingForm() {

  return (
    <div className="slider_form">
        <h4>Book Driver</h4>
        <form action="">
            <input type="text" placeholder="Car Type" />
            <input type="text" placeholder="Pick Up Location" />
            <input type="text" placeholder="Drop Location" />
            <div className="btm_input">
                <input type="text" placeholder="Your Phone Number" />
                <button>Book Now</button>
            </div>
        </form>
    </div>
  )
}
