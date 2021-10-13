import * as ApiUtil from '../util/connection_api_util'

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const RECEIVE_CONNECTION = "RECEIVE_CONNECTION";
export const DELETE_CONNECTION = "DELETE_CONNECTION";

export const receiveConnections = connections => ({
    type: RECEIVE_CONNECTIONS, 
    connections
})

export const receiveConnection = connection => ({
    type: RECEIVE_CONNECTION, 
    connection
});

export const deleteConnection = connectionId => ({
    type: DELETE_CONNECTION, 
    connectionId
})

export const fetchConnections= () => dispatch => (
    ApiUtil.fetchConnections()
        .then(connections => dispatch(receiveConnections(connections)))
)

export const fetchConnection = (connectionId) => dispatch => (
    ApiUtil.fetchConnection(connectionId)
        .then(connection => dispatch(receiveConnections(connection)))
)

export const createConnection = connection => dispatch => (
    ApiUtil.createConnection(connection)
        .then(connection => dispatch(receiveConnection(connection)))
)

export const removeConnection = connectionId => dispatch => (
    ApiUtil.removeConnection(connectionId)
    .then(() => dispatch(deleteConnection(connectionId)))
)
