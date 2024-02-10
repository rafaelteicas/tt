import {useMutation} from '@tanstack/react-query';
import {CreateAccountType} from '../authTypes';
import {authService} from '../authService';

export function useAuthSignUp() {
  const mutation = useMutation<string, Error, CreateAccountType>({
    mutationFn: variables => authService.signUp(variables),
    retry: false,
  });

  return {
    signUp: (signUpData: CreateAccountType) => mutation.mutate(signUpData),
  };
}
