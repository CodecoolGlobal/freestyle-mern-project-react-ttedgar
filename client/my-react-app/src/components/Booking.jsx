import { useState } from 'react'

function Booking() {
  const [booking, setBooking] = useState(false);

  return (
    <div>
      <button onClick={() => setBooking(true)}>Book now!</button>
      {booking ? <div>részletek</div> : null}
    </div>
  )
}

export default Booking