import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.Fragment>
  <TwitterFollowCard userName="elenatorro" name="Elena "/>
  <TwitterFollowCard userName="" name="Mauricio Urdaneta "/>
  </React.Fragment>
)

