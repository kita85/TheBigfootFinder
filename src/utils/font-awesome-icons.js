import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'

// Regular Icons
import {
    faCalendar,
    faCircle,
    faMap,

} from '@fortawesome/free-regular-svg-icons'

// Solid Icons
import {
    faCircle as fasCircle,
    faCartShopping as fasCartShopping,
    faBars as fasBars,
    faNewspaper as fasNewspaper,
    faMagnifyingGlassChart as fasMagnifyingGlassChart,
    faHouse as fasHouse,
    faCircleInfo as fasCircleInfo,
    faArrowRight as fasArrowRight,
    faArrowLeft as fasArrowLeft
} from '@fortawesome/free-solid-svg-icons'

// Brand Icons
import {
    faFacebook as fabFacebook,
    faInstagram as fabInstagram,
    faYoutube as fabYoutube

} from '@fortawesome/free-brands-svg-icons'

// Regular
FontAwesomeLibrary.add(
    faCircle,
    faMap,
    faCalendar
)

// Solid
FontAwesomeLibrary.add(
    fasCircle,
    fasCartShopping,
    fasBars,
    fasNewspaper,
    fasMagnifyingGlassChart,
    fasHouse,
    fasCircleInfo,
    fasArrowRight,
    fasArrowLeft
)

// Brands
FontAwesomeLibrary.add(
    fabFacebook,
    fabInstagram,
    fabYoutube
)
export { FontAwesomeIcon }