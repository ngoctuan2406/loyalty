import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddToHomeScreen from './addto/AddToHomeScreen';
function App() {
  return (
    <div className="App">
        kkkkkkk1  
      <AddToHomeScreen
            appId='add-to-homescreen-react'
            startAutomatically={ true }
            startDelay={ 0 }
            lifespan={ 30 }
            // skipFirstVisit={ true }
            displayPace={ 0 }
            customPromptContent={ {
              title: 'Do you want to install Add-to-homescreen React Modified Behavior Example on your homescreen?',
              cancelMsg: 'No',
              installMsg: 'Yes, sure!',
              guidanceCancelMsg: 'Dismiss',
              src: 'images/ExampleLogo.png'
            } }
        />
      {/* </body> */}
    </div>
  );
}

export default App;
