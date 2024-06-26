'use client';

import React from 'react'

const Root = () => {
    const [counter, setCounter] = React.useState(0);

    const callAPI = async () => {
        const resJSON = await fetch('/api/analytics', { cache: 'no-cache'});
        const res = await resJSON.json();
        setCounter(res);
    }

  return (
    <div>
        <button onClick={callAPI}>Counter {counter}</button>
    </div>
  )
}

export default Root