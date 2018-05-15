import React, {Component} from 'react';
import './App.css';
import {Scrollbars} from 'react-custom-scrollbars';
import ProjectTile from "./ProjectTile";

import projects, {tags, technologies} from './Projects';

const includesAny = (arr, sub) => {
  let inArr = false;
  sub.forEach(item => inArr = inArr || arr.includes(item));
  return inArr;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagFilters: [],
      techFilters: [],
      curHover: null,
      curFilterHover: null,
      modalContent: null,
    }
  }

  toggleFilter = (filter, isTag) => {
    if (isTag) {
      if (this.state.tagFilters.includes(filter)) {
        this.setState({
          ...this.state,
          tagFilters: this.state.tagFilters.filter(tag => tag !== filter)
        })
      } else {
        this.setState({
          ...this.state,
          tagFilters: [...this.state.tagFilters, filter]
        })
      }
    } else {
      if (this.state.techFilters.includes(filter)) {
        this.setState({
          ...this.state,
          techFilters: this.state.techFilters.filter(tag => tag !== filter)
        })
      } else {
        this.setState({
          ...this.state,
          techFilters: [...this.state.techFilters, filter]
        })
      }
    }
  };

  setHover = item => this.setState({
    ...this.state,
    curHover: item,
  });

  setModalContent = modalContent => this.setState({
    ...this.state,
    modalContent,
  });

  setFilterHover = filter => this.setState({
    ...this.state,
    curFilterHover: filter,
  });

  clearFilters = () => this.setState({
    tagFilters: [],
    techFilters: [],
  });

  render() {
    let visibleProjects = projects.filter(project =>
        !(this.state.tagFilters.length > 0 && !includesAny(this.state.tagFilters, project.tags) ||
            this.state.techFilters.length > 0 && !includesAny(this.state.techFilters, project.technologies))
    );

    let visibleTagFilters = Array.from(new Set(visibleProjects.reduce((accum, project) => [...accum, ...project.tags], [])));
    let visibleTechFilters = Array.from(new Set(visibleProjects.reduce((accum, project) => [...accum, ...project.technologies], [])));

    let curIndex = this.state.modalContent ? visibleProjects.indexOf(this.state.modalContent) : null;

    return (
        <div className="App">
          <div className="sideBar">
            <div className="profileImage"/>
            <div className="title">Eliot Padzensky</div>
            <div className="separator"/>
            <div className="filtersContainer">
              <div className="filtersTitle">project categories</div>
              <div className="filters">
                {
                  Object.values(tags)
                      .map((tag, t) => visibleTagFilters.includes(tag) ? <div
                          className="filter"
                          style={{
                            opacity: (
                                !this.state.curHover && (
                                    this.state.tagFilters.length === 0 ||
                                    this.state.tagFilters.includes(tag)
                                )
                            ) || (
                                this.state.curHover &&
                                this.state.curHover.tags.includes(tag)
                            ) ||
                            this.state.curFilterHover === tag ? 1 : 0.4,
                          }}
                          onMouseOver={() => this.setFilterHover(tag)}
                          onMouseOut={() => this.setFilterHover(null)}
                          onClick={() => this.toggleFilter(tag, true)}
                          key={t}>{tag}</div> : <div className="inertFilter" key={t}>{tag}</div>)
                }
              </div>
            </div>
            <div className="filtersContainer">
              <div className="filtersTitle">technologies</div>
              <div className="filters">
                {
                  Object.values(technologies)
                      .map((technology, t) => visibleTechFilters.includes(technology) ? <div
                          className="filter"
                          style={{
                            opacity: (!this.state.curHover && (this.state.techFilters.length === 0 || this.state.techFilters.includes(technology))) ||
                            (this.state.curHover && this.state.curHover.technologies.includes(technology)) || this.state.curFilterHover === technology ? 1 : 0.4
                          }}
                          onMouseOver={() => this.setFilterHover(technology)}
                          onMouseOut={() => this.setFilterHover(null)}
                          onClick={() => this.toggleFilter(technology, false)}
                          key={t}>{technology}</div> : <div className="inertFilter" key={t}>{technology}</div>)
                }
              </div>
            </div>
            <div className="separator"/>
            <div className="social">
              <a className="socialIcon" id="emailIcon" href="mailto:e.padzensky@comcast.net">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 10">
                  <g>
                    <path d="M7,7
                    L5.268,5.484
                    l-4.952,4.245
                    C0.496,9.896,0.739,10,1.007,10
                    h11.986
                    c0.267,0,0.509-0.104,0.688-0.271
                    L8.732,5.484
                    L7,7z"/>
                    <path d="
                    M13.684,0.271
                    C13.504,0.103,13.262,0,12.993,0
                    H-0.993
                    C0.74,0,0.498,02.104,0.318,0.273
                    L7,6
                    L13.684,0.271z"/>
                    <polygon points="0,0.878 0,9.186 4.833,5.079"/>
                    <polygon points="9.167,5.079 14,9.186 14,0.875"/>
                  </g>
                </svg>
              </a>
              <a className="socialIcon" id="linkedInIcon" href="https://www.linkedin.com/in/eliotpadzensky/"
                 target="_blank">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 430.117 430.118">
                  <g>
                    <path d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
                  </g>
                </svg>
              </a>
            </div>
            {(this.state.tagFilters.length > 0 || this.state.techFilters.length > 0) && false &&
            <div className="clearFiltersButton" onClick={this.clearFilters}>clear filters</div>}
          </div>
          <div className="main">
            <div className="header">
              Projects
            </div>
            <Scrollbars className="content" autoHide autoHideTimeout={1000} autoHideDuration={200}>
              {
                visibleProjects.map((project, p) => <ProjectTile {...project}
                                                                 isFaded={this.state.curFilterHover && !project.tags.includes(this.state.curFilterHover) && !project.technologies.includes(this.state.curFilterHover)}
                                                                 hoverHandler={this.setHover}
                                                                 clickHandler={() => this.setModalContent(project)}
                                                                 key={p}/>)
              }
            </Scrollbars>
          </div>
          {
            this.state.modalContent && <div className="modalContainer">
              <div className="modalOverlay" onClick={() => this.setModalContent(null)}/>
              {curIndex > 0 &&
              <div className="leftArrow" onClick={() => this.setModalContent(visibleProjects[curIndex - 1])}>❮</div>}
              {curIndex < visibleProjects.length - 1 &&
              <div className="rightArrow" onClick={() => this.setModalContent(visibleProjects[curIndex + 1])}>❯</div>}
              <div className="modal">
                <div className="projectImage">
                  <div className="blurredImage" style={{backgroundImage: `url('${this.state.modalContent.image}')`}}/>
                  <img className="mainImage" alt={this.state.modalContent.title} src={this.state.modalContent.image}/>
                </div>
                <div className="projectDetails">
                  <div className="projectTitle">{this.state.modalContent.title}</div>
                  {
                    this.state.modalContent.link &&
                    <a className="projectLink" href={this.state.modalContent.link} target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 457.03 457.03">
                        <g>
                          <path d="M421.512,207.074l-85.795,85.767c-47.352,47.38-124.169,47.38-171.529,0c-7.46-7.439-13.296-15.821-18.421-24.465
                              l39.864-39.861c1.895-1.911,4.235-3.006,6.471-4.296c2.756,9.416,7.567,18.33,14.972,25.736c23.648,23.667,62.128,23.634,85.762,0
                              l85.768-85.765c23.666-23.664,23.666-62.135,0-85.781c-23.635-23.646-62.105-23.646-85.768,0l-30.499,30.532
                              c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371,124.177-47.371,171.557,0
                              C468.869,82.897,468.869,159.706,421.512,207.074z M194.708,348.104l-30.521,30.532c-23.646,23.634-62.128,23.634-85.778,0
                              c-23.648-23.667-23.648-62.138,0-85.795l85.778-85.767c23.665-23.662,62.121-23.662,85.767,0
                              c7.388,7.39,12.204,16.302,14.986,25.706c2.249-1.307,4.56-2.369,6.454-4.266l39.861-39.845
                              c-5.092-8.678-10.958-17.03-18.421-24.477c-47.348-47.371-124.172-47.371-171.543,0L35.526,249.96
                              c-47.366,47.385-47.366,124.172,0,171.553c47.371,47.356,124.177,47.356,171.547,0l65.008-65.003
                              C246.109,360.336,219.437,357.723,194.708,348.104z"/>
                        </g>
                      </svg>
                    </a>
                  }
                  <div className="projectDate">{this.state.modalContent.date}</div>
                  {
                    this.state.modalContent.awards && <div className="awards">
                      {
                        this.state.modalContent.awards.map(award => <div className="award" key={award}>{award}</div>)
                      }
                    </div>
                  }
                  <div className="overview">
                    <div className="overviewHeader">Project Overview</div>
                    <div className="overviewContent">{
                      this.state.modalContent.overview || "overview goes here"
                    }</div>
                  </div>
                  <div className="tagClouds">
                    <div className="tagCould">
                      <div className="tagCloudTitle">Categories</div>
                      <div className="tags">
                        {this.state.modalContent.tags.map((tag, t) => <div className="tag" key={t}>{tag}</div>)}
                      </div>
                    </div>
                    <div className="tagCould">
                      <div className="tagCloudTitle">Technologies</div>
                      <div className="tags">
                        {this.state.modalContent.technologies.map((technology, t) => <div className="tag"
                                                                                          key={t}>{technology}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
    );
  }
}

export default App;
