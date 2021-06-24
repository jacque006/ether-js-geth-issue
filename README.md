# ether-js-geth-issue
Project for reproducing error with ether.js v5.3.1 and geth v1.10.4

## deps

NodeJS >= v14
npm v6 (>= v7 is fine, lockfile format will update)
docker & docker-compose to more easily test different geth versions 

## steps to reproduce

```sh
npm i
npm run build
docker-compose up -d geth-1.10.4 # or geth --http --dev
node index.js
```

TODO And of course it now works, figure out why.
