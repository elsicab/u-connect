export const fetchProfile = (id) => (
    $.ajax({
        method: 'Get',
        url: `/api/profiles/${id}`
    })
)

export const createProfile = (profile) => (
    $.ajax({
        method: 'POST',
        url: "/api/profiles",
        data: profile
    })
)

export const editProfile = (profile) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/profiles/${profile.id}`,
        data: profile
    })
)