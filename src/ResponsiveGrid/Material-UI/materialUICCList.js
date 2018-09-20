import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CorporateCard from '../CorporateCard/CorporateCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const CorporateCardsList = ({ classes, companies }) => {
  return (
    <section>
      <p>Confidential :) </p>
      <Grid container className={classes.root}>
        <Grid container spacing={24}>
          {companies.map((company) => (
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <CorporateCard name={company.name} score={company.score} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  );
};

const styles = (theme) => ({
  root: {
    flexGrow: 1
    // display: 'grid',
    // gridGap: '20px',
    // gridTemplateColumns:
    //   'repeat(4, minmax(200px, 1fr))',
    // [theme.breakpoints.up('md')]: {},
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'theme.palette.text.secondary'
  }
});

export default withStyles(styles)(CorporateCardsList);
