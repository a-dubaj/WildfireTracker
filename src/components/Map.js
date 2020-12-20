import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
    return( 
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{key:
            '##############'}} // API key
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact> 
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