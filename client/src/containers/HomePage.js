import React, { Component } from 'react'
import PortalModal from '../modals/PortalModal';
import CustomButton from '../components/custom-button/CustomButton';
import WokersTable from '../components/wokers-table/WokersTable';

import { connect } from 'react-redux';
import * as CONSTANT from '../constant';

class HomePage extends Component {

  render() {
    const { openCreateWorkerModal } = this.props;

    return (
      <div>
        <CustomButton
          text="add worker"
          clickHandler={openCreateWorkerModal}
        />

        <WokersTable />

        <PortalModal />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openCreateWorkerModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'CreateWorkerModal' }),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
