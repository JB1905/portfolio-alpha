import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Delay from 'react-delay';

import me from '../../images/me.jpg';
import './About.css';

import { ABOUT } from '../../content/about';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';

export default class About extends Component {
  state = { paragraph: null };

  componentDidMount() {
    const paragraph = ABOUT.map((data, index) => (
      <Paragraph key={index} content={data.content} index={index} />
    ));

    this.setState({ paragraph: paragraph });
  }

  render() {
    return (
      <React.Fragment>
        <Title value="O mnie" />

        <div className="about">
          <div className="image__container">
            <Delay wait={520}>
              <ReactCSSTransitionGroup
                transitionName="image"
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <img src={me} alt="me" />
              </ReactCSSTransitionGroup>
            </Delay>
          </div>

          <div>{this.state.paragraph}</div>
        </div>
      </React.Fragment>
    );
  }
}