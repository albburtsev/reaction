echo "Start to make demo build"

yarn run clean
yarn run build
mkdir demo
cp index.html demo/
cp -r build demo/

echo "Demo build finished"
