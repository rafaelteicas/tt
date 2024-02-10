import {api} from '../../api/apiConfig';
import {CreateAccountType} from './authTypes';

const SIGN_UP_PATH = '/auth/sign-up';

async function signUp(data: CreateAccountType): Promise<string> {
  const response = await api.post(SIGN_UP_PATH, data);

  return response.data;
}

export const authAPI = {
  signUp,
};
