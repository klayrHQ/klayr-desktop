/**
 * Converts the stakes object stored in Redux store
 * which looks like { validatorAddress: { confirmed, unconfirmed } }
 * into an array of objects that Klayr Element expects, looking like
 * [{ validatorAddress, amount }]
 *
 * @returns {Array} Array of stakes as Klayr Element expects
 */
const normalizeStakesForTx = (stakes) =>
  Object.keys(stakes)
    .filter((address) => stakes[address].confirmed !== stakes[address].unconfirmed)
    .map((validatorAddress) => ({
      validatorAddress,
      amount: (
        stakes[validatorAddress].unconfirmed - stakes[validatorAddress].confirmed
      ).toString(),
    }));

export default normalizeStakesForTx;
