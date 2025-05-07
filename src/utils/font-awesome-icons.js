import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library as FontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core'

// Regular Icons
import {
    faCalendar,
    faCircle,
    faMap,
    faThumbsDown,
    faThumbsUp,
    faClock,
    faStar

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
    faArrowLeft as fasArrowLeft,
    faXmark as fasXmark,
    faStar as fasStar,
    faClock as fasClock,
    faStarHalfStroke as fasStarHalfStroke,
    faTemperatureHalf as fasTemperatureHalf,
    faMoon as fasMoon,
    faWind as fasWind,
    faCloudRain as fasCloudRain,
    faCloud as fasCloud,
    faDroplet as fasDroplet,
    faSun as fasSun,
    faGem as fasGem,
    faEye as fasEye
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
    faCalendar,
    faThumbsDown,
    faThumbsUp,
    faClock,
    faStar
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
    fasArrowLeft,
    fasXmark,
    fasStar,
    fasStarHalfStroke,
    fasTemperatureHalf,
    fasClock,
    fasMoon,
    fasWind,
    fasCloudRain,
    fasCloud,
    fasDroplet,
    fasSun,
    fasGem,
    fasEye
)

// Brands
FontAwesomeLibrary.add(
    fabFacebook,
    fabInstagram,
    fabYoutube
)
export { FontAwesomeIcon }