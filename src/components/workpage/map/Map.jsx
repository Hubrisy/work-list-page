import './Map.css';
import location from '../../img/Location.png'

function GetMap(props) {
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
                
            </div>
        </div>
    )
}

export default GetMap;