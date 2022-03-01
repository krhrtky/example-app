import React from 'react'
import ReactDOM from 'react-dom'
import Amplify, { Auth } from 'aws-amplify'
// @ts-ignore
import awsconfig from './aws-exports'
import './index.css'
import '@aws-amplify/ui-react/styles.css'
import App from './App'

Amplify.configure(awsconfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
