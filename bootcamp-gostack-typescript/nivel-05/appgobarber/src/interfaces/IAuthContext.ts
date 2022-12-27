import ISignInCredentials from './ISignInCredentials';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface IAuthContext {
  token: string;
  user: User;
  loading: boolean;
  signin(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

export default IAuthContext;
