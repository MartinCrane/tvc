import React, { Component } from 'react';
import { Row,Clearfix } from 'react-bootstrap';
import { Helmet } from "react-helmet";

class About extends Component {

  render() {
    const content = (
              <div>
              <p>Martin Crane is a composer based in Brooklyn, New York. After studying classical piano through high school, he began his professional music career in Austin, Texas as the singer, writer, producer of Brazos (500k + plays on Spotify).  He released two albums as Brazos - <b><i>Phosphorescent Blues</i></b> (Autobus 2010) and <b><i>Saltwater</i></b> (Dead Oceans 2013) - and toured nationally. Brazos’ records have been reviewed in The Observer, FADER, Pitchfork, SPIN among others, and Brazos' songs have been licensed on TV shows and in commercials.</p>
              <p>Martin began working in film in 2013 as the music supervisor for the Oscar-nominated, Emmy award-winning documentary <b><i>Cutie and the Boxer</i></b>. Since then, he has worked as a composer with director Zachary Heinzerling on projects that include the 2015 Sundance short <b><i>Hugh the Hunter</i></b>, a web-series for <b>MoMA PS1</b>, and several short docs. He composed the original score for the Emmy-nominated animated web series, <b><i>Animated Life</i></b>, contributed music to Oscar-nominated director Josh Fox’s documentary <b><i>How to Let Go of the World and Love All the Things Climate Can't Change</i></b>, and in 2015 released an album of original pop music, <b><i>Physical Therapy</i></b>, that received positive reviews in Interview Magazine, FADER, Flood Magazine, and KCRW among others.
              </p>
              <p>In the Spring of 2017, Martin participated in the <b>ASCAP Composer's Workshop at Columbia University</b>, mixed and co-produce <b>Ian Chang</b>'s (of Sun Lux) debut EP, and started the music supervision on Bentley Heyman's debut feature, all while attending The Flatiron School. He built this website and all the music within it.</p>
              <h2>email him at <b>info at martincrane.net </b></h2>
              </div>
          )
    return (
      <Row>
        <Helmet titleTemplate="%s | martincrane.net" image="https://s3.amazonaws.com/www.martincrane.net/image/library/cell.jpg">
          <title>About</title>
          <html lang="en" amp />
          <meta name="description" content="Helmet application"/>
        </Helmet>

        <div className="case">
          <div className="About">
            <img
              src={require(`../images/mc-head1.png`)}
              alt='title'>
            </img>
              {content}
              <Clearfix/>
          </div>
          <Clearfix/>
        </div>
        <Clearfix/>
      </Row>
    );
  }

}

export default About;
