import { getStore } from '../../'

const getLocaleFlag = userLocale => {

    const state = getStore().getState()

    const {
        isWordPress,
        wpBloginfo,
    } = state.app

    const { wpurl } = wpBloginfo
    
    let prefix = `${wpurl}/wp-content/themes/listingslab/react/header/build/svg/locale_flags/`
    if (! isWordPress) prefix = `svg/locale_flags/`
    
	// console.log ('prefix', prefix)

    switch (userLocale) {
        case `en`:
            return `${prefix}gb.svg`
        case 'nl': 
            return `${prefix}nl.svg`
        case `fr`:
            return `${prefix}fr.svg`
        case `es`:
            return `${prefix}es.svg`
        case `de`:
            return `${prefix}de.svg`
        case `cn`:
            return `${prefix}cn.svg`
        default: {
            return false
        }
    
    }
}

export default getLocaleFlag
