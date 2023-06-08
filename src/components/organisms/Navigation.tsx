import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={''}>Main</Link>
            <Link to={'/hello'}>Hello</Link>
            <Link to={'/home'}>Home</Link>
            <Link to={'/login'}>login</Link>
            <Link to={'/mypage'}>mypage</Link>
            <Link to={'/registration'}>register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
