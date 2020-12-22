import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const api_key = process.env.REACT_APP_API_KEY

const Map = ({ eventData, center, zoom }) => {
        const [locationInfo, setLocationInfo] = useState(null)

        const markers = eventData.map(e => {
            if (e.categories[0].id === 8) {
                return <LocationMarker lat = { e.geometries[0].coordinates[1] }
                lng = { e.geometries[0].coordinates[0] }
                onClick = {
                    () => setLocationInfo({ id: e.id, title: e.title }) }
                />  
            }
            return null
        })

        return ( <div className = "map" >
            <GoogleMapReact bootstrapURLKeys = {
                {
                    key: api_key
                }
            }
            defaultCenter = { center }
            defaultZoom = { zoom } >
            { markers } 
            </GoogleMapReact> {
                locationInfo && < LocationInfoBox info = { locationInfo }
                />} 
              </div>
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