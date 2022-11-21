import './button.css'
import arrow from '../../img/Arrow.png'
import {Link} from 'react-router-dom';

function ReturnButton(){
    return (
        <div className="return__container">
            <Link to="/worklist"><button>
                <img src={arrow} alt="" />
                <span>RETURN TO JOB BOARD</span>
            </button>
            </Link>
        </div>
    )
}

export default ReturnButton;