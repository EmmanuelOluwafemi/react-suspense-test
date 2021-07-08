import React, { Suspense, SuspenseList } from 'react'
import Styled from 'styled-components'

import HomeHeader from '../components/HomeHeader'
import PostLists from '../components/PostLists'
import { PostPlaceholder } from '../components/SinglePost'

const Posts = () => {

    return (
        <>
            <SuspenseList revealOrder="forwards">
                <HomeHeader title="Posts" post />
                <Suspense 
                    fallback={
                        <Grid>
                            <PostPlaceholder />
                            <PostPlaceholder />
                            <PostPlaceholder />
                            <PostPlaceholder />
                            <PostPlaceholder />
                            <PostPlaceholder />
                        </Grid>
                    }
                >
                    <PostLists />
                </Suspense>
            </SuspenseList>
        </>
    )
}

export default Posts

const Grid = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .7rem;
`