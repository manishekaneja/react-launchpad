name=$1
if [ "$name" == "" ]
then
    echo "Invalid Thunk Name"
else
    cd src/redux/reducers
    filename=$name
    cat << EOF > $filename.ts
import { createAction, createReducer } from "@reduxjs/toolkit";
const initial$(echo '$'$filename): any = {};

const action$(echo '$sample') = createAction<any>("$filename|sample");

const reducer$(echo '$'$filename) = createReducer(initial$(echo '$'$filename), (builder) => {
  builder
    .addCase(action$(echo '$sample'), (state, action) => ({
      ...state,
    }))
});

export { reducer$(echo '$'$filename), action$(echo '$sample') };

EOF
fi
