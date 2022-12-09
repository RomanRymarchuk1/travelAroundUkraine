import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AlertModal } from '..';
import { toggleIsModalOpen, toggleIsLogin } from '../../store/slices/userSlice/userSlice';

const LogOutModal = () => {
  const { isModalOpen } = useSelector((store) => store.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleIsModalOpen());
  };

  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(toggleIsLogin());
    navigate('/');
  };

  return (
    <AlertModal
      open={isModalOpen}
      onSubmit={() => logOut()}
      onClose={closeModal}
      title="Confirm your actions"
      submitButtonText="Log Out"
    >
      Are you sure you want to log out of your account?
    </AlertModal>
  );
};

export default LogOutModal;
