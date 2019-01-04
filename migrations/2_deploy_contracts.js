var KISCToken = artifacts.require("./KISCToken.sol");
const _name = "KISCToken";
const _symbol = "KISC";
const _decimals = 8;
const _total_supply = 100000000;
module.exports = function(deployer) {
    deployer.deploy(KISCToken, _name, _symbol, _decimals, _total_supply);
};