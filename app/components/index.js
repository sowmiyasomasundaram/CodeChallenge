import React from 'react';
import DisplayData from '../containers/DisplayData'

const App = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-11">
            <DisplayData></DisplayData>
        </div>
        <div className="column auto">

        </div>
      </div>
      </div>
  )
}
export default App;