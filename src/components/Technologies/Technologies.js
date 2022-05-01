import React from 'react';
import { DiReact, DiAndroid, DiLaravel } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id='technologies'>
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've been using the following technologies in the past few years:
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <br/>
          <ListContainer>
            <ListTitle>
              ReactJS
            </ListTitle>
            <ListParagraph>
              ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiAndroid size="3rem" />
          <br/>
          <ListContainer>
            <ListTitle>
              Flutter Android
            </ListTitle>
            <ListParagraph>
              Developing android using Flutter.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiLaravel size="3rem" />
          <br/>
          <ListContainer>
            <ListTitle>
              PHP
            </ListTitle>
            <ListParagraph>
              Laravel is a PHP framework for building user interfaces.
            </ListParagraph>
          </ListContainer>

        </ListItem>
      </List>
    </Section>
);

export default Technologies;
