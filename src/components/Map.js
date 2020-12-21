import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const api_key = process.env.REACT_APP_API_KEY

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.map(e => {
        if(e.categories[0].id === 8) {
            return <LocationMarker lat = {e.geometries[0].coordinates[1]}lng = {e.geometries[0].coordinates[0]} />  
        }
        return null
    })

    return ( < div className = "map" >
        <GoogleMapReact bootstrapURLKeys = {
            {
                key: api_key
            }
        }
            defaultCenter = { center }
            defaultZoom = { zoom } >
                {markers}
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