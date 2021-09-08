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

export const createPost = (post) => (
    $.ajax({
        method: 'POST', 
        url: "/api/posts", 
        data: { post }
    })
)