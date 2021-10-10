export const fetchComments = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/comments"
    })
)

export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET', 
        url: `/api/comments/${commentId}`
    })
)

export const fetchUserComments = (id) => (
    $.ajax({
        method: 'GET', 
        url: `/api/comments/${id}`
    })
)

export const createComment = (comment) => (
    $.ajax({
        method: 'POST', 
        url: "/api/comments", 
        data: comment
    })
)

export const removeComment = (commentId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/comments/${commentId}`
    })
)

export const editComment = (comment) => (
     $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: comment
    })
)