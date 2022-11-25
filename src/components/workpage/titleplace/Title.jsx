import './title.css'
import saving from '../../img/SaveImg.png'
import share from '../../img/ShareIcon.png'
import ApplyButton from '../button/ApplyButton'

function Title() {
    return (
        <div className="maincontent__top">
            <div className="top__info">
                <div className="top__title">Job Details</div>
                <div className="share__save-container">
                    <div className="top__save-job">
                        <img src={saving} alt="" />
                        <span className="savejob__text">Save to my list</span>
                    </div>
                    <div className="top__share-job">
                        <img src={share} alt="" />
                        <span className="sharejob__text">Share</span>
                    </div>
                </div>
            </div>
            <div className="title__border-bottom"></div>
            <ApplyButton />
        </div>
    )
}

export default Title;