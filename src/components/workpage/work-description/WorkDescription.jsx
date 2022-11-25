import './workdescription.css'
import ApplyButton from '../button/ApplyButton';

function WorkDescription(props) {
    return (
        <div className="descrip__container">
            <div className="description__title-container">
                <div className="description__title">
                    {props.title}
                    <div className="description__subtitle">
                        <div>
                            Posted 2 days ago
                        </div>
                        <div className="responsive__salary-block">
                            <span>{props.salary}</span>
                            <div>
                                Brutto, per year
                            </div>
                        </div>
                    </div>
                </div>
                <div className="salary__block">
                    {props.salary}
                    <div>
                        Brutto, per year
                    </div>
                </div>
            </div>
            <div className="descrip__main-text" >
                {props.description.split(/[.,:]/).map((item, uniqId) => {
                    if (item.includes('Responsopilities')) {
                        return (
                            <div className="subtitle__text" key={uniqId}>{item}:</div>
                        )
                    } else if (item.includes('Compensation & Benefits')) {
                        return <div className="subtitle__text" key={uniqId}>{item}:</div>
                    } else {
                        return <span className="text__item" key={uniqId}>{item}.</span>
                    }
                })}
            </div>
            <ApplyButton />
        </div>
    )
}

export default WorkDescription;