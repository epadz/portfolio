import React, {Component} from 'react';
import './App.css';
import {Scrollbars} from 'react-custom-scrollbars';
import * as Mousetrap from 'mousetrap';
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
      tagFilter: tags.ALL,
      techFilters: null,
      curHover: null,
      curFilterHover: null,
      modalContent: null,
    }
  }

  componentDidMount() {
    Mousetrap.bind('left', this.prevProject);
    Mousetrap.bind('right', this.nextProject);
    Mousetrap.bind('esc', () => this.state.modalContent ? this.setModalContent(null) : {});
  }

  setHover = item => this.setState({
    ...this.state,
    curHover: item,
  });

  setModalContent = modalContent => this.setState({
    ...this.state,
    modalContent,
  });

  setFilterHover = (filter, type) => this.setState({
    ...this.state,
    curFilterHover: {filter, type},
  });

  setTagFilter = tagFilter => this.setState({
    ...this.state,
    tagFilter,
  }, () => {
    let visibleTechFilters = this.getVisibleTechFilters();
    this.setState({
      ...this.state,
      techFilters: !this.state.techFilters ?
          null :
          this.state.techFilters.filter(technology => visibleTechFilters.includes(technology)).length > 0 ?
              this.state.techFilters.filter(technology => visibleTechFilters.includes(technology)) :
              null
    })
  });

  toggleTechFilter = filter => {
    if (filter === technologies.ANY) {
      this.setState({
        ...this.state,
        techFilters: null,
      });
    } else if (!this.state.techFilters) {
      this.setState({
        ...this.state,
        techFilters: [filter],
      });
    } else if (this.state.techFilters.includes(filter)) {
      if (this.state.techFilters.length === 1) {
        this.setState({
          ...this.state,
          techFilters: null,
        });
      } else {
        this.setState({
          ...this.state,
          techFilters: [...this.state.techFilters.filter(tech => tech !== filter)],
        });
      }
    } else {
      this.setState({
        ...this.state,
        techFilters: [...this.state.techFilters, filter],
      });
    }
  };

  getVisibleProjects = () => projects.filter(project => (this.state.tagFilter === tags.ALL || project.tags.includes(this.state.tagFilter)) &&
      (!this.state.techFilters || includesAny(project.technologies, this.state.techFilters))
  );

  getVisibleTechFilters = () => [
    technologies.ANY,
    ...Array.from(new Set(projects
        .filter(project => (this.state.tagFilter === tags.ALL || project.tags.includes(this.state.tagFilter)))
        .reduce((accum, project) => [...accum, ...project.technologies], []))),
  ];

  prevProject = () => {
    if (this.state.modalContent) {
      let visibleProjects = this.getVisibleProjects();
      let curIndex = visibleProjects.indexOf(this.state.modalContent);
      if (curIndex > 0) {
        this.setModalContent(visibleProjects[curIndex - 1]);
      }
    }
  };

  nextProject = () => {
    if (this.state.modalContent) {
      let visibleProjects = this.getVisibleProjects();
      let curIndex = visibleProjects.indexOf(this.state.modalContent);
      if (curIndex < visibleProjects.length - 1) {
        this.setModalContent(visibleProjects[curIndex + 1]);
      }
    }
  };

  render() {
    let visibleProjects = this.getVisibleProjects();
    let curIndex = this.state.modalContent ? visibleProjects.indexOf(this.state.modalContent) : null;

    let visibleTechFilters = this.getVisibleTechFilters();

    return (
        <div className="App">
          <div className="sideBar">
            <div className="sideBarTop">
              <div className="profileImage"/>
              <div className="sidebarHeader">
                <div className="title"><span>Eliot</span><span>Padzensky</span></div>
                <div className="social">
                  <a className="socialIcon" id="emailIcon" href="mailto:e.padzensky@comcast.net">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 14">
                      <g>
                        <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986
			c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
                        <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8
			L13.684,2.271z"/>
                        <polygon points="0,2.878 0,11.186 4.833,7.079 		"/>
                        <polygon points="9.167,7.079 14,11.186 14,2.875 		"/>
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
                  <a className="socialIcon" href="https://github.com/epadz" target="_blank">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="filtersContainer">
              <div className="filtersTitle">project categories</div>
              <div className="filters">
                {
                  Object.values(tags)
                      .map((tag, t) => <div
                          className="filter"
                          style={{
                            opacity: !this.state.curHover && (
                                this.state.tagFilter === tag || (
                                    this.state.curFilterHover &&
                                    this.state.curFilterHover.type === "tag" &&
                                    this.state.curFilterHover.filter === tag
                                )
                            ) || (this.state.curHover && this.state.curHover.tags.includes(tag)) ? 1 : 0.6,
                          }}
                          onMouseOver={() => this.setFilterHover(tag, "tag")}
                          onMouseOut={() => this.setFilterHover(null)}
                          onClick={() => this.setTagFilter(tag)}
                          key={t}>{tag}</div>)
                }
              </div>
            </div>
            <div className="filtersContainer">
              <div className="filtersTitle">technologies</div>
              <div className="filters">
                {
                  visibleTechFilters
                      .map((technology, t) => <div
                          className="filter"
                          style={{
                            opacity: !this.state.curHover && ( //no project is being hovered over -> opacity based on current filter or hovering
                                (!this.state.techFilters && technology === technologies.ANY) || //this filter is the any filter and there are no current tech filters set
                                (this.state.techFilters && this.state.techFilters.includes(technology)) || //there are tech filters set and this tech filter is one of them
                                (this.state.curFilterHover && this.state.curFilterHover.type === "technology" && this.state.curFilterHover.filter === technology) //the filter is being hovered over
                            ) || (this.state.curHover && this.state.curHover.technologies.includes(technology)) ? 1 : 0.6 //hovering over a project and the project uses this technology
                          }}
                          onMouseOver={() => this.setFilterHover(technology, "technology")}
                          onMouseOut={() => this.setFilterHover(null)}
                          onClick={() => this.toggleTechFilter(technology)}
                          key={t}>{technology}</div>)
                }
              </div>
            </div>
          </div>
          <div className="main">
            <div className="header">
              Projects
            </div>
            <Scrollbars className="content" autoHide autoHideTimeout={1000} autoHideDuration={200}>
              {
                visibleProjects.map((project, p) => <ProjectTile {...project}
                                                                 isFaded={false}
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
              <div className="leftArrow" onClick={() => this.prevProject()}>❮</div>}
              {curIndex < visibleProjects.length - 1 &&
              <div className="rightArrow" onClick={() => this.nextProject()}>❯</div>}
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
