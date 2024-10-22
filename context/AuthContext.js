import React from 'react';

const withProtectedRoute = (Component) => {
  return class ProtectedRoute extends React.Component {
    render() {

      

      const isAuthenticated = true; 

      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return <div>You are not authorized to access this page.</div>;
      }
    }
  };
};

export default withProtectedRoute;