import { httpService } from './http.service';

export const reviewService = {
  add,
  query,
  remove,
};

async function query(filterBy) {
  var queryStr = !filterBy
    ? ''
    : `?userId=${
        filterBy.hasOwnProperty('userId') ? filterBy.userId : ''
      }&toyId=${filterBy.hasOwnProperty('toyId') ? filterBy.toyId : ''}`;
  const reviews = await httpService.get(`review${queryStr}`);
  return reviews;
}

async function remove(reviewId) {
  return await httpService.delete(`review/${reviewId} `);
}
async function add(review) {
  const addedReview = await httpService.post(`review`, review);

  return addedReview;
}
