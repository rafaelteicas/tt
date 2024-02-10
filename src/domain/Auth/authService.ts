import {authAPI} from './authAPI';
import {CreateAccountType} from './authTypes';

async function signUp(data: CreateAccountType): Promise<string> {
  await authAPI.signUp(data);
}

export const authService = {
  signUp,
};
