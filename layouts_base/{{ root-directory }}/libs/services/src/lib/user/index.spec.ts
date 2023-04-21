import { setupServer } from 'msw/node';
import { init } from '@nax-tech/clients-graphql';
import { getUser, updateUser } from './';
import { userMock, mockUserHandlers } from './index.mock';
import '@testing-library/jest-dom';

const server = setupServer(...mockUserHandlers);

init('');

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('User services', () => {
  it('getUser', async () => {
    const response = await getUser();
    expect(response).toEqual(userMock);
  });

  it('updateUser', async () => {
    const response = await updateUser(userMock);
    expect(response).toEqual(userMock);
  });
});
