name=$1
if [ "$name" == "" ]
then
    echo "Invalid Component Name"
else
    cd src/components
    mkdir $name
    cd $name
    cat << EOF > index.module.css
.title{
    color:#333;
    margin:0px;
    padding:5px 10px;
}
EOF

    cat << EOF > index.tsx
import React, { FC } from 'react';
import classes from './index.module.css';

const $name: FC<NoProps> = () => {
  return (
    <React.Fragment>
      <h2 className={classes.title}>$name</h2>
    </React.Fragment>
  );
};

export default $name;
EOF

touch index.d.ts
fi