import React from 'react';

import Styled, {keyframes} from 'styled-components'


export const User = ({ imgUrl, name, email }) => {
    return (
        <StyledUser>
            <div className="user-details">
                <img src={imgUrl} alt={name} />
                <div className="user-name">{name}</div>
            </div>
            <div className="user-email">{email}</div>
        </StyledUser>
    )
}

export const UserPlaceholder = () => (
    <StyledUser className="placeholder">
        <div className="user-details">
            <div className="img-placeholder"></div>
            <div className="user-name placeholder" />
        </div>
        <div className="user-email placeholder" />
    </StyledUser>
)

const Animate = keyframes`
    from {
        opacity: .4;
    }

    to {
        opacity: 1;
    }
`

const StyledUser = Styled.div`
    width: 100%;
    padding: 1.5rem 1rem;
    margin: .8rem 0; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff8f8;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    &.placeholder {
        animation: ${Animate} .6s ease-in-out infinite;
    }

    &:hover {
        background: #f5ecec;
    }

    .user-details {
        display: flex;
        align-items: center;

        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        .img-placeholder {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #efdfdf;
        }

        .user-name {
            font-size: 1rem;
            font-weight: 500;
            color: #000;
            margin-left: 1rem;

            &.placeholder {
                width: 100px;
                height: 1.2rem;
                background: #efdfdf;
            }
        }
    }

    .user-email {
        font-size: 1rem;
        font-weight: 400;
        color: #000;

        @media (max-width: 768px) {
            margin-top: .8rem;
        }

        &.placeholder {
            width: 80px;
            height: 1.2rem;
            background: #efdfdf;
        }
    }
`