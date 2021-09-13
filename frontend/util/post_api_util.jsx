export const fetchPosts = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/posts"
    })
)

export const fetchPost = (postId) => (
    $.ajax({
        method: 'GET', 
        url: `/api/posts/${postId}`
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

export const removePost = (postId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/posts/${postId}`
    })
)

export const editPost = (formData) => (
     $.ajax({
        method: 'PATCH',
        url: `/api/posts/${formData.get('post[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })
)