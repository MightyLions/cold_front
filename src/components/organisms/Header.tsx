import { FormControl, InputAdornment, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const StyledHeader = styled.header`
  display: block;
  box-shadow: rgb(234, 234, 236) 0px 1px 0px;
  position: sticky;
  top: 0px;
  z-index: 100;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.72);
`;

const StyledNav = styled.nav`
  margin: auto;
  padding: 0px 1rem;
  width: auto;
  max-width: 1280px;
  height: 52px;
  min-height: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
`;

const StyledNavLeft = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
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
  transition: all 0.1s ease-out 0s;
  margin-right: 8px;
`;

const Sign = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLeft>
          <Link to={'/'}>
            <img src="/img/coldpitch_logo.png" height={23} />
          </Link>
          <FormControl>
            <TextField
              size="small"
              variant="outlined"
              placeholder="검색"
              style={{ height: 23 }}
              InputProps={{
                style: {
                  borderRadius: '20px',
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </StyledNavLeft>
        <StyledNavRight>
          <StyledMenuList></StyledMenuList>
          <Sign></Sign>
        </StyledNavRight>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
