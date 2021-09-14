export const fetchProfile = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/profiles/${userId}`
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

export const fetchProfiles = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/profiles"
    })
)