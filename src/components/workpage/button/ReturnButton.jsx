import './button.css'
import arrow from '../../img/Arrow.png'

function ReturnButton(){
    return (
        <div className="return__container">
            <button>
                <img src={arrow} alt="" />
                <span>RETURN TO JOB BOARD</span>
            </button>
        </div>
    )
}

export default ReturnButton;