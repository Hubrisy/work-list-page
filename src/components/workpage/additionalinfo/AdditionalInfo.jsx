import './additionalinfo.css';

function AdditionalInfo(props) {
    return (
        <div className="additional__container">
            <div className="additional__title-container">
                <span className="additional__title">Additional info</span>
                <div className="border__bottom"></div>
            </div>
            <div className="employment__type-container">
                <span className="span">Employment type</span>
                <div className="employment__type">
                    {props.employment_type.map((item,uniqId) => {
                        return (
                            <div className="employment__block" key={uniqId} >
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="benefits__description-container">
                <span>Benefits</span>
                <div className="benefits__description">
                {props.benefits.map((item,uniqId) => {
                        return (
                            <div className="benefits__block" key={uniqId}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdditionalInfo;