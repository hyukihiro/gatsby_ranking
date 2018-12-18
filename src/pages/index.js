import React from 'react';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Button from '../components/button';

import { countup, countdown } from '../actions/countup';

const IndexPage = props => {
  console.log(props);
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Link to="/page-2/">Go to page 2</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button onCountUp={props.countup} onCountDown={props.countdown} />
      <p>{props.counter}</p>
    </Layout>
  );
};

const mapStateToProps = state => ({
  counter: state.countup.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  countup,
  countdown
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
