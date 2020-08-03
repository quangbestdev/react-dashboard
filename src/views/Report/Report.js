import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';

import { ReportPage, ReportFilter } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="column"
      alignItems="center">
      <Grid container justify="center">
        <Grid item sm={12}>
          <ReportFilter />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item sm={12}>
          <ReportPage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
