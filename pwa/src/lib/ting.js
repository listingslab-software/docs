// import { getStore } from '../'

export const getTingFlag = ting => {
    if ( !ting ) return false
    return `http://localhost:8888/wp-content/plugins/listingslab-toolkit/public/svg/flags/${ ting.countryCode2.toLowerCase() }.svg`
}


export const getTingGeoStr = ting => {
    if ( !ting ) return false
    const {
        countryName,
        // continentName,
        city,
    } = ting
    let geoStr = `${ countryName } ${ city }`
    return geoStr
}

export const getTingDeviceStr = ting => {
    if ( !ting ) return false
    const {
        osName,
        device,
        browserName,
        browserMajor,
    } = ting
    let deviceStr = `${ osName } ${browserName} ${browserMajor} ${ device }`
    return deviceStr
}


/*

const example = {
    "id": "sI6js3jOFEH55Qgq9mvM",
    "ip": "111.206.221.69",
    "lng": "103.93094",
    "countryTld": ".cn",
    "browserName": "Mobile Safari",
    "stateProv": "",
    "osVersion": "9.1",
    "callingCode": "+86",
    "currencyCode": "CNY",
    "browserVersion": "9.0",
    "currencyName": "Yuan Renminbi",
    "lat": "36.56754",
    "created": 1617170332062,
    "host": "listingslab.com",
    "district": "",
    "path": "/big-data-freedom-and-you/",
    "countryCode2": "CN",
    "device": "Apple iPhone",
    "osName": "iOS",
    "organization": "China Unicom Beijing Province Network",
    "zipcode": "",
    "continentName": "Asia",
    "timeZone": "Asia/Shanghai",
    "city": "China",
    "geonameId": "10680273",
    "countryCapital": "Beijing",
    "fingerprint": "listingslab.com_60c1918583d73818dffeeafd29b9a802",
    "isEu": false,
    "languages": "zh-CN,yue,wuu,dta,ug,za",
    "continentCode": "AS",
    "currencySymbol": "¥",
    "countryName": "China",
    "updated": 1617170327425,
    "countryCode3": "CHN",
    "browserMajor": "9",
    "isp": "China Unicom Beijing Province Network"
}

*/