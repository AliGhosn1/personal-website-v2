import { styled, css } from "styled-components";

const FilterButtonDefault = css`
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`

export const FilterButtonBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    gap: 3vw;
    font-size: 1.6vh;
`

export const FilterButton = styled.div`
    font-family: 'Lora', serif;
    color: white;
    ${FilterButtonDefault}
`

export const FilterButtonActive = styled.div`
    color: rgb(12, 235, 179);
    ${FilterButtonDefault}
`

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 38px;
    row-gap: 50px;
    margin: 0 10vw;
`

