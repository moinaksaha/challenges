export const summaryDonations = (danations) => danations.reduce((accumulator, value) => (value) ? accumulator + value : accumulator);

export const summaryDonationMultiCurrency = (donations) => {
  const summary = donations.reduce(function (acc, curr) {
    if (curr.amount&& curr.charitiesId && curr.currency && curr.id) {
      if (typeof acc[curr.currency] == 'undefined') {
        acc[curr.currency] = curr.amount;
      } else {
        acc[curr.currency] += curr.amount;
      }
    }
    return acc;
  }, {});

  return summary;
}


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