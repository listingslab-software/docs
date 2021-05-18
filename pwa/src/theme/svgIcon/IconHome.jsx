import React from 'react'
import { SvgIcon } from '@material-ui/core'

const IconHome = props => {
    const { fill } = props
    let f = `#000000`
    if (fill) {
        f = fill
    }
    
    return <SvgIcon {...props} viewBox="0 0 24 24">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Icon_">
                        <rect fillOpacity="0" x="0" y="0" width="24" height="24"></rect>
                        <path d="M10.8,3.9 L4.8,8.4 C4.3,8.78 4,9.37 4,10 L4,19 C4,20.1 4.9,21 6,21 L10,21 L10,14 L14,14 L14,21 L18,21 C19.1,21 20,20.1 20,19 L20,10 C20,9.37 19.7,8.78 19.2,8.4 L13.2,3.9 C12.49,3.37 11.51,3.37 10.8,3.9 Z" fill={ f } fillRule="nonzero"></path>
                    </g>
                </g>

           </SvgIcon>
}

export default IconHome