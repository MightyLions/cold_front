import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import { Navigation } from './components/organisms/Navigation';
import UserRouter from './router/UserRouter';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      {/* 권한별 라우터 정의 필요 */}
      <UserRouter />
      <Footer />
    </>
  );
};

export default App;
