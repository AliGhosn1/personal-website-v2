import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defaultButtonCss = css`
    color: rgb(255, 50, 10);
    font-size: 60px;
    text-decoration: none;
    margin-top: 1em;
    display: inline-block;
    font-weight: bold;
    padding: .5em;
    margin-left: -.5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid rgb(255, 50, 10);
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover{
        color: rgb(12, 235, 179);
    }

    &:hover:before {
        transform: scaleX(0.3);
        border-color: rgb(12, 235, 179);

    }

    &:hover:after {
        transform: translateX(0);
        border-color: rgb(12, 235, 179);
    }
    
    // display: block;
    // padding: 10px;
    // border-radius: 10px;
    // text-decoration: none;
    // font-size: 60px;
    // color: rgb(255, 50, 10);
    // transition: all 0.5s ease-in-out; 

    // &:hover{
    //     transition: all 0.5s ease-in-out; 
    //     color: rgb(12, 235, 179);
    // }
`

export const HomePageButtonLeft = styled(Link)`
    ${defaultButtonCss}
    margin: 0 5% 0 10%;
`

export const HomePageButtonRight = styled(Link)`
    ${defaultButtonCss}
    margin: 0 10% 0 5%;
`