import React, { useState } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const ContainerGrid = styled(Grid)`
  background: #ffffff;
  border-radius: 5%;
  padding: 20px 5%;

  margin: 20px 5%;
  align-content: center;
  justify-self: center;
  align-items: center;
`;

const StyledGrid = styled(Grid)`
  //background: #18e3fa;
  border-radius: 5px;
  padding: 32px;
  margin: 10px;
  align-content: center;
  justify-self: center;

  text-align: center;
  align-items: center;
`;

const handleButtonClick = (url: RequestInfo | URL) => {
  // 전송할 데이터
  const data = {
    // 데이터 속성들
  };

  // POST 요청 보내기
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      // 응답 처리
    })
    .catch(() => {
      // 에러 처리
    });
};

const StyledButton = styled.a`
  padding: 10px 20px; // 패딩 설정
  margin: 3% 5px;
  background-color: ${(props) => props.color}; // 동적으로 색상 설정
  color: white;
  text-decoration: none;
  display: inline-block;
`;

const user = {
  name: 'John Doe',
  age: 25,
  email: 'johndoe@example.com',
  type: 'USER',
  profilePic:
    'https://via.placeholder.com/500x500/f8edeb/000000.png?text=placeholder', // URL of the profile picture
};

export const UserEditPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(event.target.value);
  };

  const handleRePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRePassword(event.target.value);
    setPasswordError(false);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== rePassword) {
      setPasswordError(true);
      return;
    }

    // Perform submit logic here
    console.log('Submit:', userName, password, email);
  };

  return (
    <Grid container xs={12} sm={12} md={12} lg={12}>
      <ContainerGrid container xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" gutterBottom>
            개인정보 수정하기
          </Typography>
        </Grid>

        <StyledGrid container>
          <Avatar
            sx={{
              width: { xs: 'auto', md: '200px' },
              height: { xs: 'auto', md: '200px' },
              maxWidth: '200px',
              maxHeight: '200px',
            }}
            alt="Profile Picture"
            src={user.profilePic}
          />

          <StyledButton
            color="blue"
            onClick={() => handleButtonClick('/image-upload')}>
            Upload Image
          </StyledButton>
        </StyledGrid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <form onSubmit={handleSubmit}>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="UserName"
                  defaultValue={user.name}
                  onChange={handleFirstNameChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography>회원 종류</Typography>

                <TextField disabled defaultValue={user.type} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                  required
                  error={passwordError}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="RePassword"
                  type="password"
                  value={rePassword}
                  onChange={handleRePasswordChange}
                  fullWidth
                  required
                  error={passwordError}
                  helperText={passwordError && 'Passwords do not match'}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  value={user.email}
                  onChange={handleEmailChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  관심 태그 수정
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  여기에 들어간다.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <StyledButton
                  color="skyblue"
                  onClick={() => handleButtonClick('/save')}>
                  Save
                </StyledButton>
                <StyledButton color="gray" href="/mypage">
                  뒤로가기
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </ContainerGrid>
    </Grid>
  );
};
