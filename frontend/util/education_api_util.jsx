export const fetchEducations = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/educations"
    })
)

export const createEducation = (education) => (
    $.ajax({
        method: 'POST', 
        url: '/api/educations', 
        data: education
    })
)

export const deleteEducation = (educationId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/educations/${educationId}`
    })
)

export const editEducation = (education) => (
    $.ajax({
        method: 'PATCH', 
        url: `/api/educations/${education.id}`,
        data: education
    })
)