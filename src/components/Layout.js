import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import DashboardAppBar from './DashboardAppBar';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <React.Fragment>
        <Helmet
          title="Chad Chapman Interesting Technology Musings"
          meta={[
            { name: 'description', content: 'Technology Blog' },
            { name: 'keywords', content: 'Software, Technology, Chad, Chapman,' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <DashboardAppBar/>
        <div
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: isRoot ? `1.45rem 1.0875rem` : `1rem 0.75rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: isRoot ? `2.5rem` : `2rem` }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Interesting Musings
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
