import './map.css';
import location from '../../img/Location.png';
import { Map, GoogleApiWrapper } from 'google-map-react';
import GetMap from './GetMap';

function MapContainer(props) {
    return (
        <div className="map__container">
            <div className="location__info-container">
                <div className="location__block">
                    <div className="location__name-block">
                        <span> Department name.</span>
                        <div>{props.name}.</div>
                    </div>
                    <div className="location__address-block">
                        <img src={location} alt="" />
                        <span>{props.address}</span>
                    </div>
                    <div className="location__contacts-block">
                        <div>{props.phone},</div>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>
            <div className="map__block">
                <GetMap location={props.location} />
            </div>
        </div>
    )
}

export default MapContainer;