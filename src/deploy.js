const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');
const { SuperHDWalletProvider, ManualSignProvider } = require("super-web3-provider");

async function main(network) {

  let provider;
  if (process.env.PROVIDER_URL) {
    provider = process.env.PROVIDER_URL 
  } 
  
  else if (network === 'ropsten_metamask') {
     provider = new ManualSignProvider({
      // projectId: '5e81dee85c27530018e59ffb',
      projectId: '5e7cda325c27530018e59ff1',
      // token: '4Z0v6K62Ahu0zKDv/omR/pbB7VO2BLZojt8vM/X9nxRA663AmS8P2pse',
      token: 'sIF2x0G3KW5O4oi8D5I4FAJfU6JaePitQBaVyafy84e86dBcROUSI5Ip',
      networkId: '3',
      endpoint: 'https://ropsten.infura.io/v3/58b57895912346bf8aefba3cab0db459',
      from: '0xB2665a1B8F91814E462F8E04A57738063aDEC032',
      metadata: {},
    });
  } 
  
  else {
    network = 'rinkeby';
    console.log('No network specified. Defaulting to rinkeby ...')
    provider = new SuperHDWalletProvider({
      // projectId: '5e81dee85c27530018e59ffb',
      projectId: '5e7cda325c27530018e59ff1',
      // token: '4Z0v6K62Ahu0zKDv/omR/pbB7VO2BLZojt8vM/X9nxRA663AmS8P2pse',
      token: 'sIF2x0G3KW5O4oi8D5I4FAJfU6JaePitQBaVyafy84e86dBcROUSI5Ip',
      mnemonic: 'merge love identify vote modify step tourist inform deliver march tuition retreat',
      networkId: '4',
      provider: 'https://rinkeby.infura.io/v3/58b57895912346bf8aefba3cab0db459',
      metadata: {},
    });
  }

  const web3 = new Web3(provider);
  web3.setProvider(provider);
  const loader = setupLoader({ provider: web3 }).web3;

  // Load counter information from Artifacts
  const TestToken = loader.fromArtifact('TestToken');

  // Retrieve accounts from the local node, we will use the first one to send the transaction
  const accounts = await web3.eth.getAccounts();

  // Deploy contract
  // const estimateGas = await TestToken.deploy().estimateGas();
  const gasPrice = await web3.eth.getGasPrice();

  console.log('\nDeploying contract on %s...', network);
  const TestTokenInstance = await TestToken.deploy()
    .send({ from: accounts[0], gas: 7500000, gasPrice });
    console.log('Contract deployed at address:', TestTokenInstance._address)

  // Initialize TestToken contract
  console.log('\nInitializing contract...');
  await TestTokenInstance.methods.initialize('0xB2665a1B8F91814E462F8E04A57738063aDEC032', 'Bond', 'BND', 2000, 18)
    .send({ from: accounts[0], gas: 7500000, gasPrice });
  
  // Send a transaction to increase() the Counter contract
  console.log('\nIncreasing counter...');
  await TestTokenInstance.methods.increase(20)
    .send({ from: accounts[0], gas: 50000, gasPrice: 1e6 });

  // Call the value() function of the deployed Counter contract
  const value = await counterInstance.methods.value().call();
  console.log(value);

  process.exit();
}

if (require.main === module) {
  const network = process.argv[2];
  main(network);
}
