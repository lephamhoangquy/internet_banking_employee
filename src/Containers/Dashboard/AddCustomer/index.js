/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reset, SubmissionError } from 'redux-form';
import AddCustomerForm from './form';
import { createCustomer } from '../../../Actions';

const Register = ({ addCustomer, customer, resetForm }) => {
  const submit = (values) => {
    const { password, phone, fullname, address } = values;
    if (password.length < 8) {
      throw new SubmissionError({ password: 'Password phải trên 8 ký tự' });
    }
    if (phone.length < 9 || phone.length > 11) {
      throw new SubmissionError({ phone: 'SĐT không đúng' });
    }
    if (fullname.length < 6) {
      throw new SubmissionError({ fullname: 'Họ và tên phải trên 6 ký tự' });
    }
    if (address.length < 6) {
      throw new SubmissionError({ address: 'Địa chỉ phải trên 6 ký tự' });
    }
    addCustomer(values);
  };

  useEffect(() => {
    if (customer.isRegister === true) {
      alert('Thêm thành công');
      resetForm('addCustomer');
    } else if (customer.isRegister === false) {
      alert('Thêm thất bại email đã được sử dụng');
      resetForm('addCustomer');
    }
  });

  return (
    <>
      <AddCustomerForm onSubmit={submit} />;
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCustomer: (body) => {
      dispatch(createCustomer(body));
    },
    resetForm: (name) => {
      dispatch(reset(name));
    },
  };
};

Register.propTypes = {
  addCustomer: PropTypes.func,
  customer: PropTypes.instanceOf(Object),
  resetForm: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
