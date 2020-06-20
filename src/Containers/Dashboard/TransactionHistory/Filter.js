/* eslint-disable react/require-default-props */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Checkbox from '../../../Components/CustomField/Checkbox';

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btn: {
    marginTop: 25,
  },
  filter: {
    marginTop: 14,
  },
  title: {
    fontWeight: 'bold',
  },
  field: {
    marginTop: 4,
  },
};

let FilterForm = ({ classes, handleSubmit }) => {
  // const handleChange = (e) => {
  //   console.log('e.target: ', e.target);
  // };
  return (
    <Container className={classes.filter}>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.title}>
            <p>Chọn tiêu chí:</p>
          </div>
          <div className={classes.field}>
            <Field
              name="isReceive"
              component={Checkbox}
              label="Nhận tiền"
              color="primary"
              // onChange={handleChange}
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isSender"
              component={Checkbox}
              label="Chuyển tiền"
              color="secondary"
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isRemind"
              component={Checkbox}
              label="Nhắc nợ"
              color="primary"
            />
          </div>
          <div className={classes.field}>
            <Field
              name="isBeRemind"
              component={Checkbox}
              label="Bị Nhắc nợ"
              color="secondary"
            />
          </div>
          {/* <div>
            <button type="submit">xxxx</button>
          </div> */}
        </form>
      </Paper>
    </Container>
  );
};

FilterForm = reduxForm({
  form: 'filterTransaction',
})(FilterForm);

FilterForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleSubmit: PropTypes.func,
};

export default withStyles(styles)(FilterForm);
