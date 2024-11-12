export interface User {
  [key: string]: {
    name: string;
    email: string;
    password: string;
    image: string;
    loggedIn: boolean;
  };
}

export interface Post {
  [key: string]: {
    owner: string;
    image: string;
    title: string;
    comments: [];
    location: string;
  };
}
