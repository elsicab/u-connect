import * as ApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS, 
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT, 
    comment
});

export const deleteComment = commentId => ({
    type: DELETE_COMMENT, 
    commentId
})

export const fetchComments= () => dispatch => (
    ApiUtil.fetchComments()
        .then(comments => dispatch(receiveComments(comments)))
)

export const fetchComment = (commentId) => dispatch => (
    ApiUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
)

export const fetchUserComments = id => dispatch => (
    ApiUtil.fetchUserComments(id)
        .then(comments => dispatch(receiveComments(comments)))
)

export const createComment = formData => dispatch => (
    ApiUtil.createComment(formData)
        .then(comment => dispatch(receiveComment(comment)))
)

export const removeComment = commentId => dispatch => (
    ApiUtil.removeComment(commentId)
    .then(() => dispatch(deleteComment(commentId)))
)

export const editComment = comment => dispatch => (
    ApiUtil.editComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
)