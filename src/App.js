import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AboutPage from './component/AboutPage';
import CodePage from './component/CodePage';
import Main from './component/Main';
import SkillPage from './component/SkillPage';
import {DarkTheme, lightTheme } from './component/Themes';
import WorkPage from './component/WorkPage';
import GlobalStyle from './globalStyles';

const App = () => {
  const location = useLocation()
  return <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
    
    
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/code' element={<CodePage/>}/>
      <Route path='/skill' element={<SkillPage/>}/>
      <Route path='/work' element={<WorkPage/>}/>
    </Routes>
    </AnimatePresence>
    
    
    </ThemeProvider>
    
  </>;
};

export default App;
