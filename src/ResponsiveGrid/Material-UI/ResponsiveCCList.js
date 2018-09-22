import React, { Fragment } from 'react';
import CorporateCard from '../CorporateCard/CorporateCard';
import classNames from 'classnames';
import { Card, CardContent, Grid, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  cardContent: {
    flexGrow: 1,
    paddingTop: '10%'
  }
});

const CorporateCardsList = ({ classes, companies }) => {
  return (
    <Fragment>
      <main>
        <p>Confidential :)</p>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {companies.map((company) => (
              <Grid item key={company} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CorporateCard name={company.name} score={company.score} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </Fragment>
  );
};

export default withStyles(styles)(CorporateCardsList);
