import Amplify from 'aws-amplify';
import config from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import logo from './logo.svg';
import './App.css';

Amplify.configure(config);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
