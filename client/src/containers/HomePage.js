import React, { Component } from 'react'
import PortalModal from '../modals/PortalModal';
import SearchInput from '../components/search-input/SearchInput';
import CustomButton from '../components/custom-button/CustomButton';
import WokersTable from '../components/wokers-table/WokersTable';
import Pagination from '../components/pagination/Pagination';
import { connect } from 'react-redux';
import * as CONSTANT from '../constant';
import PropTypes from 'prop-types';

import styles from '../common.module.css';

class HomePage extends Component {

  render() {
    const { openCreateWorkerModal } = this.props;

    return (
      <div>
        <div className={styles['home-header']}>
          <SearchInput />

          <CustomButton
            text="add worker"
            clickHandler={openCreateWorkerModal}
          />
        </div>

        <WokersTable />

        <Pagination />

        <PortalModal />
      </div>
    )
  }
}

HomePage.propTypes = {
  openCreateWorkerModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCreateWorkerModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'CreateWorkerModal' }),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
