/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Filter from './Filter';
import Search from '../ChargeMoney/formSearch';
import HeadList from './HeadTable';
import TransactionItem from './TransactionItem';
import { fetchTransaction } from '../../../Actions';
import TransacionList from '../../../Components/Dashboard/TableBody';

const styles = {
  table: {
    width: '96%',
    marginLeft: 20,
  },
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
};

const TransactionHistory = ({ classes, getTransaction, transaction }) => {
  const [accNumber, setAccNumber] = useState(null);
  const [page, setPage] = useState(1);
  const onSearch = (values) => {
    const { account_number } = values;
    setAccNumber(account_number);
    getTransaction(account_number, page);
  };

  const onFilter = (values) => {
    console.log('values: ', values);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (accNumber !== null) {
      getTransaction(accNumber, page);
    }
  }, [page]);

  const { total, items } = transaction;

  return (
    <div>
      <Search onSubmit={onSearch} />
      <Filter onSubmit={onFilter} />
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <HeadList />
          <TransacionList>
            {Array.isArray(items) &&
              items.map((tran, index) => (
                <TransactionItem
                  key={tran.id}
                  index={index + 1}
                  transaction={tran}
                  accNumber={accNumber}
                />
              ))}
          </TransacionList>
        </Table>
      </TableContainer>
      <div className={classes.pagination}>
        <Pagination count={Math.ceil(total / 10)} onChange={handleChangePage} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTransaction: (accNumber, page) => {
      dispatch(fetchTransaction(accNumber, page));
    },
  };
};

TransactionHistory.propTypes = {
  classes: PropTypes.instanceOf(Object),
  getTransaction: PropTypes.func,
  transaction: PropTypes.instanceOf(Object),
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(TransactionHistory);
