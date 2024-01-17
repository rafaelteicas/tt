export type PostType = {
  author: {
    profileImage: string;
    profileName: string;
    username: string;
    time: string;
    isVerified: boolean;
  };
  text: string;
  media: string;
  metadata: {
    comments: string;
    shared: string;
    likes: string;
    views: string;
  };
};
