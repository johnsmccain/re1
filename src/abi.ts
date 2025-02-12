// Main contract 0x5642722df0D957B0FF5C746cc68601ef92916452
// Test contract 
export const rich5WorldConfig = {
  address: "0xC4eC946E6A863589924FF9e2d10B258E3B8b0918",
  abi: [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_companyWallet","type":"address"},{"internalType":"address","name":"_mainWallet","type":"address"},{"internalType":"address","name":"_investorWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"activity","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"mode","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"pool","type":"uint256"}],"name":"addIdToPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"autoPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autopoolAddrBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"autopoolLastDist","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"autopoolUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"changeCompanyWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeInvestorAutoPoolFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeInvestorDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"changeInvestorWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeInvestorWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"levelIndex","type":"uint256"},{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeLevelIncomeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"changeMainWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeMainWalletDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeMinClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"packageIndex","type":"uint256"},{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changePackageFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeReferralFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newToken","type":"address"}],"name":"changeUSDTtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"changeWithdrawalFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_user","type":"uint256"}],"name":"checkPoolEligibility","outputs":[{"internalType":"uint8[5]","name":"","type":"uint8[5]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pool","type":"uint256"}],"name":"claimAutoPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimLevelIncome","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"companyWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultRefer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"directTeam","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributeAutoPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAutoPool","outputs":[{"internalType":"uint256[5]","name":"","type":"uint256[5]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getAutoPoolIncome","outputs":[{"internalType":"uint256[5]","name":"","type":"uint256[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAutoPoolTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_user","type":"uint256"}],"name":"getDirectTeamUsers","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrer","type":"uint256"},{"internalType":"uint256","name":"upline","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"package","type":"uint256"},{"internalType":"uint256","name":"directTeam","type":"uint256"},{"internalType":"uint256","name":"directTeamVolume","type":"uint256"},{"internalType":"uint256","name":"totalMatrixTeam","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"internalType":"struct RichFiCrowd.User[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_user","type":"uint256"}],"name":"getIncome","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"layer","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"internalType":"struct RichFiCrowd.Income[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_user","type":"uint256"}],"name":"getMatrixDirect","outputs":[{"internalType":"uint256[2]","name":"_directs","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_user","type":"uint256"},{"internalType":"uint256","name":"_layer","type":"uint256"}],"name":"getMatrixUsers","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrer","type":"uint256"},{"internalType":"uint256","name":"upline","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"package","type":"uint256"},{"internalType":"uint256","name":"directTeam","type":"uint256"},{"internalType":"uint256","name":"directTeamVolume","type":"uint256"},{"internalType":"uint256","name":"totalMatrixTeam","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"internalType":"struct RichFiCrowd.User[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getPackageIncome","outputs":[{"internalType":"uint256[8]","name":"","type":"uint256[8]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_page","type":"uint256"}],"name":"getRecentActivities","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"uint256","name":"mode","type":"uint256"}],"internalType":"struct RichFiCrowd.Activity[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getUserActivitiesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getpackages","outputs":[{"internalType":"uint256[8]","name":"","type":"uint256[8]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"incomeInfo","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"layer","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invAutoPoolFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invDepositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invWithdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"investorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelIncAddrBal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelIncomeFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainWalletDepositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"matrixDirect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"packages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ref","type":"uint256"},{"internalType":"address","name":"_newAcc","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"},{"internalType":"string","name":"_email","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_name","type":"string"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamsBiz","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTeamBiz","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTeamCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_a","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferOwnershipToZeroAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_lvls","type":"uint256"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"upgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdttoken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userActivities","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userAvailableLevelIncomeToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userAvailablePoolIncomeToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userIncomeDetails","outputs":[{"internalType":"uint256","name":"totalIncome","type":"uint256"},{"internalType":"uint256","name":"levelIncome","type":"uint256"},{"internalType":"uint256","name":"packageIncome","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrer","type":"uint256"},{"internalType":"uint256","name":"upline","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"package","type":"uint256"},{"internalType":"uint256","name":"directTeam","type":"uint256"},{"internalType":"uint256","name":"directTeamVolume","type":"uint256"},{"internalType":"uint256","name":"totalMatrixTeam","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userMissedIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPoolRank","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}] as const
};

// Main Contract 0x55d398326f99059fF775485246999027B3197955
// Test Contract 
export const tokenConfig = {
  address: "0x25ed48E0f7B9Be6024866A4eF4a3882333181517",
  abi:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "Approval",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "Transfer",
      "anonymous": false
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "spender", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "allowance",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "approve",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transfer",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256",
          "name": "value", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transferFrom",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    }
  ]
}
