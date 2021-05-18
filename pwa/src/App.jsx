import React from 'react'
import clsx from 'clsx'
import {
  theme, 
} from './theme'
import {
  makeStyles, 
  MuiThemeProvider,  
  createMuiTheme, 
} from '@material-ui/core/'
import { 
  Docs, 
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
  },
}))

export default function App() {  

    const classes = useStyles()

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <div className={ clsx( classes.appWrap ) }>
                <Docs />
              </div>
            </MuiThemeProvider> 
}
