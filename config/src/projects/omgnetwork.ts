import {
  CONTRACTS,
  DATA_AVAILABILITY,
  EXITS,
  FORCE_TRANSACTIONS,
  OPERATOR,
  RISK_VIEW,
  STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const omgnetwork: Project = {
  name: 'OMG Network',
  slug: 'omgnetwork',
  bridges: [
    {
      address: '0x3Eed23eA148D356a72CA695DBCe2fceb40a32ce0',
      sinceBlock: 9687270,
      tokens: ['ETH'],
    },
    {
      address: '0x070cB1270A4B2bA53c81CeF89d0FD584Ed4F430B',
      sinceBlock: 9687286,
      tokens: [
        'USDT',
        'OMG',
        'BAT',
        'WBTC',
        'DAI',
        'CAT',
        'renBTC',
        'GNO',
        'BUSD',
        'ELEC',
        'PAX',
        'SPANK',
        'LION',
        'ZRX',
        'MATIC',
        'TUSD',
        'BNT',
        'KICK',
        'LINK',
        'BAL',
        'CEL',
        'CRO',
        'LRC',
        'USDC',
        'AST',
        'PASS',
        'KNC',
      ],
    },
  ],
  associatedToken: 'OMG',
  details: {
    purpose: 'Payments',
    links: {
      websites: ['https://omg.network'],
      apps: [],
      documentation: ['https://docs.omg.network/'],
      explorers: ['https://blockexplorer.mainnet.v1.omg.network/'],
      repositories: ['https://github.com/omgnetwork/plasma-contracts'],
      socialMedia: [
        'https://twitter.com/omgnetworkhq',
        'https://discord.gg/m7NysJjKhm',
        'https://t.me/omgnetwork',
        'https://linkedin.com/company/omgnetwork/',
      ],
    },
    riskView: {
      stateValidation: RISK_VIEW.STATE_FP,
      dataAvailability: RISK_VIEW.DATA_EXTERNAL,
      upgradeability: RISK_VIEW.UPGRADABLE_YES,
      operatorCensoring: RISK_VIEW.CENSORING_EXIT_L1,
      operatorDown: RISK_VIEW.DOWN_ESCAPE_U,
    },
    technology: {
      category: {
        name: 'Plasma',
      },
      stateCorrectness: {
        ...STATE_CORRECTNESS.FRAUD_PROOFS,
        isIncomplete: true,
      },
      dataAvailability: {
        ...DATA_AVAILABILITY.PLASMA_OFF_CHAIN,
        isIncomplete: true,
      },
      operator: {
        ...OPERATOR.CENTRALIZED_OPERATOR,
        isIncomplete: true,
      },
      forceTransactions: {
        ...FORCE_TRANSACTIONS.WITHDRAW,
        isIncomplete: true,
      },
      exitMechanisms: [
        {
          ...EXITS.PLASMA,
          isIncomplete: true,
        },
      ],
      massExit: {
        name: 'The mass exit problem is unsolved',
        description:
          'In case the operator is malicious all users need to exit within a predetermined time frame. Users that do not manage to do this will lose their funds.',
        references: [],
        risks: [
          {
            category: 'Funds can be stolen if',
            text: 'users are unable to withdraw in a mass exit event.',
          },
        ],
        isIncomplete: true,
      },
      contracts: {
        addresses: [
          {
            name: 'EthVault',
            address: '0x3Eed23eA148D356a72CA695DBCe2fceb40a32ce0',
          },
          {
            name: 'Erc20Vault',
            address: '0x070cB1270A4B2bA53c81CeF89d0FD584Ed4F430B',
          },
          {
            name: 'ETHDepositVerifier',
            description: CONTRACTS.UNVERIFIED_DESCRIPTION,
            address: '0x649f37203c365DE759c8fc8CA35beBF5448F70Be',
          },
          {
            name: 'ERC20DepositVerifier',
            description: CONTRACTS.UNVERIFIED_DESCRIPTION,
            address: '0xD876aeb3a443FBC03B7349AAc115E9054563CD82',
          },
        ],
        risks: [CONTRACTS.UNVERIFIED_RISK],
      },
    },
    news: [
      {
        date: '2020-06-01',
        name: 'Scaling Ethereum with the OMG Network',
        link: 'https://omg.network/omg-network-scales-ethereum/',
      },
    ],

    // DEPRECATED ITEMS BELOW

    technologyName: 'Plasma',
    technologyDetails: 'More Viable Plasma',
    parameters: [
      {
        name: 'Primary use case',
        value: 'Payments',
      },
      {
        name: 'Hypothetical level of decentralization',
        value: 'High',
        sentiment: 'good',
      },
      {
        name: 'Current level of decentralization',
        value: 'Low',
        tooltip: 'Single operator. Supports decentralized watchers.',
        sentiment: 'warning',
      },
      {
        name: 'Can funds be stolen by the operator?',
        value: 'No',
        tooltip:
          'Users can safely exit to L1 even if the operator is malicious.',
        sentiment: 'good',
      },
      {
        name: 'Permisonless?',
        value: 'No',
        sentiment: 'bad',
        tooltip: 'Only operator can produce new blocks',
      },
      {
        name: 'Force TX mechanism?',
        value: 'Yes but only for withdrawals',
        sentiment: 'good',
      },
      {
        name: 'Privacy',
        value: 'No',
      },
      {
        name: 'Smart contracts',
        value: 'No',
      },
    ],
  },
}
