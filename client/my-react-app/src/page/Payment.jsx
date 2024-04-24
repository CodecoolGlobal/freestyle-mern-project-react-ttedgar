import { useState } from 'react'

function Payment({ tripDetails }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [passport, setPassport] = useState(null);
  const [ccName, setCcName] = useState(null);
  const [ccNumber, setCcNumber] = useState(null);
  const [ccExpiration, setCcExpiration] = useState(null);
  const [cvv, setCvv] = useState(null);


  function validateCcn(event) {
    const ccn = event.target.value;
    ccn.length === 4 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value + ' ' : null
    ccn.length === 9 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value + ' ' : null
    ccn.length === 14 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value + ' ' : null
    ccn.length === 5 && event.nativeEvent.inputType === "deleteContentBackward" ? event.target.value = event.target.value.substring(0, 4) : null
    ccn.length === 10 && event.nativeEvent.inputType === "deleteContentBackward" ? event.target.value = event.target.value.substring(0, 9) : null
    ccn.length === 15 && event.nativeEvent.inputType === "deleteContentBackward" ? event.target.value = event.target.value.substring(0, 14) : null
    !/^[\d\s]*$/.test(event.target.value) ? event.target.value = ccn.substring(0, ccn.length - 1) : null;
  } 
  
  function handleCcnChange(event) {
    validateCcn(event);
    setCcNumber(event.target.value);
  }
  
  function validateCce(event) {
    const cce = event.target.value;
    cce.length === 2 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value + '/' : null;
    cce.length === 3 && event.nativeEvent.inputType === "deleteContentBackward" ? event.target.value = event.target.value.substring(0, 2) : null
    !/^[0-9/]*$/.test(event.target.value) ? event.target.value = cce.substring(0, cce.length - 1) : null;
  }

  function handleCceChange(event) {
    validateCce(event);
    setCcExpiration(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const reservation = {
      tripDetails: tripDetails,
      personalInfo: {
        firstName,
        lastName,
        email,
        passport,
      },
      creditcardInfo: {
        ccName,
        ccNumber,
        ccExpiration,
        cvv,
      },
    };
    createReservation(reservation);
  }

  async function createReservation(reservation) {
    const response = await fetch('/api/reservation', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reservation)
    })
    const data = await response.json();
    return data;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name:
            <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Last name:
            <input type="text" onChange={(e) => setLastName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>E-mail:
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Intergalactic passport number:
            <input type="number" onChange={(e) => setPassport(e.target.value)}/>
          </label>
        </div>
        <br />
        <div>
          <label>Credit card name:
            <input type="text" onChange={(e) => setCcName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Credit card number:
            <input type="tel" placeholder="xxxx xxxx xxxx xxxx" maxLength={19} onChange={handleCcnChange}/>
          </label>
        </div>
        <div>
          <label>Credit card expiration date:
            <input type="tel" placeholder="xx/xx" maxLength={5} onChange={handleCceChange}/>
          </label>
        </div>
        <div>
          <label>CVV/CVC code:
            <input type="number" placeholder="xxx" maxLength={3} onChange={(e) => setCvv(e.target.value)}/>
          </label>
        </div>
        <button>Confirm payment</button>
      </form>
    </div>
  )
}

export default Payment