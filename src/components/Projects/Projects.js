import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section id='projects'>
      <SectionDivider/>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map((project, index) => (
          <BlogCard key={index}>
            <Img src={project.image} alt={project.title} />
            <TitleContent>
                {project.title}
              </TitleContent>
            <CardInfo>
              {project.description}
            </CardInfo>
            <TagList>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>
                    {tag}
                    </Tag>
                ))}
              </TagList>
              <UtilityList>
                <ExternalLinks href={project.visit}>
                  Live
                </ExternalLinks>
                <ExternalLinks href={project.source}>
                  Source
                </ExternalLinks>
              </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
);

export default Projects;