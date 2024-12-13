import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/action';
import styles from '../styles.module.css'; 

function CounterComponent() {
  const dispatch = useDispatch(); 
  const counter = useSelector(state => state.counter);  

  return (
    <div className={styles.page}>
      <h2>Counter: {counter}</h2>
      <div>
        <button className={styles.button} onClick={() => dispatch(increment())}>Increment</button>
        <button className={styles.button} onClick={() => dispatch(decrement())}>Decrement</button>
        <button className={styles.button} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default CounterComponent;
