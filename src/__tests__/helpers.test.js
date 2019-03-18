import { summaryDonations, summaryDonationMultiCurrency, sumIndividualDonations } from '../utils/helpers';

describe('Testing Helper Functions', function() {

  test('Function: summaryDonations - withData', function() {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test('Function: summaryDonations - withoutData', function() {
    expect(summaryDonations()).toEqual(0);
  });

  test('Function: summaryDonationMultiCurrency - withData', () => {
    const payments = [
      {
        charitiesId: 2,
        amount: 10,
        currency: 'THB',
        id: 1,
      },
      {
        charitiesId: 1,
        amount: 20,
        currency: 'THB',
        id: 2,
      },
      {
        charitiesId: 3,
        amount: 50,
        currency: 'USD',
        id: 3,
      },
      {
        charitiesId: 4,
        amount: 100,
        currency: 'THB',
        id: 4,
      },
      {
        charitiesId: 2,
        amount: 500,
        currency: 'USD',
        id: 5,
      },
      {
        charitiesId: 5,
        amount: 500,
        currency: 'THB',
        id: 6,
      },
    ];
    expect(summaryDonationMultiCurrency(payments)).toEqual({USD: 550, THB: 630});
  });

  test('Function: summaryDonationMultiCurrency - withoutData', function() {
    expect(summaryDonationMultiCurrency()).toEqual(null);
  });

  test('Function: sumIndividualDonations - withData', () => {
    const donations = [
      {
        charitiesId:2,
        amount:10,
        currency:'THB',
        id:1,
      },
      {
        charitiesId:2,
        amount:500,
        currency:'THB',
        id:5,
      },
    ];

    expect(sumIndividualDonations(donations)).toEqual({amount: 510, breakdown: '10, 500'});
  })

  test ('Function: sumIndividualDonations - withoutData', () => {
    expect(sumIndividualDonations()).toEqual(null);
  })

});
