import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const api_key = process.env.REACT_APP_API_KEY

const Map = ({ center, zoom }) => {
    return ( < div className = "map" >
        <GoogleMapReact bootstrapURLKeys = {
            {
                key: api_key
            }
        }
            defaultCenter = { center }
            defaultZoom = { zoom } >
            <LocationMarker lat = { center.lat }lng = { center.lng }/>  
            </GoogleMapReact> 
        </div >
    )
}

Map.defaultProps = {
    center: {
        lat: 52.2297,
        lng: 21.0122
    },
    zoom: 3
}

export default Map