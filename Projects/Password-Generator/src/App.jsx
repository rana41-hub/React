import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*()~_+{}"
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password)
      alert("Password copied to clipboard!")
    }
  }, [password])

  return (
    <div className='parent'>
      <div className='container'>
        <h2 className='title'>Password Generator</h2>
        <div className='input-wrapper'>
          <input
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            className='input-box'
          />
          <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='length-slider'>
          <input
            type='range'
            className='range'
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type='checkbox'
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App;