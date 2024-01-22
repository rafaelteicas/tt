export type PostType = {
  author: {
    profileImage: string;
    profileName: string;
    username: string;
    time: string;
    isVerified: boolean;
  };
  text: string;
  media?: {
    uri: string | string[];
    height?: number;
  };
  metadata: {
    comments: string;
    shared: string;
    likes: string;
    views: string;
  };
};
