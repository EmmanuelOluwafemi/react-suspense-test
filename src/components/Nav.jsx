import React from 'react'
import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <StyledNav>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" to="/posts">Posts</NavLink>
        </StyledNav>
    )
}

export default Nav

const StyledNav = Styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: #fff;
        color: #170448;

        &.active, &:hover {
            background: #170448;
            color: #fff;
        }
    }
`