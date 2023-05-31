
import React from 'react';

export default function Alert(props) {
  // to capitalize first letter in alert message (beacuse there is no capitalize inbuilt func in javavscript)
  const capitalize= (word) =>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

// to avoid cummulative layout shift(cls) when alert mess apers the content go down to avoid it we use div and height is given 
// {} is used inside div because we have use directly javascript inside it
// props.alert && --> to avoid error 
  // when this will be true then only it will go to next otherwise no