import React, {FC} from 'react';
import Layout from '../../components/Layout';
import ErrorCard from '../../components/ViewCards/ErrorCard';

const ErrorScreen: FC<NoProps> = () => {
  return (
    <Layout withFlex classname="flex-col space-y-5">
      <ErrorCard />
    </Layout>
  );
};

export default ErrorScreen;
