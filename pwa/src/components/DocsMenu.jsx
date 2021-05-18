import React from 'react'
import clsx from 'clsx'
// import {
//   gotoURL,
// } from '../redux/pingpong/actions'
import {
	makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  docsMenu:{
    // border: '1px solid gold',
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  title:{
  	padding: theme.spacing(2),
  	fontWeight: 'normal',
  },
  titleTxt:{
	marginLeft: theme.spacing(4),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
  pingpongTrigger: {
    position: 'absolute',
    right: 55 + theme.spacing(),
    textTransform: 'none',
    background: 'white',
  },
  listItem:{
    borderBottom: '1px solid #eee',
    
    minWidth: 360,
  },
}))

export default function SettingsMenu( props ) {

	const classes = useStyles() 	


	return	<div className={ clsx( classes.docsMenu )} >
    				<List dense>
    					<ListItem 
                className={ clsx( classes.listItem )}
    						button
    						onClick={ (e) => { 
    							e.preventDefault()
                  window.open( `https://bitbucket.org/advicator_jira/advicator-docs/`, `_self` )
    						}}>
    						<ListItemAvatar>
    							<Icon icon={ `code` } color={ `primary` } />
    						</ListItemAvatar>
    						<ListItemText 
    							primary={ `BitBucket` }
                  secondary={`repository`}
    						/>
    					</ListItem>
    				</List>
			    </div>
}
