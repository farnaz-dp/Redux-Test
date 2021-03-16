
import React from 'react'
import {IncrementContainer} from "./Components/IncrementContainer";
import {Provider} from 'react-redux'
import {store} from './Store/store'


function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <IncrementContainer />
          </div>
      </Provider>
  );
}


export default App;
