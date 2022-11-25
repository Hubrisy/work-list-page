import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AdditionalInfo from './additionalinfo/AdditionalInfo';
import ReturnButton from './button/ReturnButton';
import MapContainer from './map/MapContainer';
import Title from './titleplace/Title';
import WorkDescription from './work-description/WorkDescription';
import './workpage.css';
import './responsive.css';
import WorkPhotos from './workphotos/WorkPhotos';

function WorkPage() {
    const { id } = useParams();
    const { data } = useSelector(state => state.common)
    const selectedWork = data.find((item) => item.id === id )
    console.log(selectedWork)
    
    return (
        <div className="workpage__container">
            <div className="maincontent__container">
                <Title />
                <WorkDescription key={selectedWork.id} description={selectedWork.description} title={selectedWork.title} salary={selectedWork.salary}/>
                <AdditionalInfo  employment_type={selectedWork.employment_type} benefits={selectedWork.benefits}/>
                <WorkPhotos  pictures={selectedWork.pictures}/>
                <ReturnButton />
            </div>
            <MapContainer name={selectedWork.name} address={selectedWork.address} phone={selectedWork.phone} email={selectedWork.email}/>
        </div>
    )
}

export default WorkPage;