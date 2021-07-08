import React from 'react'

import Styled from 'styled-components'

// icon
import { FaUsers } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';

const HomeHeader = ({title, post}) => {
    return (
        <StyledHeader>
            {
                post ?
                <BsFilePost className="icon" />:
                <FaUsers className="icon" />
            }
            {title}
        </StyledHeader>
    )
}

export default HomeHeader

const StyledHeader = Styled.div`
    width: 100%;
    padding: 2rem 1.5rem;
    font-size: 2.5rem;
    font-weight: 700;
    background: #170448;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        font-size: 4rem;
        color: #fff;
        margin-right: 1rem;
    }
`