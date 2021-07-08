import React from 'react'

import Styled, {keyframes} from 'styled-components'

export const SinglePost = ({ title, content }) => {
    return (
        <StyledPost>
            <h3>{title}</h3>
            <p>{content}</p>
        </StyledPost>
    )
}

export const PostPlaceholder = () => {
    return (
        <StyledPost className="placeholder">
            <div className="title-placeholder"></div>
            <div className="content-placeholder"></div>
            <div className="content-placeholder"></div>
            <div className="content-placeholder"></div>
        </StyledPost>
    )
}

const Animate = keyframes`
    from {
        opacity: .4;
    }

    to {
        opacity: 1;
    }
`

const StyledPost = Styled.div`
    width: 100%;
    padding: 1rem;
    background: #fef7f7;

    &.placeholder {
        width: 100%;
        padding: 1rem;
        background: #d8cccc;
        animation: ${Animate} .6s ease-in-out infinite;
    }
    
    h3 {
        font-weight: 700;
        font-size: 1.5rem;
        color: #000;
    }

    .title-placeholder {
        width: 50%;
        height: 1.5rem;
        background: #fff;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: #000;
        line-height: 1.5;
        margin-top: .8rem;
    }

    .content-placeholder {
        width: 80%;
        height: 1rem;
        background: #fff;
        margin-bottom: .5rem;
    }
`