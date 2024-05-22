#!/usr/bin/env bash
# spin up enevti core
if [[ $CORE == "enevti" ]]
  then
    rm -rf ../enevti-core
    if [[ ! -d "../enevti-core" ]]
      then
        curl -O https://lisk-qa.ams3.digitaloceanspaces.com/enevti-core-desktop.tar.gz
        tar -xf enevti-core-desktop.tar.gz
        mv -f enevti-core ../enevti-core
        rm -rf enevti-core-desktop.tar.gz
        rm -rf ../enevti-core/node_modules ../enevti-core/package-lock.json
        npm --prefix ../enevti-core i && npm run --prefix ../enevti-core build
    fi

    rm -rf ~/.enevti
    ../enevti-core/bin/run blockchain:import --force ./e2e/artifacts/enevti-core/blockchain.tar.gz

    if [[ ! -z "$USE_NOHUP" ]]
      then
        nohup ../enevti-core/bin/run start --network=devnet --api-ws --api-host=0.0.0.0 --api-port=8887 >enevti-core.out 2>enevti-core.err &
        echo $! >enevti-core.pid
      else
        ../enevti-core/bin/run start --network=devnet --api-ws --api-host=0.0.0.0 --api-port=8887
    fi
fi

# spin up klayr core
if [[ $CORE == "klayr" ]]
  then
    if [ ! command -v klayr-core &> /dev/null ]
      then
        npm i -g klayr-core@^4.0.0-rc.3
    fi

    rm -rf ~/.klayr
    klayr-core blockchain:import --force ./e2e/artifacts/klayr-core/blockchain.tar.gz

    if [[ ! -z "$USE_NOHUP" ]]
      then
        nohup klayr-core start --network=devnet --api-ws --api-host=0.0.0.0 --config ./e2e/artifacts/klayr-core/config.json --overwrite-config >klayr-core.out 2>klayr-core.err &
        echo $! >klayr-core.pid
      else
        klayr-core start --network=devnet --api-ws --api-host=0.0.0.0 --config ./e2e/artifacts/klayr-core/config.json --overwrite-config
    fi
fi
