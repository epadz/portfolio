import React from 'react';
import './App.css';

const ProjectTile = ({title, image, tags, technologies, date, awards, hoverHandler, clickHandler, isFaded}) => <div
    className="projectTile"
    onMouseOver={() => hoverHandler({tags, technologies})}
    onMouseOut={() => hoverHandler(null)}
    style={{opacity: isFaded ? 0.4 : 1}}
    onClick={clickHandler}
>
  {awards && <div className="awardsContainer"><div className="awardIcon" /></div> }
  <div className="projectImage">
    <div className="blurredImage" style={{backgroundImage: `url('${image}')`}}/>
    <img className="mainImage" alt={title} src={image}/>
  </div>
  <div className="projectDetails">
    <div className="projectTitle">{title}</div>
    <div className="projectDate">{date}</div>
  </div>
</div>;

export default ProjectTile;