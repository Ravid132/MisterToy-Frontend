import { reviewService } from '../services/review.service';

export function loadReviews(filterBy) {
  return async (dispatch) => {
    try {
      const reviews = await reviewService.query(filterBy);

      dispatch({ type: 'SET_REVIEWS', reviews });
    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err);
    }
  };
}

export function addReview(review) {
  return async (dispatch) => {
    try {
      const addedReview = await reviewService.add(review);
      dispatch({ type: 'ADD_REVIEW', review: addedReview });
      return addedReview;
    } catch (err) {
      console.log('ReviewActions: err in addReview', err);
    }
  };
}

export function removeReview(reviewId) {
  return async (dispatch) => {
    try {
      console.log(`reviewId`, reviewId);
      await reviewService.remove(reviewId);
      dispatch({ type: 'REMOVE_REVIEW', reviewId });
    } catch (err) {
      console.log('ReviewActions: err in removeReview', err);
    }
  };
}
