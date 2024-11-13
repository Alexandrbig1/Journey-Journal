export type AuthCredentials = {
  email: string;
  password: string;
};

export type RegistrationCredentials = {
  email: string;
  image: string;
  name: string;
  password: string;
};

export type User = {
  userId: string;
  name: string;
  email: string;
  image: string;
};
