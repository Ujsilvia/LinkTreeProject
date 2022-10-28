import styled from 'styled-components';

export const ProfileStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 100%;
        height: 88px;
        gap: 24px;
        position: relative;
        border-radius: 275px;
        isolation: isolate;

        #profile__img {
            width: 88px;
            height: 88px;
            border-radius: 275px;
        }
`

export const ProfileTextStyle = styled.div`

        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        text-align: center;

        /* Gray/900 */

        color: #101828;
`

export const SlackStyle = styled.p`
display: inline;

`