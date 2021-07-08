import React, { Suspense, SuspenseList } from 'react'
import HomeHeader from '../components/HomeHeader'
import UserList from '../components/UsersList'

import { UserPlaceholder } from '../components/User'

const Home = () => {
    return (
        <>
            <SuspenseList revealOrder="forwards">
                <Suspense fallback="loading....">
                    <HomeHeader title='Users' />
                </Suspense>
                <Suspense 
                    fallback={
                        <>
                            <UserPlaceholder />
                            <UserPlaceholder />
                            <UserPlaceholder />
                        </>
                    }>
                    <UserList />
                </Suspense>
            </SuspenseList>
        </>
    )
}

export default Home;