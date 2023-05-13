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
    @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ 
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
    }
    @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ 
    }
    @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ 
    }
    @media (min-width:1281px) { /* hi-res laptops and desktops */ 
    }
    column-gap: 38px;
    row-gap: 50px;
    margin: 0 10vw;
`

