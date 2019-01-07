//Higher order component (HOC) - A component that renders another component
//Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.Info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) =>(
   <div>
     {props.isAdmin && <p> This is private info. Please do not share</p>}
     <WrappedComponent {...props} />
   </div>
  );
};

const ConfInfo = (props) => (
  <div>
    <h1>Authentication Required</h1>
    <p>The info is: {props.ConfInfo}</p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
  return (props) =>(
   <div>
     {props.isAuthentitcated ? (
       <WrappedComponent {...props} />
     ) : (<p>Please log in to view the info</p>) }
     
   </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(ConfInfo);
// ReactDOM.render(<AdminInfo isAdmin={true} Info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentitcated={false}/>, document.getElementById('app'));
