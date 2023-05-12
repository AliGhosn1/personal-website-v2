import { useState, useEffect } from "react";

import { PROJECT_DATA } from "../../project-data";
import ProjectCard from "../project-card/project-card.component";

import { FilterButtonBar, FilterButton, FilterButtonActive, ProjectContainer } from "./projects-menu.styles";

const PorjectMenu = () => {
    const filterOptions = [
         'All',
         'Front-End',
         'Back-End',
         'Others'
    ]

    const [filter, setFilter] = useState('All');
    const [filteredItems, setfilteredItems] = useState(PROJECT_DATA);

    const onClickHandler = ({ target }) => {
        setFilter(target.id);
    }

    useEffect(() => {
        if(filter !== 'All')
            setfilteredItems(PROJECT_DATA.filter((project) => (project.filters.includes(filter))));
        else
            setfilteredItems(PROJECT_DATA);
    }, [filter, PROJECT_DATA]);

    function compareFn(a, b) {
        if (a.priority > b.priority) {
          return -1;
        }
        if (a.priority < b.priority) {
          return 1;
        }
        // a must be equal to b
        return 0;
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
            <ProjectContainer>
                {
                    filteredItems.sort(compareFn).map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))
                }
            </ProjectContainer>

        </div>
    )
}

export default PorjectMenu;