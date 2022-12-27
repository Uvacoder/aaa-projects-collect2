import ISignInCredentials from './ISignInCredentials';

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface IAuthContext {
  user: IUser;
  token: string;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

export default IAuthContext;
