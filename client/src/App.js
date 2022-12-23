import Header from './Page/global/Header';
import Footer from './Page/global/Footer';
import Home from './Page/home';
import Login from './Page/users/login';
import SignUp from './Page/users/SignUp';
import SingleQuestion from './Page/questions/qusetion-detail/index';
import Questions from './Page/questions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionAsk from './Page/questions/ask/QuestionAsk';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/questions/ask" element={<QuestionAsk />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/questions/:questionId" element={<SingleQuestion />} /> {/*테스트를 위해 임의로 하드코딩된 SingleQuestion로 이동  */}
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/signUp" element={<SignUp />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
