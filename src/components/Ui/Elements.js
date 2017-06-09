import React, { Component } from 'react';

export function minimizeButton(action, state) {
  return (
    <div className='minimizeButton pointer' onClick={action} style={{alignItems:'center', justifyContent: 'center'}}>
      {state ? <h1>-</h1> : <h1>+</h1>}
    </div>
  )
}
