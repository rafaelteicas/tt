import {PostType} from './postTypes';

export const postMock: PostType[] = [
  {
    author: {
      username: '@rafaelcastro',
      profileName: 'Rafa Castro',
      isVerified: true,
      profileImage:
        'https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg',
      time: '',
    },
    metadata: {
      comments: '100+',
      likes: '100+',
      shared: '100+',
      views: '100+',
    },
    text: 'Fala galera, essa é mais um post do nosso tt',
  },
  {
    author: {
      username: '@rafaelcastro',
      profileName: 'Rafa Castro',
      isVerified: true,
      profileImage:
        'https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg',
      time: '',
    },
    metadata: {
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
