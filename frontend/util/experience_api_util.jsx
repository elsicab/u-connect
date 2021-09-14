export const fetchExperiences = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/experiences"
    })
)

export const createExperience = (experience) => (
    $.ajax({
        method: 'POST', 
        url: '/api/experiences', 
        data: experience
    })
)

export const deleteExperience = (experienceId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/experiences/${experienceId}`
    })
)

export const editExperience = (experience) => (
    $.ajax({
        method: 'PATCH', 
        url: `/api/experiences/${experience.id}`,
        data: experience
    })
)