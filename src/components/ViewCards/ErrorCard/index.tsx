import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../../../config/Routes';
import error404 from '../../../assets/png/404-error.png';

const ErrorCard: FC<NoProps> = () => {
  return (
    <React.Fragment>
      <div className="card divide-y-2">
        <img className="w-96 drop" src={error404} alt="404-Error" />
        <div className="text-center">
          <h1 className="text-2xl">&nbsp;&nbsp;&nbsp;Ooops!!!</h1>
          <h2 className="text-sm">Can't find the page you are looking for</h2>
        </div>
      </div>
      <Link
        className="bg-gray-700 font-bold text-white p-2 shadow-md"
        to={Routes.base}
      >
        Go to Home
      </Link>
    </React.Fragment>
  );
};

export default ErrorCard;
