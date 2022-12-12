import React, { useEffect } from 'react';
import { Container, Paper, CircularProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo, fetchUserOrders } from '../../store/slices/userSlice/userSlice';
import UserList from '../../features/User/components/UserList/UserList';
import UserHeader from '../../features/User/components/UserHeader/UserHeader';
import ButtonContainer from '../../features/User/components/ButtonContainer/ButtonContainer';

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
  const { userData, error, isLoading } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchUserOrders());
  }, []);

  return (
    <Container component={Paper} sx={containerSX}>
      {isLoading && <CircularProgress sx={preloaderSX} />}
      {userData && (
        <>
          <UserHeader userData={userData} />
          <UserList userData={userData} />
          <ButtonContainer />
        </>
      )}
      {error && (
        <Container>
          <Typography variant="h2">Error code: {error.status}</Typography>
          <Typography variant="h3">{error.statusText}</Typography>
          <Typography>Please try again later</Typography>
        </Container>
      )}
    </Container>
  );
};

export default UserPage;
