import './map.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function GetMap(props) {
    return (
        <Map
            google={props.google}
            style = {{width: '402px', height: '218px', borderRadius: ' 0 0 8px 8px '}}
            zoom={4}
            initialCenter={
                {
                    lat: 9.804124,
                    lng: 147.139488,
                }
            } />
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCnV4izXxGHdn24v35DWnYqt1mLxiuNEbo"
})(GetMap);