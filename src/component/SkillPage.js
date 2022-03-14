import React from 'react';
import  {ThemeProvider} from 'styled-components';
import { lightTheme } from './Themes';
import styled from 'styled-components'
import { Design, Develope } from './AllSvg';
import LogoComponent from '../subComponents/LogoComponent';
import Socialicons from '../subComponents/Socialicons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Link = styled.a`
text-decoration:none
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
&>*:first-child{
margin-right: 1rem;
}
`
const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.2em + 1vw);
padding: 0.8rem 0;
${Main}:hover &{
   
        color:${props => props.theme.body};
    
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`


const SkillPage = () => {
  return <>
      <ThemeProvider theme={lightTheme}>
       <Box>
       <LogoComponent theme='light'/>
<Socialicons theme='light'/>
<PowerButton />
<ParticleComponent theme='light'/>

         <Main>
           <Title>
             <Design width={40} height={40}/> Front-End Developer
           </Title>
           <Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
I am interested in IT and everything in its orbit.I love to develope websites using new technologies.
I am keen to gain experience, enhance and upgrade my skills in this field.
I enjoy working with React-JS and Next-Js,exploring new features in these.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js-ES6, React-Js,Next-Js, Redux, Sass, Bootstrap,Material-Ui Tailwind etc.
</p>
</Description>
<Description>
<strong>Projects</strong>
<p>
Movies Website--~
<Link target='_blank' href='https://adarsh4567.github.io/Entertainment'>Link</Link>
<br></br>
Crypto-Tracking-Website--~
<Link target='_blank' href='https://adarsh4567.github.io/Crypto-Zone'>Link</Link>
<br></br>
Next-Js Travel Application--~
<Link target='_blank' href='https://travel-app-rosy.vercel.app'>Link</Link>
</p>
</Description>
         </Main>
         <Main>
         <Title>
    <Develope width={40} height={40} /> Backend Developer
</Title>
<Description>
I am a MERN Stack Developer.I have made Full Stack projects using this technologies.
I have experience in working with MongoDB.I enjoy debugging the code for optimized performance.
</Description>
<Description>
<strong>Skills</strong>
<p>
Express-Js,Node-Js,Mongo-Db,Postman,socket-io,Jwt-Authentication,Password Hashing
</p>
</Description>
<Description>
<strong>Project</strong>
<p>
MERN-Stack Chat-Application--~
<Link href='https://chat-always.herokuapp.com' target='_blank'>Link</Link>
</p>
</Description>
         </Main>
       </Box>
      </ThemeProvider>
  </>;
};

export default SkillPage;
