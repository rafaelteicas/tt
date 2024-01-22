import {UserType} from '../User/userType';

export type PostType = {
  author: UserType;
  text: string;
  media?: {
    uri: string | string[];
    height?: number;
  };
  metadata: {
    time: string;
    comments: string;
    shared: string;
    likes: string;
    views: string;
  };
};
