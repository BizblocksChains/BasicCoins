/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
		development: {
		      host: "127.0.0.1",
		      port: 22000,
		      gas:   4500000,
		      gasPrice: 0,
		      from: "0x627306090abab3a6e1400e9345bc60c78a8bef57",
		      network_id: "*" // Match any network id
		    	  
		    } 
	}
};
