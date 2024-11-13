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
  console.log(roles && roles.includes(role))
  
  return (roles && roles.includes(role)) ? children : <Navigate to="/" replace />;
};



export default ProtectedRoute;