export const fetchConnections = () => (
    $.ajax({
        method: 'GET', 
        url: "/api/connections"
    })
)

export const fetchConnection = (connectionId) => (
    $.ajax({
        method: 'GET', 
        url: `/api/connections/${connectionId}`
    })
)

export const createConnection = (connection) => (
    $.ajax({
        method: 'POST', 
        url: "/api/connections", 
        data: connection
    })
)

export const removeConnection = (connectionId) => (
    $.ajax({
        method: 'DELETE', 
        url: `/api/connections/${connectionId}`
    })
)
