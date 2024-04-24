import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Booking({ planet }) {
  const [booking, setBooking] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/booking/${planet._id}`)}>Book now!</button>
    </div>
  )
}

export default Booking