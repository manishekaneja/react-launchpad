import React, {FC} from 'react';

const Layout: FC<LayoutProps> = ({classname, children,withFlex=false}) => {
  return <div className={`bg-blue-100 w-full min-h-screen p-2 ${withFlex?` flex justify-center items-center`:``} ${classname}`}>{children}</div>;
};

export default Layout;
