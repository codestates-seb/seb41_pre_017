import Header from './Page/global/Header';
import Home from './Page/home';
import Login from './Page/users/login';
import SignUp from './Page/users/SignUp';
import SingleQuestion from './Page/questions/qusetion-detail/index';
import Questions from './Page/questions';
import AskModiView from './Page/questions/qusetion-detail/AskModiView';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questions/ask" element={<AskModiView />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/questions/1" element={<SingleQuestion />} /> {/*테스트를 위해 임의로 하드코딩된 SingleQuestion로 이동  */}
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/signUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
