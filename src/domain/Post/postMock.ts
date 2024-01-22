import {userMock} from '../User/userMock';
import {PostType} from './postTypes';

export const postMock: PostType[] = [
  {
    author: {
      id: userMock.id,
      username: userMock.username,
      profileName: userMock.profileName,
      isVerified: userMock.isVerified,
      profileImage: userMock.profileImage,
    },
    metadata: {
      time: '',
      comments: '100+',
      likes: '100+',
      shared: '100+',
      views: '100+',
    },
    text: 'Fala galera, essa é mais um post do nosso tt',
  },
  {
    author: {
      id: userMock.id,
      username: userMock.username,
      profileName: userMock.profileName,
      isVerified: userMock.isVerified,
      profileImage: userMock.profileImage,
    },
    metadata: {
      time: '',
      comments: '100+',
      likes: '100+',
      shared: '100+',
      views: '100+',
    },
    text: 'Esse é o primeiro post do clone',
    media: {
      uri: 'https://uds.com.br/blog/wp-content/uploads/2022/05/desenvolvimento-de-aplicatovos-scaled.jpg',
    },
  },
];
