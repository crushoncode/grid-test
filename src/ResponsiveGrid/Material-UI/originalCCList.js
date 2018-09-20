import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CorporateCard from '../CorporateCard/CorporateCard';

const CorporateCardsList = ({ classes, companies }) => {
  return (
    <Fragment>
      <p>confidential :)</p>
      <section className={classes.root}>
        {companies.map((company) => (
          <CorporateCard name={company.name} score={company.score} />
        ))}
      </section>
    </Fragment>
  );
};

const styles = (theme) => ({
  root: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(4, minmax(200px, 1fr))',
    [theme.breakpoints.up('md')]: {}
  }
});

export default withStyles(styles)(CorporateCardsList);
