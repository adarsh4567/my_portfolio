import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import Socialicons from '../subComponents/Socialicons';
import { YinYang } from './AllSvg';
import Intro from './Intro';


const MainContainer = styled.div`
background: ${props => props.theme.body };
width:100vw;
height:100vh;
overflow:hidden;
position:relative;
h2,h3,h4,h5,h6{
    fontFamily:'Karla',sans-serif;
    font-weight:500;
}`

const Container = styled.div`
padding:2rem;
`

const Contact = styled.a`
color:${props => props.theme.text};
position:absolute;
top:2rem;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;

`

const Blog = styled(Link)`
color:${props => props.theme.text};
position:absolute;
top:50%;
right:calc(1rem + 2vw);
text-decoration:none;
z-index:1;
transform:rotate(90deg) translate(-50%,-50%);

`
const Work = styled(Link)`
color:${props => props.click ? props.theme.body : props.theme.text};
position:absolute;
top:30%;
left:1rem;
text-decoration:none;
z-index:1;
transform:rotate(-90deg) translate(-50%,-90%);

`
const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;


`
const About = styled(Link)`
color:${props => props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;
`
const Skill = styled(Link)`
color:${props => props.theme.text};
text-decoration:none;
z-index:1;
`
const rotate = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}`
const Center = styled.button`
position:absolute;
top:${props => props.click ? '85%':'50%'};
left:${props => props.click ? '92%':'50%'};
transform:translate(-50%,-50%);
border:none;
outline:none;
background-color:transparent;
cursor:pointer;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition:all 1s ease;

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
    display:${props => props.click ? 'none':'inline-block'};
    padding-top:1rem;
}`

const DarkDiv = styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%':'0%'};
height:${props => props.click ? '100%':'0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {
    const [click,setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!click)
    }
  return <>
  
      <MainContainer>
      <DarkDiv click={click}/>
          <Container>
              <PowerButton/>
              <LogoComponent theme={click ? 'dark':'light'}/>
              <Socialicons theme={click ? 'dark':'light'}/>
              <Center click={click}>
                  <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 :200} fill='currentColor'/>
                  <h3>Click Here</h3>
              </Center>
              <Contact target='_blank' href='mailto:adarsh800251@gmail.com'>
                  <motion.h3 style={{fontFamily:'Pacifico'}}
                  initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                      Say Hi.
                  </motion.h3>
              </Contact>
              <Blog to='/code'>
                  <motion.h3 style={{fontFamily:'Pacifico',fontSize:'25px'}}
                  initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                      Codes
                  </motion.h3>
              </Blog>
              <Work to='/work' click={click}>
                  <motion.h3 style={{fontFamily:'Pacifico',fontSize:'25px'}}
                  initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                      Work Experience
                  </motion.h3>
              </Work>
              <BottomBar>
              <About to='/about' click={click} >
                  <motion.h3 style={{fontFamily:'Pacifico',fontSize:'25px'}}
                  initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                      About.
                  </motion.h3>
              </About>
              <Skill to='/skill'>
                  <motion.h3 style={{fontFamily:'Pacifico',fontSize:'25px'}}
                  initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                     My Skills.
                  </motion.h3>
              </Skill>

              </BottomBar>
          </Container>
          {click ? <Intro click={click}/>:null}
      </MainContainer>
  </>;
};

export default Main;
