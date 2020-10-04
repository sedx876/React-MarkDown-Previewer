import React from 'react';
import './styles/App.css';
import Badge from "react-bootstrap/Badge";

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                MarkDown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h2>Lorem Ipsum</h2>
            </div>
            <div className="col-md-6">
              <h2>Lorem Ipsum</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
