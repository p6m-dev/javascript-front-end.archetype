import { graphql } from 'msw';
import { ContentEntry } from '@{{package-name}}/models';

export const contentMock: ContentEntry = {
  id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  slug: 'home',
  title: 'Home',
};

/**
 * Mock the content entries query
 */
export const mockGetContents = graphql.query('contents', (_, res, ctx) => {
  return res(
    ctx.data({
      contents: contentMock,
    })
  );
});

/**
 * Mock the content query
 */
export const mockGetContent = graphql.query('content', (_, res, ctx) => {
  return res(
    ctx.data({
      content: contentMock,
    })
  );
});

export const handlers = [mockGetContents, mockGetContent];
