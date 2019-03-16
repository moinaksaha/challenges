export const summaryDonations = (danations) => (
  danations.reduce((accumulator, value) => (accumulator + value))
);

export const sumIndividualDonations = (donations) => {
  if (donations && donations.length) {
    const sum = donations.reduce((acc, item) => (
      {
        amount: acc.amount + item.amount,
        breakdown: `${(acc.breakdown !== '')? `${acc.breakdown}, ${item.amount}`: `${item.amount}`}`, //${acc.breakdown}, ${item.amount}`,
      }
    ), {
      amount: 0,
      breakdown: '',
    })
    return sum;
  }
  return null;
}