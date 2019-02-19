import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as CONSTANT from '../../constant';
import { connect } from 'react-redux';
import { fetchWorkersList } from '../../actions';

import styles from './Pagination.module.css';

export class Pagination extends Component {

  renderPrevButton = () => {
    const { page } = this.props;
    let className = `${styles['pagination-button']} ${styles['pagination-button-prev']}`;
    if (page === 1) {
      className += ` ${styles['pagination-button__disabled']}`;
    }

    return (
      <div
        className={className}
        onClick={page > 1 ? () => this.onPageClickHandler(page - 1) : null}
      >
        Prev
      </div>
    );
  }

  renderPages = () => {
    const { page, pagesCount } = this.props;

    let pagesList = new Array(pagesCount).fill(null).map((item, i) => i + 1);

    if (pagesCount > 7) {
      if (page <= 4) {
        pagesList = pagesList.slice(0, 5);
        pagesList.push('...');
        pagesList.push(pagesCount);
      } else if (page > 3 && page < pagesCount - 3) {
        pagesList = [];
        pagesList.push(1);
        pagesList.push('...');
        pagesList.push(page - 1, page, page + 1);
        pagesList.push('...');
        pagesList.push(pagesCount);
      } else if (page >= pagesCount - 3) {
        pagesList = pagesList.slice(pagesCount - 5);
        pagesList.unshift('...');
        pagesList.unshift(1);
      }
    }

    pagesList = pagesList.map((item, i) => {
      let className = styles['pagination-page'];
      if (item === page) {
        className += ` ${styles['pagination-page__active']}`;
      }

      if (item === '...') {
        return (
          <div
            key={i}
            className={styles['pagination-separator']}
          >
            ...
          </div>
        );
      }

      return (
        <div
          key={i}
          className={className}
          onClick={page !== item ? () => this.onPageClickHandler(item) : null}
        >
          {item}
        </div>
      );
    });

    return pagesList;
  }

  renderNextButton = () => {
    const { page, pagesCount } = this.props;
    let className = `${styles['pagination-button']} ${styles['pagination-button-next']}`;

    if (page === pagesCount) {
      className += ` ${styles['pagination-button__disabled']}`;
    }

    return (
      <div
        className={className}
        onClick={page < pagesCount ? () => this.onPageClickHandler(page + 1) : null}

      >
        Next
      </div>
    );
  }

  onPageClickHandler = (value) => {
    const { setPage, fetchWorkersList } = this.props;
    setPage(+value);

    setTimeout(() => fetchWorkersList(), 0);
  }

  render() {
    const { pagesCount } = this.props;

    if (!pagesCount || pagesCount <= 1) {
      return null;
    }

    return (
      <div className={styles['pagination-container']}>
        {this.renderPrevButton()}

        {this.renderPages()}

        {this.renderNextButton()}
      </div>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  fetchWorkersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const page = state[CONSTANT.PAGE];
  const pagesCount = state[CONSTANT.PAGE_COUNT];

  return (
    { page, pagesCount }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (value) => dispatch({type: CONSTANT.PAGE, payload: value}),
    fetchWorkersList: () => dispatch(fetchWorkersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
