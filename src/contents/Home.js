import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/alston.png';
import Social from '../components/Social'
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" width="50%"alt="Sheena"></img><br></br> <br></br><br></br>
<ReactTypingEffect className="typingeffect" text={['I am Sheena Alston','I am a Content Creator, Welcome To My Web Porfoilio']} speed={150} eraseDelay={700}/>
<Social />
</div>
)
}
}
export default Home