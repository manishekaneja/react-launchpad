import React, {FC} from 'react';
import Layout from '../../components/Layout';
import AccessDeniedCard from '../../components/ViewCards/AccessDeniedCard';

const AccessDeniedScreen: FC<NoProps> = () => {
  return (
    <Layout withFlex classname="flex-col space-y-5">
      <AccessDeniedCard />
    </Layout>
  );
};

export default AccessDeniedScreen;
