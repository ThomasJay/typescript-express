# typescript-express

Express Typescript API

npm init

tsc --init

npm install express -g

npm install -D typescript ts-node nodemon @types/node @types/express

mkdir src
mkdir dist

vi tsconfig.json
edit -
target: "es6"
outDir: "./dist"
rootDir: "./src"
moduleResolution: "node"

npm run build

npm start
