import { setupServer } from 'msw/node';
import { getContentEntries, getContentEntryBySlug } from './';
import { contentMock, handlers } from './index.mock';
import '@testing-library/jest-dom';

const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Content services', () => {
  it('getContentEntries', async () => {
    const response = await getContentEntries();
    expect(response).toEqual(contentMock);
  });

  it('getContentEntryBySlug', async () => {
    const response = await getContentEntryBySlug('home');
    expect(response).toEqual(contentMock);
  });
});
