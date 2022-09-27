import * as graph from '@microsoft/microsoft-graph-client'

function getAuthentetificatedClient(accessToken:any) {
    const client = graph.Client.init({
        authProvider:(done) => {
            done(null, accessToken.accessToken)
        }
    })
    return client
}


export async function getUserDetails(accessToken:any) {
    const client = getAuthentetificatedClient(accessToken)

    const user = await client.api('/me').get()
    return user
} 

export async function getUserEvents(accessToken:any) {
    const client = getAuthentetificatedClient(accessToken)

    const events = await client
    .api('/me/events')
    .get()
}