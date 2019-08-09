# Quorum examples (external call)

Ref
- [Quorum Examples](https://github.com/jpmorganchase/quorum-examples)
- [Working With Quorum](https://www.trufflesuite.com/docs/truffle/getting-started/working-with-quorum)
- [BUILDING DAPPS FOR QUORUM: PRIVATE ENTERPRISE BLOCKCHAINS](https://www.trufflesuite.com/tutorials/building-dapps-for-quorum-private-enterprise-blockchains)

## Quick start
1. Run [7nodes](https://github.com/jpmorganchase/quorum-examples/tree/4a5cf1448fd22004dd315c5632ab095448746c96/examples/7nodes)
1. `yarn`
1. Open 3 terminal windows
  1. Window 1
    1. `yarn truffle console --network quorum1`
    1. `migrate --reset` (in truffle console)
    1. `SimpleStorage.deployed().then(function(instance) { return instance.get(); })` (in truffle console)
  1. Window 2
    1. `yarn truffle console --network quorum4`
    1. `SimpleStorage.deployed().then(function(instance) { return instance.get(); })` (in truffle console)
  1. Window 3
    1. `yarn truffle console --network quorum7`
    1. `SimpleStorage.deployed().then(function(instance) { return instance.get(); })` (in truffle console)
