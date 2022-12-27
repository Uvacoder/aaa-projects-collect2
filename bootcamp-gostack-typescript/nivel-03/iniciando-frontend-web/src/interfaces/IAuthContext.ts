import ISignInCredentials from './ISignInCredentials';

interface IAuthContext {
  user: any;
  signin(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export default IAuthContext;
