import Header from './Page/global/Header';
import Home from './Page/home';
import Login from './Page/users/login';
import SignUp from './Page/users/SignUp';
import SingleQuestion from './Page/questions/qusetion-detail/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/signUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;