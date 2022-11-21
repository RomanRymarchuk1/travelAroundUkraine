import React, { useEffect, useState } from 'react';
import { Container, Paper, CircularProgress } from '@mui/material';
import { grey } from '@mui/material/colors';
import UserList from '../../features/User/components/UserList/UserList';
import UserHeader from '../../features/User/components/UserHeader/UserHeader';
import ButtonContainer from '../../features/User/components/ButtonContainer/ButtonContainer';
import getCustomer from '../../api/getCustomer';

const containerSX = {
  display: 'block',
  marginTop: { xs: '120px', tablet: '180px' },
  py: '20px !important',
  backgroundColor: grey.A100,
  borderRadius: '20px',
  marginBottom: '100px',
};

const preloaderSX = {
  display: 'block',
  m: '15% auto',
  width: '100px !important',
  height: '100px !important',
  color: 'secondary',
};

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const res = await getCustomer();
      setUserData(res);
    };
    getUserData();
  }, []);

  if (userData) {
    return (
      <Container component={Paper} sx={containerSX}>
        <UserHeader userData={userData} />
        <UserList userData={userData} />
        <ButtonContainer />
      </Container>
    );
  }
  return (
    <Container component={Paper} sx={containerSX}>
      <CircularProgress sx={preloaderSX} />
    </Container>
  );
};

export default UserPage;
