import * as ApiUtil from '../util/like_api_util'

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES, 
    likes
})

export const receiveLike = like => ({
    type: RECEIVE_LIKE, 
    like
});

export const deleteLike = likeId => ({
    type: DELETE_LIKE, 
    likeId
})

export const fetchLikes= () => dispatch => (
    ApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
)

export const fetchLike = (likeId) => dispatch => (
    ApiUtil.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)))
)

export const createLike = like => dispatch => (
    ApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
)

export const removeLike = likeId => dispatch => (
    ApiUtil.removeLike(likeId)
    .then(() => dispatch(deleteLike(likeId)))
)
