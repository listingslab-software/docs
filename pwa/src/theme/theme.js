
/*
	#2075d0 dark blue
	#57b3f2 light blue
	#9726bc purple
	#dedede light grey
	#70e751 lime green
  #3c8c27 green
  #1c2327 dark grey
*/
let widgetSettings = {
  primaryColor: `#1c2327`,
}
if ( window.widgetSettings ) widgetSettings = window.widgetSettings
const {
  primaryColor
} = widgetSettings

// window.location.host
// const defaultHost = `localhost:3000`

export const theme = { 
  palette: {
    type: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: '#1c2327',
    },
  }
}
