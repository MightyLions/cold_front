import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../atoms/SearchInput';
import { useMemo, useState } from 'react';

const StyledHeader = styled.header`
  display: block;
  border-bottom: 2px solid #0648D9;
  position: sticky;
  top: 0px;
  z-index: 100;
  width: 100%;
  background-color: white;
`;

const StyledNav = styled.nav`
  margin: auto;
  padding: 0px 1rem;
  width: auto;
  max-width: 1280px;
  height: 52px;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledNavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-right: 0.25rem;
`;

const StyledNavRight = styled.div`
  width: auto;
  display: block;
`;

const StyledMenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Sign = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBox = styled.div`
  width: 100%;
  display: block;
`;

const SearchContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 1.5rem;
  max-width: 192px;
  transition: all 0.2s ease-out 0s;
`;

const MMenuList = styled.div``;

const MenuItem = styled(Link)`
  color: #0648D9;
  font-weight: bold;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const changeWidthSize = () => {
    setWidth(window.innerWidth);
  };

  useMemo(() => {
    window.addEventListener('resize', changeWidthSize);
    return () => {
      window.removeEventListener('resize', changeWidthSize);
    };
  }, []);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLeft>
          <Link to="/">
            <img src="/img/logo.png" height={27} alt="로고" style={{ margin: '0 10px' }} />
          </Link>
          <SearchInput />
        </StyledNavLeft>

        <StyledNavRight>
          {width > 991 ? (
            <StyledMenuList>
              <MenuItem to={'/home'}>Post</MenuItem>
              <MenuItem to={'/mypage'}>My</MenuItem>
              <MenuItem to={''}>Hot</MenuItem>
              <MenuItem to="/solution">Solution</MenuItem>
              <Sign />
            </StyledMenuList>
          ) : (
            <MMenuList>teststet</MMenuList>
          )}
        </StyledNavRight>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
