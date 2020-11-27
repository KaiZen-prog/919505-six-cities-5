import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {toggleOffersSortPanel, changeOffersSort} from "../../store/actions";
import {SortingTypes} from "../../const";

const OffersSort = (props) => {
  const {isOffersSortOpened, currentOffersSort, togglePanel, onOffersSortChange} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          togglePanel(isOffersSortOpened);
        }}
      >
        {currentOffersSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={isOffersSortOpened
          ? `places__options places__options--custom places__options--opened`
          : `places__options places__options--custom places__options--closed`}
      >
        <li
          className={`places__option ${currentOffersSort === SortingTypes.POPULAR && `places__option--active`}`}
          tabIndex="0"
          onClick={() => {
            onOffersSortChange(SortingTypes.POPULAR);
          }}
        >
          {SortingTypes.POPULAR}
        </li>
        <li
          className={`places__option ${currentOffersSort === SortingTypes.LOW_TO_HIGH && `places__option--active`}`}
          tabIndex="0"
          onClick={() => {
            onOffersSortChange(SortingTypes.LOW_TO_HIGH);
          }}
        >
          {SortingTypes.LOW_TO_HIGH}
        </li>
        <li
          className={`places__option ${currentOffersSort === SortingTypes.HIGH_TO_LOW && `places__option--active`}`}
          tabIndex="0"
          onClick={() => {
            onOffersSortChange(SortingTypes.HIGH_TO_LOW);
          }}
        >
          {SortingTypes.HIGH_TO_LOW}
        </li>
        <li
          className={`places__option ${currentOffersSort === SortingTypes.TOP_RATED_FIRST && `places__option--active`}`}
          tabIndex="0"
          onClick={() => {
            onOffersSortChange(SortingTypes.TOP_RATED_FIRST);
          }}
        >
          {SortingTypes.TOP_RATED_FIRST}
        </li>
      </ul>
    </form>
  );
};

OffersSort.propTypes = {
  isOffersSortOpened: PropTypes.bool.isRequired,
  currentOffersSort: PropTypes.string.isRequired,
  togglePanel: PropTypes.func.isRequired,
  onOffersSortChange: PropTypes.func.isRequired
};

const mapStateToProps = ({APP_PROCESS}) => ({
  isOffersSortOpened: APP_PROCESS.isOffersSortOpened,
  currentOffersSort: APP_PROCESS.currentOffersSort
});

const mapDispatchToProps = (dispatch) => ({
  togglePanel(isOpened) {
    dispatch(toggleOffersSortPanel(isOpened));
  },

  onOffersSortChange(sort) {
    dispatch(changeOffersSort(sort));
  }
});

export {OffersSort};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSort);
