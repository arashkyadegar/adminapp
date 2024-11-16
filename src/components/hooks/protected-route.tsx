import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';


// const ProtectedRoute = ({ component, roles, ...rest }: any) => {
//   const { user, role } = useAuth();

//   return (
//     <Route {...rest} render={(props: any) => {
//       // if (!user) {
//       //   return <Navigate to='/login' />;
//       // }

//       if (roles && !roles.includes(role)) {
//         return <Navigate to='/' />;
//       }

//       return <Component {...props} />;
//     }} />
//   );
// };

const ProtectedRoute = ({ children, role }: any) => {
  const { user, roles } = useAuth();
  console.log(roles)
  console.log(role)
  // console.log(roles && roles.includes(role))
  //return (roles.some(item => role.includes(item))) ? children : <Navigate to="/" replace />;
  
  return (roles.some(item => role.includes(item))) ? children : <Navigate to="/not-allowed" replace />;
};



export default ProtectedRoute;