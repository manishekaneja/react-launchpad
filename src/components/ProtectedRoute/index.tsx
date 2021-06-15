import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {Route, RouteProps} from 'react-router-dom';
import AccessDeniedScreen from '../../screens/AccessDeniedScreen';

const ProtectedRoute: FC<RouteProps<string> & {component: FC<any>}> = ({
  component: Component,
  ...rest
}) => {
  const {isLoggedIn} = useSelector((state: RootState) => state.application);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <React.Fragment>
            <AccessDeniedScreen />
            {/* <Redirect
              to={{
                pathname: '/unauthorized',
                state: {
                  from: props.location,
                },
              }}
            /> */}
          </React.Fragment>
        )
      }
    />
  );
};

export default ProtectedRoute;
