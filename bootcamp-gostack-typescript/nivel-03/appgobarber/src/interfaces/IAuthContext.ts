import ISignInCredentials from './ISignInCredentials';

interface IAuthContext {
  user: any;
  loading: boolean;
  signin(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export default IAuthContext;
