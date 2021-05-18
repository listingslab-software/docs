import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const open = createAction(`DOCS/OPEN`) 

export const toggleOpen = open => {
	const store = getStore()
	store.dispatch({type: `DOCS/OPEN`, open })
	return true
}
