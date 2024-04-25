/* eslint-disable react/prop-types */
import { useState } from 'react'

function Payment({ tripDetails }) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [passport, setPassport] = useState(null);
  const [ccName, setCcName] = useState(null);
  const [ccNumber, setCcNumber] = useState('default');
  const [ccExpiration, setCcExpiration] = useState('default');
  const [cvv, setCvv] = useState('default');
  const [isCcnInvalide, setIsCcnInvalide] = useState('default');
  const [isCceInvalide, setIsCceInvalide] = useState('default');
  const [isCvvInvalide, setIsCvvInvalide] = useState('default');


  function validateCcn(event) {
    const ccn = event.target.value;
    ccn.length === 5 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value.slice(0, 4) + ' ' + event.target.value[4] : null
    ccn.length === 10 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value.slice(0, 9) + ' ' + event.target.value[9] : null
    ccn.length === 15 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value.slice(0, 14) + ' ' + event.target.value[14] : null
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
    cce.length === 3 && event.nativeEvent.inputType === 'insertText' ? event.target.value = event.target.value.slice(0, 2) + '/' + event.target.value[2] : null
    cce.length === 3 && event.nativeEvent.inputType === "deleteContentBackward" ? event.target.value = event.target.value.substring(0, 2) : null
    !/^[0-9/]*$/.test(event.target.value) ? event.target.value = cce.substring(0, cce.length - 1) : null;
  }

  function handleCceChange(event) {
    validateCce(event);
    setCcExpiration(event.target.value);
  }
  
function validateCvv(event) {
  const cvv = event.target.value;
  !/^[0-9/]*$/.test(event.target.value) ? event.target.value = cvv.substring(0, cvv.length - 1) : null;
}

  function handleCvvChange(event) {
    validateCvv(event);
    setCvv(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
      ccNumber.length !== 19 || !ccNumber ? setIsCcnInvalide(true) : setIsCcnInvalide(false);
      ccExpiration.length !== 5 || !ccExpiration ? setIsCceInvalide(true) : setIsCceInvalide(false);
      cvv.length !== 3 || !cvv ? setIsCvvInvalide(true) : setIsCvvInvalide(false);

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
    console.log(isCceInvalide, isCceInvalide, isCvvInvalide);

    (ccNumber.length === 19 && ccExpiration.length === 5 && cvv.length === 3) ? createReservation(reservation) : null;
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

        {isCcnInvalide && isCcnInvalide !== 'default' ? <h5 style={{color: 'red'}}>Credit card number should be 16 numbers!</h5> : null}

        <div>
          <label>Credit card expiration date:
            <input type="tel" placeholder="xx/xx" maxLength={5} onChange={handleCceChange}/>
          </label>
        </div>

        {isCceInvalide && isCceInvalide !== 'default' ? <h5 style={{color: 'red'}}>Credit card expiration date should be 2 * 2 numbers!</h5> : null}

        <div>
          <label>CVV/CVC code:
            <input type="tel" placeholder="xxx" maxLength={3} onChange={handleCvvChange}/>
          </label>
        </div>
        {isCvvInvalide && isCvvInvalide !== 'default' ? <h5 style={{color: 'red'}}>CVV number should be 3 numbers!</h5> : null}
        <button>Confirm payment</button>
      </form>
    </div>
  )
}

export default Payment