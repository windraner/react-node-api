import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as CONSTANT from '../../constant';
import { connect } from 'react-redux';
import { fetchWorkersList } from '../../actions';

import styles from './SearchInput.module.css';

export class SearchInput extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: props.query
    };
    this.myRef = React.createRef();
  }

  onChangeHandler = (value) => {
    this.setState({ inputValue: value });
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        this.myRef.current.blur();
        e.preventDefault();
        break;

      default:
        break;
    }
  }

  blurHandler = (e) => {
    const { setQuery, fetchWorkersList } = this.props;

    setQuery(e.target.value.trim());
    setTimeout(() => fetchWorkersList(), 0);
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          ref={this.myRef}
          value={inputValue}
          onChange={(e) => this.onChangeHandler(e.target.value)}
          onBlur={(e) => this.blurHandler(e)}
          onKeyDown={this.handleKeyDown}
          className={styles['filter-input']}
          placeholder="Search..."
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  fetchWorkersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const query = state[CONSTANT.QUERY];

  return (
    { query }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuery: (value) => dispatch({type: CONSTANT.QUERY, payload: value}),
    fetchWorkersList: () => dispatch(fetchWorkersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
