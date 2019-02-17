import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as CONSTANT from '../../constant';
import { fetchWorkersList } from '../../actions';

import styles from './WokersTable.module.css';

class WokersTable extends Component {
  componentDidMount() {
    this.props.fetchWorkersList();
  }

  renderWorkers = () => {
    const { workersList } = this.props;

    const result = workersList.map( ({_id, firstName, lastName}, i) => {
      return (
        <div
          key={_id}
          className={styles['item-container']}
        >
          <div className={styles['item-counter']}>
            {i+1}
          </div>
          <div className={styles['item-cell']}>
            {firstName}
          </div>
          <div className={styles['item-cell']}>
            {lastName}
          </div>

          <div className={styles['item-edit']}>
            edit
          </div>
          <div className={styles['item-remove']}>
            remove
          </div>
        </div>
      );
    });

    return result;
  }

  render() {
    return (
      <div className={styles['table-wrapper']}>
        {this.renderWorkers()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const workersList = state[CONSTANT.WORKERS_LIST];

  return (
    { workersList }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCreateWorkerModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'CreateWorkerModal' }),
    fetchWorkersList: () => dispatch(fetchWorkersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WokersTable);
