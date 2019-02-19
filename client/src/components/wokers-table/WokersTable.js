import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import * as CONSTANT from '../../constant';
import { fetchWorkersList, sendRemoveWorkerAttempt } from '../../actions';
import PropTypes from 'prop-types';

import styles from './WokersTable.module.css';

class WokersTable extends Component {
  componentDidMount() {
    this.props.fetchWorkersList();
  }

  renderWorkers = () => {
    const { workersList, sendRemoveWorkerAttempt, openEditWorkerModal } = this.props;

    if(workersList.length === 0 ) return <div>No results...</div>

    const cellTitle = {
      _id: 'title',
      firstName: 'First name',
      lastName: 'Last name',
      gender: 'Gender',
      contactInformation: 'Contact information',
      salary: 'Salary',
      position: 'Position'
    }

    const newWorkersList = [cellTitle, ...workersList];

    const result = newWorkersList.map( (item, i) => {
      const {_id, firstName, lastName, gender, contactInformation, salary, position } = item;
      return (
        <div
          key={_id}
          className={styles['item-container']}
        >
          <div className={styles['item-counter']}>
            {i || 'N'}
          </div>
          <div className={styles['item-cell']}>
            {firstName}
          </div>
          <div className={styles['item-cell']}>
            {lastName}
          </div>
          <div className={styles['item-cell']}>
            {gender}
          </div>
          <div className={styles['item-cell']}>
            {contactInformation}
          </div>
          <div className={styles['item-cell']}>
            {salary}
          </div>
          <div className={styles['item-cell']}>
            {position}
          </div>

          <div className={styles['item-edit']}>
            {!i || (
              <CustomButton
                text="edit"
                clickHandler={() => openEditWorkerModal(item)}
              />
            )}
          </div>
          <div className={styles['item-remove']}>
            {!i || (
              <CustomButton
                text="remove"
                clickHandler={() => sendRemoveWorkerAttempt(_id)}
              />
            )}
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

WokersTable.propTypes = {
  workersList: PropTypes.array.isRequired,
  openCreateWorkerModal: PropTypes.func.isRequired,
  openEditWorkerModal: PropTypes.func.isRequired,
  fetchWorkersList: PropTypes.func.isRequired,
  sendRemoveWorkerAttempt: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const workersList = state[CONSTANT.WORKERS_LIST];

  return (
    { workersList }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCreateWorkerModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'CreateWorkerModal' }),
    openEditWorkerModal: (item) => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'EditWorkerModal', item }),
    fetchWorkersList: () => dispatch(fetchWorkersList()),
    sendRemoveWorkerAttempt: (id) => dispatch(sendRemoveWorkerAttempt(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WokersTable);
