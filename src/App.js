import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { increment } from './redux/action/Action';

function App(props) {
  useEffect(() => {
    props.inc();
  },[])
  console.log(props.state)
  return (
    <div className="App">
      <h1>Hello world</h1>
      <br/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state:state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    inc: () => dispatch({type: 'Increment',payload: 1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
