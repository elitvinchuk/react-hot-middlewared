import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default hot(App)
