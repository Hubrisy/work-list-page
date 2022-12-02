import hospital from '../img/Hospital.png';
import location from '../img/Location.png';
import stars from '../img/FiveStars.png';
import saving from '../img/SaveImg.png';
import { Link } from 'react-router-dom';

function JobItem(props) {
    return (
        <div className="jobitem__container">
            <div className="jobitem__element">
                <div className="container__for-flex">
                    <div className="ava__container">
                        <img src={hospital} alt="ava" />
                    </div>
                    <div className="jobitem__description-block">
                        <div className="responsive__jobitem-reaction">
                            <img src={stars} alt="rate" />
                        </div>
                        <Link to={`/workpage/${props.id}`}><div className='jobitem__description' key={props.id}>{props.title}</div></Link>
                        <div className="jobitem__department-name">Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH</div>
                        <div className="jobitem__location-container">
                            <div className="location__img">
                                <img src={location} alt="location__img" />
                            </div>
                            <div className="location__country">Vienna, Austria</div>
                        </div>
                    </div>
                </div>
                <div className="jobitem__reaction-container">
                    <div className="jobitem__rate">
                        <img src={stars} alt="rate" />
                    </div>
                    <div className="jobitem__post-time">
                        <div className="save__vacancie">
                            <img src={saving} alt="save" />
                        </div>
                        <div className="posted__like">Posted 2 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobItem;