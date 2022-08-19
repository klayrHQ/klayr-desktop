import * as common from 'src/modules/common/mocks';
import * as blocks from '@block/mocks';
import * as network from '@network/mocks';
import * as transaction from '@transaction/mocks';

export default [
  ...Object.values(common),
  ...Object.values(blocks),
  ...Object.values(network),
  ...Object.values(transaction),
];
