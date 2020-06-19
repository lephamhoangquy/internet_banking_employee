/* eslint-disable react/require-default-props */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Charge from './formCharge';
import { formatter } from '../../../Helpers/ToCurrency';

const styles = {
  content: {
    marginTop: 30,
    padding: 20,
  },
  btnCharge: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: 20,
    margin: '0 40px 20px',
  },
  row: {
    display: 'flex',
    borderBottom: '1px dotted #ccc',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  label: {
    position: 'relative',
    right: 10,
    fontWeight: 'bold',
  },
};

const InfoCustomer = ({
  customer,
  isOpenCharge,
  setOpenCharge,
  onCharge,
  classes,
}) => {
  return (
    <Container>
      <Paper className={classes.content}>
        <h3 className={classes.title}>Thông tin tài khoản</h3>
        <div className={classes.info}>
          <div className={classes.row}>
            <div className={classes.label}>Họ và tên: </div>
            <div>{customer.fullname}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Email: </div>
            <div>{customer.email}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>SĐT: </div>
            <div>{customer.phone}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Địa chỉ: </div>
            <div>{customer.address}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>STK: </div>
            <div>{customer.account_number}</div>
          </div>
          <div className={classes.row}>
            <div className={classes.label}>Số dư: </div>
            <div>{formatter.format(customer.account_balance)}</div>
          </div>
        </div>
        <div className={classes.btnCharge}>
          <Button
            onClick={() => setOpenCharge(true)}
            variant="contained"
            color="primary"
            type="button"
          >
            Nạp tiền
          </Button>
        </div>
      </Paper>
      <Charge
        onSubmit={onCharge}
        open={isOpenCharge}
        handleClose={setOpenCharge}
      />
    </Container>
  );
};

InfoCustomer.propTypes = {
  classes: PropTypes.instanceOf(Object),
  isOpenCharge: PropTypes.bool,
  setOpenCharge: PropTypes.func,
  onCharge: PropTypes.func,
  customer: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(InfoCustomer);
