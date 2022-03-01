import { useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import logo from './logo.svg'
import './App.css'
import { CognitoUser } from "amazon-cognito-identity-js";
import { CognitoAttributes } from "@aws-amplify/ui";

type Props = {
  signOut: (data?: Record<string | number | symbol, any>) => void;
  user: {
  username?: string;
  attributes?: CognitoAttributes;
  } & CognitoUser;
}

function App({ signOut, user }: Props) {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
        <div>{user.username}</div>
        <button onClick={signOut}>signOut</button>
      </div>
  )
}

export default withAuthenticator(App)
