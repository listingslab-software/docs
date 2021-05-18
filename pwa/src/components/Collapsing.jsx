import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	collapsing:{
	},
	fullWidth:{
		width: '100%',
	},
	link: {
		cursor: 'pointer',
	},
	plainAccordion: {
		boxShadow: 'none',
		borderRadius: 0,
		border: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	btnTxt: {
		marginLeft: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
	},
	icon:{
		marginRight: theme.spacing( 2 ),
	},
	hTag: {
		fontWeight: 'lighter',
	},
	root: {
    	width: '100%',
	},
	heading: {
		marginTop: theme.spacing( 0.45 ),
	},
}))

export default function Collapsing( props ) {
	
	const classes = useStyles()
	const { 
		children,
		options
	} = props
	if ( !children ) return null
	const {
		title,
		// icon, 
	} = options 

	let alreadyOpen = true

	return	<div className={clsx( classes.collapsing )}>
				<Accordion 
					defaultExpanded={ alreadyOpen }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `wordpress` }
			          id={ `help` } >
			          
			          <Typography 
			          	variant={ `button` }
			          	className={clsx( classes.hTag )}
			          >
			          	{ title }
			          </Typography>
        			</AccordionSummary>
        			<AccordionDetails>
						{ children }
					</AccordionDetails>
				</Accordion>
		</div>
}

/*
<div className={ clsx( classes.icon )}>
			          	<Icon icon={ icon } />
			          </div>
*/