import React,{useState} from 'react'
import {themes,ThemeContext} from "./context"
import ToolBar from './Child/ToolBar'
function ContextTestF () {
  return (
    <ThemeContext.Provider value={themes.light}>
      <ToolBar/>
    </ThemeContext.Provider>
  )

}

export default ContextTestF
