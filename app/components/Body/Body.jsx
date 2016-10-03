import styles from './_Body.scss';
import React from 'react';
import Footer from '../Footer/Footer';

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.body}>
        <Footer />
      </div>
    );
  }
}
