name=$1
if [ "$name" == "" ]
then
    echo "Invalid Thunk Name"
else
    cd src/redux/thunk
    filename=$name'Thunk'
    cat << EOF > $filename.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
const $filename = createAsyncThunk<any, any>("thunk/$filename", async () => {
  return;
});

export { $filename };
EOF
fi
