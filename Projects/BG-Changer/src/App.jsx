import { useState } from 'react'
import ColorButtons from './ColorButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorButtons></ColorButtons>
    </>
  )
}

export default App
