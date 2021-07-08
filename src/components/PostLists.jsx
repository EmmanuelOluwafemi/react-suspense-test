import React from 'react'

import Styled from 'styled-components'

import { fetchData } from '../Api'
import {SinglePost} from './SinglePost'

const resource = fetchData()

const PostLists = () => {

    const posts = resource.posts.read()

    return (
        <StyledList>
            {
                posts.map(({ title, id, body }) => (
                    <SinglePost 
                        key={id}
                        title={title}
                        content={body}
                    />
                ))
            }
        </StyledList>
    )
}

export default PostLists

const StyledList = Styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .7rem;
`