import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { rootReducer } from './redux';

interface CounterProps {
  count: number;
}

const Counter = () => {


  return (
    <div>Counter</div>
  )
}

const mapDispatch = {
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' }),
}

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CounterButtons: React.FC<PropsFromRedux> = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Minus</button>
      <button onClick={decrement}>Plus</button>
    </div>
  )
}

export default connector(CounterButtons);

