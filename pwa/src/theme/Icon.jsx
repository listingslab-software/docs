// https://material-ui.com/components/material-icons/
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Blokey from './jsx/Blokey'
import WordPress from './jsx/WordPress'
import IconGithub from './jsx/Github'
import IconToolKit from '@material-ui/icons/Extension'
import IconPlugins from '@material-ui/icons/Extension'
import IconGDPR from '@material-ui/icons/Security'
import IconDocs from '@material-ui/icons/Description'
import IconSend from '@material-ui/icons/Send'
import IconMessage from '@material-ui/icons/QuestionAnswer'
import Account from './jsx/Account'
import IconMail from '@material-ui/icons/Mail'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconGreyBeard from '@material-ui/icons/ImportantDevices'
import IconDefault from '@material-ui/icons/Help'
import IconPost from '@material-ui/icons/Description'
import IconOldskool from '@material-ui/icons/DesktopAccessDisabled'
import IconFingerprint from '@material-ui/icons/Fingerprint'
import IconSkip from '@material-ui/icons/SkipNextRounded'
import IconXML from '@material-ui/icons/Code'
import IconImport from '@material-ui/icons/ImportExport'
import IconFood from '@material-ui/icons/Fastfood'
import IconFullscreen from '@material-ui/icons/Fullscreen'
import IconFullscreenExit from '@material-ui/icons/FullscreenExit'
import IconPhoto from '@material-ui/icons/CameraAlt'
import IconFilm from '@material-ui/icons/MovieCreation'
import IconInfo from '@material-ui/icons/Help'
import IconHome from '@material-ui/icons/Home'
import IconPalette from '@material-ui/icons/Palette'
import IconMenu from '@material-ui/icons/MoreVert'
import IconExpand from '@material-ui/icons/Add'
import IconStart from '@material-ui/icons/ArrowForward'
import IconGambler from '@material-ui/icons/MonetizationOn'
import IconStory from '@material-ui/icons/ArrowRight'
import IconFire from '@material-ui/icons/CloudQueue'
import IconUser from '@material-ui/icons/Person'
import IconGames from '@material-ui/icons/Casino'
import IconAdd from '@material-ui/icons/Add'
import IconOpen from '@material-ui/icons/Add'
import IconDelete from '@material-ui/icons/DeleteOutlined'
import IconPlay from '@material-ui/icons/PlayArrow'
import IconSave from '@material-ui/icons/Save'
import IconBroadcast from '@material-ui/icons/KeyboardVoice'
import IconSignout from '@material-ui/icons/ExitToApp'
import IconLevelUp from '@material-ui/icons/ArrowUpward'
import IconLevelDown from '@material-ui/icons/ArrowDownward'
import IconHand from '@material-ui/icons/PanTool'
import IconManager from '@material-ui/icons/AccountBox'
import IconEdit from '@material-ui/icons/Edit'
import IconWork from '@material-ui/icons/Build'
import IconLife from '@material-ui/icons/BeachAccess'
import IconBalance from '@material-ui/icons/Spa'
import IconClose from '@material-ui/icons/Close'
import IconFeatured from '@material-ui/icons/Looks'
import IconDarkTheme from '@material-ui/icons/Brightness4'
import IconLightTheme from '@material-ui/icons/Brightness5'
import IconUpdate from '@material-ui/icons/Save'
import IconPanelToggle from '@material-ui/icons/ExpandMore'
import IconPushtotalk from '@material-ui/icons/TouchApp'
import IconShare from '@material-ui/icons/Share'
import IconChild from '@material-ui/icons/ArrowDropDown'
import IconSeparator from '@material-ui/icons/ArrowRight'
import IconLink from '@material-ui/icons/Link'
import IconPause from '@material-ui/icons/Pause'
import IconSettings from '@material-ui/icons/Settings'
import IconParent from '@material-ui/icons/KeyboardArrowUp'
import IconNext from '@material-ui/icons/ArrowRight'
import IconPrevious from '@material-ui/icons/ArrowLeft'
import IconSocial from '@material-ui/icons/Group'
import IconLeft from '@material-ui/icons/ChevronLeft'
import IconRight from '@material-ui/icons/ChevronRight'
import IconAPI from '@material-ui/icons/Code'
import IconProduct from '@material-ui/icons/Widgets'
import IconCreate from '@material-ui/icons/Add'
import IconConnected from '@material-ui/icons/Wifi'
import IconNotConnected from '@material-ui/icons/WifiOff'
import IconLocale from '@material-ui/icons/PersonPin'
import IconSearch from '@material-ui/icons/Search'
import IconCart from '@material-ui/icons/AddShoppingCart'
import IconError from '@material-ui/icons/Error'

const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        const {
            icon,
            color,
            classes,
        } = this.props
        let iconColor = `inherit`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `none`:
                return null

            case 'listingslab': 
                return <Blokey className={classes.iconButton} color={iconColor} />

            case 'wordpress': 
                return <WordPress className={classes.iconButton} color={iconColor} />

            case 'github': 
                return <IconGithub className={classes.iconButton} color={iconColor} />

            case 'privacy': 
                return <Account className={classes.iconButton} color={iconColor} />

            case `cart`:
                return (<IconCart color={iconColor} />)   

            case `connected`:
                return (<IconConnected color={iconColor} />)   

            case `toolkit`:
                return (<IconToolKit color={iconColor} />) 

            case `notconnected`:
                return (<IconNotConnected color={iconColor} />)   

            case `dashboard`:
                return (<IconDashboard color={iconColor} />)  

            case `greybeard`:
                return (<IconGreyBeard color={iconColor} />)  

            case `plugins`:
                return (<IconPlugins color={iconColor} />)  

            case `locale`:
                return (<IconLocale color={iconColor} />)   

            case `gdpr`:
                return (<IconGDPR color={iconColor} />)

            case `create`:
                return (<IconCreate color={iconColor} />)   

            case `api`:
                return (<IconAPI color={iconColor} />)             

            case `left`:
                return (<IconLeft color={iconColor} />)  

            case `right`:
                return (<IconRight color={iconColor} />)  

            case `photo`:
                return (<IconPhoto color={iconColor} />)  

            case `search`:
                return (<IconSearch color={iconColor} />)   

            case `skip`:
                return (<IconSkip color={iconColor} />)  

            case `film`:
                return (<IconFilm color={iconColor} />)    

            case `social`:
                return (<IconSocial color={iconColor} />)

            case `settings`:
                return (<IconSettings color={iconColor} />) 

            case `next`:
                return (<IconNext color={iconColor} />) 

            case `previous`:
                return (<IconPrevious color={iconColor} />) 
            
            case `parent`:
                return (<IconParent color={iconColor} />) 

            case `fingerprint`:
                return (<IconFingerprint color={iconColor} />) 

            case `pause`:
                return (<IconPause color={iconColor} />) 

            case `link`:
                return (<IconLink color={iconColor} />) 

            case `separator`:
                return (<IconSeparator color={iconColor} />) 

            case `child`:
                return (<IconChild color={iconColor} />) 

            case `oldskool`:
                return (<IconOldskool color={iconColor} />) 


            case `share`:
                return (<IconShare color={iconColor} />) 

            case `send`:
                return (<IconSend color={iconColor} />) 

            case `open`:
                return (<IconOpen color={iconColor} />) 

            case `food`:
                return (<IconFood color={iconColor} />) 

            case `pingpong`:
                return (<IconPushtotalk color={iconColor} />) 

            case `push2Talk`:
                return (<IconPushtotalk color={iconColor} />) 

            case `panel-toggle`:
                return (<IconPanelToggle color={iconColor} />) 

            case `update`:
                return (<IconUpdate color={iconColor} />) 

            case `dark`:
                return (<IconDarkTheme color={iconColor} />) 

            case `light`:
                return (<IconLightTheme color={iconColor} />) 

            case `featured`:
                return (<IconFeatured color={iconColor} />) 

            case `work`:
                return (<IconWork color={iconColor} />) 

            case `xml`:
                return (<IconXML color={iconColor} />)

            case `post`:
                return (<IconPost color={iconColor} />)

            case `life`:
                return (<IconLife color={iconColor} />) 

            case `balance`:
                return (<IconBalance color={iconColor} />) 

            case `close`:
                return (<IconClose color={iconColor} />)

            case `info`:
                return (<IconInfo color={iconColor} />)

            case `instructions`:
                return (<IconInfo color={iconColor} />)

            case `edit`:
                return (<IconEdit color={iconColor} />)

            case `product`:
                return (<IconProduct color={iconColor} />)

            case `stop`:
                return (<IconHand color={iconColor} />)

            case `leveldown`:
                return (<IconLevelDown color={iconColor} />)

            case `levelup`:
                return (<IconLevelUp color={iconColor} />)

            case `signout`:
                return (<IconSignout color={iconColor} />)

            case `events`:
                return (<IconBroadcast color={iconColor} />)

            case `broadcast`:
                return (<IconBroadcast color={iconColor} />)

            case `save`:
                return (<IconSave color={iconColor} />)

            case `play`:
                return (<IconPlay color={iconColor} />)

            case `delete`:
                return (<IconDelete color={iconColor} />)

            case `add`:
                return (<IconAdd color={iconColor} />)

            case `games`:
                return (<IconGames color={iconColor} />)

            case `fire`:
                return (<IconFire color={iconColor} />)

            case `user`:
                return (<IconUser color={iconColor} />)

            case `ting`:
                return (<IconUser color={iconColor} />)

            case `story`:
                return (<IconStory color={iconColor} />)

            case `gamblers`:
                return (<IconGambler color={iconColor} />)
                
            case `gambler`:
                return (<IconGambler color={iconColor} />)

            case `manager`:
                return (<IconManager color={iconColor} />)

            case `theme`:
                return (<IconPalette color={iconColor} />)

            case `fullscreen`:
                return (<IconFullscreen color={iconColor} />)

            case `exitfullscreen`:
                return (<IconFullscreenExit color={iconColor} />)

            case `import`:
                return (<IconImport color={iconColor} />)

            case `message`:
                return (<IconMessage color={iconColor} />)


            case `start`:
                return (<IconStart color={iconColor} />)    

            case `expand`:
                return (<IconExpand color={iconColor} />)

            case `home`:
                return (<IconHome color={iconColor} />)

            case `error`:
                return (<IconError color={iconColor} />)

            case `mail`:
                return (<IconMail color={iconColor} />)
                

            case `docs`:
                return (<IconDocs color={iconColor} />)

            case `menu`:
                return (<IconMenu color={iconColor} />)

            default: {
                return (<IconDefault color={iconColor} />)
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
