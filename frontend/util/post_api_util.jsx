export const fetchPosts = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/posts"
    })
)

export const fetchUserPosts = (id) => (
    $.ajax({
        method: 'GET', 
        url: `/api/posts/${id}`
    })
)

export const createPost = (formData) => (
    $.ajax({
        method: 'POST', 
        url: "/api/posts", 
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deletePost = (postId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/posts/${postId}`
    })
)