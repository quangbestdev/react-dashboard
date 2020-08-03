import React from 'react';
import PropTypes from 'prop-types';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import { Typography, Box } from '@material-ui/core';

const ReportFilter = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography variant="h5">Date Range</Typography>
        <Typography variant="subtitle2">&nbsp;(100 days max)</Typography>
      </Box>
      <Box>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="left" spacing={2}>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
            <Grid item>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </Box>
    </Box>
  );
};

ReportFilter.propTypes = {
  className: PropTypes.string
};

export default ReportFilter;
