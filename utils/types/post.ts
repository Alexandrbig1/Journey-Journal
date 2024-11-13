export type PostComment = {
  id: string;
  text: string;
  date: string;
  email: string;
};
export type PostComments = [
  {
    [key: string]: PostComment;
  }
];

export type PostType = {
  id: string;
  owner: string;
  image: string;
  title: string;
  comments: PostComments;
  location: string;
  coordinates: { latitude: number; longitude: number };
};

export type PostsType = {
  id: string;
  post: PostType;
};
