export const summaryDonations = (donations) => {
  if (donations && donations.length) {
    return donations.reduce((accumulator, value) => (value) ? accumulator + value : accumulator);
  }
  return 0;
}

export const summaryDonationMultiCurrency = (donations) => {

  if (donations && donations.length) {
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

  return null;
  
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