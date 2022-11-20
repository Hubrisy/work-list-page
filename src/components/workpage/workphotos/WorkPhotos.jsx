import './workphotos.css';

function WorkPhotos(props){
    return (
        <div className="workphotos__container">
            <span>Attached images</span>
            <div className="border__bottom"></div>
            <div className="workphotos__gallery">
                {props.pictures.map((item,newid) => {
                    return (
                        <div className="gallery__block" key={newid}>
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkPhotos;