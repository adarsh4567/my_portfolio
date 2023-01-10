import { motion } from 'framer-motion';
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github } from '../component/AllSvg';
import {DarkTheme} from '../component/Themes'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'

const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:fixed;
bottom:0;
left:2rem;
z-index:3;

&>*:not(:last-child){
    margin:0.5rem 0;
} 
`
const Link = styled.a`
text-decoration:none;
`

const Line = styled(motion.span)`
width:2px;
height:8rem;
background-color:${props => props.color === 'dark' ? DarkTheme.text:DarkTheme.body};


`

const Socialicons = (props) => {
  return (
  <Icons>
     <motion.div
      initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}>
         <Link target='_blank' style={{color:'inherit'}} href='https://github.com/adarsh4567'>
             <Github width={30} height={30} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
         </Link>
     </motion.div>
     <motion.div
      initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}>
         <Link target='_blank' style={{color:'inherit'}} href='https://www.linkedin.com/in/adarsh-kumar-095948220'>
             <AiFillLinkedin style={{fontSize:'2rem'}} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
         </Link>
     </motion.div>
     <motion.div
      initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}>
         <Link target='_blank' style={{color:'inherit'}} href='https://hashnode.com/@adarsh632'>
             <SiHashnode style={{fontSize:'2rem'}} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
         </Link>
     </motion.div>
  <Line color={props.theme}
  initial={
    {
        height:0
    }
}
animate={{
    height: '8rem'
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}

  />
  </Icons>
  
  )
};

export default Socialicons;
