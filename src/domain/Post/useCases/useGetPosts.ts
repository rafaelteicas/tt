import {postMock} from '../postMock';
import {PostType} from '../postTypes';

export function useGetPosts(): PostType[] {
  return postMock;
}
