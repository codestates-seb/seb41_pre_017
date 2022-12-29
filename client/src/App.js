import Header from './Page/global/Header';
import Footer from './Page/global/Footer';
import Home from './Page/home';
import Login from './Page/users/login';
import SignUp from './Page/users/SignUp';
import SingleQuestion from './Page/questions/qusetion-detail';
import Questions from './Page/questions/questionList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionAsk from './Page/questions/ask';
import EditPage from './Page/questions/qusetion-detail/editPage';
import Profile from './Page/users/profile';
import UserList from './Page/users/userList';

import { CookiesProvider } from 'react-cookie';

function App() {
    return (
        <div className="App">
            <CookiesProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/questions/ask" element={<QuestionAsk />} />
                        <Route path="/questions" element={<Questions />} />
                        <Route path="/questions/:questionId" element={<SingleQuestion />} />
                        <Route path="/questions/edit/:category/:id" element={<EditPage />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/users/login" element={<Login />} />
                        <Route path="/users/signUp" element={<SignUp />} />
                        <Route path="/users/profile" element={<Profile />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CookiesProvider>
        </div>
    );
}

export default App;
