import React from 'react'
import { hot } from 'react-hot-loader/root'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import './styles.css'

import Counter from './Counter.jsx'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home!</h2>
  </div>
)

export default hot(App)
