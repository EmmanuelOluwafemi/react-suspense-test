export const fetchData = () => {
    const usersPromise = fetchUsers()
    const postPromise = fetchPosts()

    return {
        users: wrapPromise(usersPromise),
        posts: wrapPromise(postPromise)
    }
}

const wrapPromise = (promise) => {
    // set initial status
    let status = 'pending'

    // store result
    let result

    // wait for promise
    let suspender = promise.then(
        res => {
            status = 'success'
            result = res
        },
        err => {
            status= 'error'
            result = err
        }
    )

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            } else if (status === 'success') {
                return result
            }
        }
    }
}


const fetchUsers = () => {
    console.log('Fetching Users data....')

    return fetch('https://jsonplaceholder.typicode.com/users?_Limit=25')
    .then(response => response.json())
    .then(json => json)
}

const fetchPosts = () => {
    console.log('Fetching Users data....')

    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=25')
    .then(response => response.json())
    .then(json => json)
}