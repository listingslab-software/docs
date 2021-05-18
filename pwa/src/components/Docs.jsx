import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
	toggleOpen,
} from '../redux/docs/actions'
import {
	makeStyles,
    Dialog,
    DialogContent,
    IconButton,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'
import { 
	Collapsing, 
	DocsMenu, 
} from './'

const useStyles = makeStyles((theme) => ({
  docsDialog:{
  	padding: theme.spacing(),
  },
  animation:{
  	marginBottom: theme.spacing(),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  grow: {
  	flexGrow: 1,
  }
}))

export default function Docs( props ) {

	const classes = useStyles() 	
	const docsSlice = useSelector(state => state.docs)
	const {
     	open,
    } = docsSlice
	
	if ( open ){
		return	<Dialog
				open={ open }
				fullWidth
				fullScreen
				maxWidth={ `sm` }
				onClose={ () => {  }}>
				<DialogContent>
					<div className={ clsx( classes.docsDialog )}>
						
		                <Collapsing options={{ title: `Docs Menu` }}>
		                	<DocsMenu />
		                </Collapsing>
			               
						<IconButton
							className={ clsx( classes.closeTrigger )}
		        			variant={ `text` }
		        			color={ `primary` }
		        			onClick={ (e) => {
		        				e.preventDefault()
		        				toggleOpen( false )
		        			}}>
		        			<Icon icon={ `oldskool` } color={ `inherit` } />				
						</IconButton>
					</div>
					<div className={ clsx( classes.grow )} />
				</DialogContent>
			</Dialog>


	}	

	return <IconButton
				className={ clsx( classes.closeTrigger )}
				variant={ `text` }
				color={ `primary` }
				onClick={ (e) => {
					e.preventDefault()
					toggleOpen( true )
				}}>
				<Icon icon={ `greybeard` } color={ `inherit` } />				
			</IconButton>
	
}
