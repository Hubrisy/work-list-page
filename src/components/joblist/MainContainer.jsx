import './components.css';
import GetListData from '../GetListData';
import { Route, Routes } from 'react-router-dom';
import WorkPage from '../workpage/WorkPage';

function MainContainer() {
    return (
        <div className="main__container">
            <div className="jobitem__block">
                <Routes>
                    <Route path="/" element={<GetListData />}></Route>
                    <Route path="/worklist" element={<GetListData />}></Route>
                </Routes>
            </div>
            <Routes >
                <Route path="/workpage/:id" element={<WorkPage />}></Route>
            </Routes>
        </div>
    )
}

export default MainContainer;