import { useState } from "react";

import { FilterButtonBar, FilterButton, FilterButtonActive } from "./projects-menu.styles";

const PorjectMenu = () => {
    const filterOptions = [
         'All',
         'Front-End',
         'Back-End',
         'Others'
    ]

    const [filter, setFilter] = useState('All');

    const onClickHandler = ({ target }) => {
        setFilter(target.id);
    }

    return(
        <div>
            <FilterButtonBar>
                { 
                filterOptions.map((Filter) => (
                    ( Filter === filter && <FilterButtonActive status='active' onClick={onClickHandler} id={Filter} key={Filter}>{Filter}</FilterButtonActive>) ||
                    <FilterButton status='active' onClick={onClickHandler} id={Filter} key={Filter}>{Filter}</FilterButton>
                ))
                }
            </FilterButtonBar>

        </div>
    )
}

export default PorjectMenu;