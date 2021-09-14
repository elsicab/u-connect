export const fetchUser = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
)

export const editUser = (formData) => (
     $.ajax({
        method: 'PATCH',
        url: `/api/users/${formData.get('user[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })
)