import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { SuppliersToolbar, SuppliersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const SupplierList = () => {
  const classes = useStyles();

  const [suppliers] = useState(mockData);

  return (
    <div className={classes.root}>
      <SuppliersToolbar />
      <div className={classes.content}>
        {/*<SuppliersTable suppliers={suppliers} />*/}
      </div>
    </div>
  );
};

export default SupplierList;
