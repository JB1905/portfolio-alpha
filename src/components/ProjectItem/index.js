import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './ProjectItem.css';

export const ProjectItem = props => (
  <Delay wait={(props.index + 1) * 190 + 280}>
    <div className="project__item">
      <img
        src={props.item.image}
        alt={props.item.name}
        className="project__image"
      />

      <div className="project__content">
        <div className="project__about">
          <h3>{props.item.name}</h3>
          <p>{props.item.about}</p>
        </div>

        <div className="project__links">
          {props.item.linkSrc ? (
            <a href={props.item.linkSrc}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : null}

          {props.item.linkLive ? (
            <a href={props.item.linkLive}>
              <FontAwesomeIcon icon="eye" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </Delay>
);
