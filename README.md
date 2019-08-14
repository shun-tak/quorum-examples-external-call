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
        1. `yarn truffle migrate --network quorum1 --reset`
        1. `yarn truffle exec scripts/Manager.js --network quorum1` (this returns 4 & 7)
    1. Window 2
        1. `yarn truffle exec scripts/Manager.js --network quorum4` (this returns 4 & 0)
    1. Window 3
        1. `yarn truffle exec scripts/Manager.js --network quorum7` (this returns 0 & 7)
