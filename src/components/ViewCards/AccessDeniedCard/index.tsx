import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../../config/Routes';
import accessDenied from '../../../assets/png/access-denied.png';


const AccessDeniedCard: FC<NoProps> = () => {
  return (
    <React.Fragment>
      <div className="card divide-y-2">
        <img className="w-96 drop" src={accessDenied} alt="404-Error" />
        <div className="text-center">
          <h1 className="text-2xl">Unautherized</h1>
          <h2 className="text-sm">You don't have access to visit this page</h2>
        </div>
      </div>
      <Link
        className="bg-gray-700 font-bold text-white p-2 shadow-md"
        to={Routes.login}
      >
        Go to Login
      </Link>
    </React.Fragment>
  );
};

export default AccessDeniedCard;
