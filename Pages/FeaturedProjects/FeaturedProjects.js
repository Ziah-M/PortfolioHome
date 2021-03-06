import React from 'react'
import {
  Container as UContainer,
  Row as URow,
  Col as UCol,
} from 'react-bootstrap'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import * as D from '../../Data'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
  const history = useHistory()
  return (
    <Wrapper>
      <Row className="heading">Some Things I've Built</Row>
      <Row className="project">
        <ProjectCard projectData={D.BUG_TRACKER} />
      </Row>
      <Row className="project">
        <ProjectCard projectData={D.MOVIES} />
      </Row>
      <Row className="project">
        <ProjectCard projectData={D.RESTAURANT} />
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(UContainer)`
  /* background: rgb(250, 250, 250); */
  background: #ece9e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #ece9e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  max-width: 100vw;
  padding: 50px 0;
  /* background: rgb(250, 250, 250); */
`

const Row = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;

  &.heading {
    font-weight: 500;
    font-size: 36px;
    text-align: center;
  }

  .project {
  }
`

export default FeaturedProjects
