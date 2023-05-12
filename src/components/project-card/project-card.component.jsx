import { ProjectCardContainer, ProjectCardInnerContainer, ProjectCardContent, ProjectCardFront, ProjectCardBack, ProjectImageHolder, ProjectTitle, ProjectDescription, ProjectTechnologies, 
         ProjectTechnology, GitHubLogo, LiveLinkLogo } from "./project-card.styles";
import LiveLinkIcon from '../../assets/liveLink.png';

const ProjectCard = ({ project }) => {
    const { name, description, technologies, github, liveLink, imageSrc } = project;

    const onGithubClick = () => {
        window.location.replace = {github};
    }

    const onLiveLinkClick = () => {
        window.location.replace = {github};
    }

    return(
        <ProjectCardContainer>
            <ProjectCardInnerContainer className="flip">
                <ProjectCardFront>
                    <ProjectImageHolder src={imageSrc}/>
                </ProjectCardFront>
                <ProjectCardBack>
                    <ProjectCardContent>
                        <ProjectTitle>{ name }</ProjectTitle>
                        <ProjectDescription>{ description }</ProjectDescription>
                        <ProjectTechnologies>{ technologies.map((technology) => ( <ProjectTechnology>{ technology }</ProjectTechnology> )) }</ProjectTechnologies>
                        <a href={github} target="_blank"><GitHubLogo /></a>
                        {liveLink && <a href={liveLink} target="_blank"><LiveLinkLogo src={LiveLinkIcon} alt={name}/></a>}
                    </ProjectCardContent>
                </ProjectCardBack>
            </ProjectCardInnerContainer>
        </ProjectCardContainer>
    )
}

export default ProjectCard;