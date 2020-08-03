import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import SaveIcon from '@material-ui/icons/Save';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Box
} from '@material-ui/core';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    '@media print': {
      '& .actionButtons': {
        display: 'none'
      },
      '& td': {
        color: 'black !important'
      }
    }
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  summaryTable: {
    width: 'auto',
    margin: theme.spacing(2, 0)
  },
  noBorder: {
    border: 'none'
  },
  denseCell: {
    padding: theme.spacing(1, 2, 1, 2)
  },
  coloredRow: {
    '&.green td': { color: 'green' },
    '&.purple td': { color: 'purple' }
  }
}));

const statusColors = {
  pending: 'green',
  completed: 'purple'
};

const ReportFilter = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [data] = useState(mockData);
  const componentRef = useRef();
  return (
    <Box>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
        ref={componentRef}>
        <CardHeader
          action={
            <Box top="8px" right="8px" className={'actionButtons'}>
              <IconButton aria-label="save">
                <SaveIcon />
              </IconButton>
              <IconButton aria-label="download">
                <GetAppIcon />
              </IconButton>
              <ReactToPrint
                trigger={() => (
                  <IconButton aria-label="print">
                    <PrintIcon />
                  </IconButton>
                )}
                content={() => componentRef.current}
              />
            </Box>
          }
          title="Report Name"
          titleTypographyProps={{ variant: 'h2' }}
        />
        <Divider />
        <CardContent className={classes.content}>
          <Table className={classes.summaryTable}>
            <TableBody>
              <TableRow>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  Date Range
                </TableCell>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  01/04/2016 - 30/04/2016
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  Project
                </TableCell>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  All Projects
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  People
                </TableCell>
                <TableCell
                  className={clsx(classes.noBorder, classes.denseCell)}>
                  Spencer Kelly, Thomas Hobson
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Divider />
          <Box m={2}>
            <Typography variant="h4">Total Hours: 19</Typography>
          </Box>
          <Divider />
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell>Todo List</TableCell>
                    <TableCell>Todo</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell>Assigned</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>Hours</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(item => (
                    <TableRow
                      hover
                      key={item.id}
                      className={clsx(
                        classes.coloredRow,
                        statusColors[item.status]
                      )}>
                      <TableCell>{item.project}</TableCell>
                      <TableCell>{item.todoList}</TableCell>
                      <TableCell>{item.todo}</TableCell>
                      <TableCell>{item.note}</TableCell>
                      <TableCell>{item.assigned}</TableCell>
                      <TableCell>{item.completed}</TableCell>
                      <TableCell>{item.hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}></CardActions>
      </Card>
    </Box>
  );
};

ReportFilter.propTypes = {
  className: PropTypes.string
};

export default ReportFilter;
