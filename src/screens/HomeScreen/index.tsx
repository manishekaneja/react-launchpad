import React, {FC} from 'react';
import Layout from '../../components/Layout';

const HomeScreen: FC<NoProps> = () => {
  return (
    <Layout withFlex>
      <div>
        <h1 className="text-3xl bg-red-100 px-5 py-2 shadow">
          Welcome to React Launchpad
        </h1>
        <ol className="my-2">
          {[
            'Tailwind included',
            'Scripts to genrate files',
            'Pre-defined Routing Setup',
            'Pre-defined Redux/Redux-thunk Setup',
          ].map((element) => (
            <li key={element} className="shadow bg-gray-200 p-1 mb-1 mx-2">
              - {element}
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
};

export default HomeScreen;
