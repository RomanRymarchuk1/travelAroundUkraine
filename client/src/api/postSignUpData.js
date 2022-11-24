import axios from 'axios';

const postSignUpData = async ({
  firstName,
  lastName,
  login,
  email,
  password,
  telephone,
  birthdate,
  gender,
  avatarUrl,
}) => {
  const body = { firstName, lastName, login, email, password, telephone, birthdate, gender, avatarUrl };
  try {
    const { status } = await axios.post('/customers', body);

    const isSuccess = status === 200;

    return { isSuccess };
  } catch (err) {
    return { isSuccess: false, error: err.response.data };
  }
};

export default postSignUpData;
