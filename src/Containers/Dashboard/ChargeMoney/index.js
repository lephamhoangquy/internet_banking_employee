/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './formSearch';
import InfoCustomer from './infoCustomer';
import { findCustomerByAcc, chargeMoneyByAccNumber } from '../../../Actions';

const Charge = ({ findCustomer, customer, chargeMoney }) => {
  const [isOpenCharge, setOpenCharge] = useState(false);
  const [accNumber, setAccNumber] = useState(null);

  const onSearch = (values) => {
    const { account_number } = values;
    findCustomer(account_number);
    setAccNumber(account_number);
  };

  const onCharge = (values) => {
    const { amount } = values;
    chargeMoney(accNumber, amount);
    setOpenCharge(false);
  };

  return (
    <div>
      <Search isOpenCharge={isOpenCharge} onSubmit={onSearch} />
      {customer.isFind && (
        <InfoCustomer
          customer={customer}
          onCharge={onCharge}
          isOpenCharge={isOpenCharge}
          setOpenCharge={setOpenCharge}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    findCustomer: (accNumber) => {
      dispatch(findCustomerByAcc(accNumber));
    },
    chargeMoney: (accNumber, amount) => {
      dispatch(chargeMoneyByAccNumber(accNumber, amount));
    },
  };
};

Charge.propTypes = {
  findCustomer: PropTypes.func,
  customer: PropTypes.instanceOf(Object),
  chargeMoney: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Charge);
