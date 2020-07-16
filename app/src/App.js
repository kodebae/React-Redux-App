import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getApod } from './Actions/actions';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      {props.loading && <div>loading...</div>}
      {props.apod && (
      <div>
        <img src={props.apod.url}/>
      <p>{props.apod.explination}</p>
      </div>)}
      {/* {props.error !== "" && <p>{error}</p>} */}
      <button onClick={props.getApod}>Get Photo Of The Day</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getApod})(App);
