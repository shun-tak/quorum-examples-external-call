module.exports = {
  networks: {
    quorum1: {
      host: "127.0.0.1",
      port: 22000,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    },
    quorum4: {
      host: "127.0.0.1",
      port: 22003,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    },
    quorum7: {
      host: "127.0.0.1",
      port: 22006,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    }
  }
};
