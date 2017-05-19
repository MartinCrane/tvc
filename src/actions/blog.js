import ReactPlayer from 'react-player'
import ReactMarkdown  from 'react-markdown'
import { Col } from 'react-bootstrap';
import React from 'react';
import axios from 'axios'
import { Media, Player, controls, utils } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen, withMediaProps } = controls


export function formatMarkdown(str) {
  str = str.replace(/\\n/g, '<br></br>')
  str = str.replace(/xxximagehost/g, 'https://s3.amazonaws.com/www.martincrane.net/image/blog')
  str = str.replace(/xxxmp3host/g, 'http://www.brazosbrazos.com/audio')
  let searchString = '!!!rp!!!'

  if (str.search(searchString) === 0) {
    return str.split(searchString).map((string, index) => {
      if (index % 2 === 0) {
        return <ReactMarkdown source={string} key={Math.floor(Math.random() * 2000)}/>
      } else {
        let vendor = vendorSet(string)
        return <div>
          <br></br>
            <Col xs={12} sm={12} md={6} lg={5} className="video-responsive postMedia elementFloat" >
              <Media>
                <Player src={string} vendor={vendor}>
                </Player>
              </Media>
            </Col>
          </div>
      }})
  } else if (str.search(searchString) !== -1) {
    return str.split(searchString).map((string, index) => {
      if (index % 2 !== 0 && index !== 0) {
        let vendor = vendorSet(string)
        return <div >
          <br></br>
            <Col xs={12} sm={12} md={6} lg={5} className="video-responsive postMedia elementFloat" >
              <Media>
                <Player src={string} vendor={vendor}>
                </Player>
              </Media>
            </Col>
          </div>
      } else {
        return <ReactMarkdown source={string}/>
      }})
  } else {
    return <ReactMarkdown source={str}/>
  }
}
function vendorSet(string) {
  let vendor =''
  if (string.search('vimeo') != -1) {
    vendor = 'vimeo'
  }
  if (string.search('youtube')) {
    vendor = 'vimeo'
  }
  return vendor
}




export function submitBlog() {
    axios.post('http://localhost:4000/posts',
    {post: {
      body: `${this.state.post}`,
      date: `${this.state.date}`,
      title: `${this.state.title}`,
      archive: `${this.state.archive}`
    }},
      {
      method: 'post',
      headers: { Authorization: `${localStorage.mcjwt}` },
    }).then((response) => {

    }).catch((response) => {
      return response
    });
  }
