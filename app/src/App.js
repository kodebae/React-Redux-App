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
      <div class="container">

        <img class="image" src={props.apod.url}/>
        <h3 class="img-title">{props.apod.title}</h3>
        <p class="explain">{props.apod.explanation}</p>
      </div>)}
      {/* {props.error !== "" && <p>{error}</p>} */}
      <button class="btn" onClick={props.getApod}>Get Today's NASA Photo</button>
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
