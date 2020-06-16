/* eslint-disable react/require-default-props */
/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '../../../Components/CustomField/TextField';

const styles = {
  container: {
    padding: '10px 50px 40px',
  },
  title: {
    textAlign: 'center',
  },
  field: {
    marginBottom: 24,
  },
  btn: {
    textAlign: 'center',
  },
};

let AddCustomerForm = ({ classes, handleSubmit }) => {
  return (
    <Container>
      <Paper variant="outlined" className={classes.container}>
        <h2 className={classes.title}>Đăng ký khách hàng</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs>
              <div className={classes.field}>
                <Field
                  name="username"
                  component={TextField}
                  required
                  label="Nhập username"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className={classes.field}>
                <Field
                  name="email"
                  component={TextField}
                  required
                  type="email"
                  label="Nhập email"
                  fullWidth
                  variant="outlined"
                />
              </div>
              <div className={classes.field}>
                <Field
                  name="password"
                  component={TextField}
                  required
                  label="Nhập password"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs>
              <div className={classes.field}>
                <Field
                  name="fullname"
                  component={TextField}
                  required
                  fullWidth
                  label="Nhập họ và tên"
                  variant="outlined"
                />
              </div>
              <div className={classes.field}>
                <Field
                  name="phone"
                  component={TextField}
                  required
                  type="number"
                  fullWidth
                  label="Nhập SĐT"
                  variant="outlined"
                />
              </div>
              <div className={classes.field}>
                <Field
                  name="address"
                  component={TextField}
                  required
                  fullWidth
                  label="Nhập địa chỉ"
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>
          <div className={classes.btn}>
            <Button type="submit" variant="contained" color="primary">
              Thêm
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

AddCustomerForm = reduxForm({
  form: 'addCustomer',
})(AddCustomerForm);

AddCustomerForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func,
};

export default withStyles(styles)(AddCustomerForm);
