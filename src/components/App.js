import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = ['John', 'Mary', 'Tom', 'Kate'];
        return(
            <div id="main">
               <h1>Relatives to visit this Diwali:</h1>
               <ol key="relativeList">
               {relatives.map((relative, index) => (
               <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
            </div>
        )
    }
}


export default App;
