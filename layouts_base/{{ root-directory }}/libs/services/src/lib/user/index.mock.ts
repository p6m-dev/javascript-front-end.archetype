import { graphql } from 'msw';
import { User } from '@{{package-name}}/models';

export const userMock: User = {
  id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  firstName: 'John',
  lastName: 'Doe',
};

/**
 * Mock the user query
 */
export const mockGetUser = graphql.query('user', (_, res, ctx) => {
  return res(
    ctx.data({
      user: userMock,
    })
  );
});

/**
 * Mock the user mutation
 */
export const mockUpdateUser = graphql.mutation('updateUser', (_, res, ctx) => {
  return res(
    ctx.data({
      updateUser: userMock,
    })
  );
});

export const mockUserHandlers = [mockGetUser, mockUpdateUser];
