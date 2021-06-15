name=$1
if [ "$name" == "" ]
then
    echo "Invalid Thunk Name"
else
    cd src/hooks
    filename='use'$name'Hook'
    cat << EOF > $filename.ts
function $filename() {}

export default $filename;
EOF
fi
