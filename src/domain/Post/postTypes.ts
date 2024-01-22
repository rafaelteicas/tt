import {UserType} from '../User/userType';

export type PostType = {
  author: Pick<
    UserType,
    'id' | 'username' | 'profileName' | 'isVerified' | 'profileImage'
  >;
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
