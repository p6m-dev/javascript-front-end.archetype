import { fetchGraphQL } from '@nax-tech/services-content';
import { ContentEntry } from '@{{package-name}}/models';

const ENTRY_GRAPHQL_FIELDS = `
slug
title
description {
  json
}
`;

const ENTRIES_COLLECTION_NAME = 'pageCollection';

interface ContentResponse {
  [key: string]: {
    items: ContentEntry[];
  };
}

/**
 * Get all content entries
 * @returns Promise<ContentEntry>
 * @example const entries = await getContentEntries();
 */
export const getContentEntries = async (
  preview = false
): Promise<ContentEntry[]> => {
  const response = (await fetchGraphQL(
    `
      query {
        ${ENTRIES_COLLECTION_NAME} {
          items {
            ${ENTRY_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    preview
  )) as ContentResponse;
  const output = response[ENTRIES_COLLECTION_NAME].items as ContentEntry[];
  return output;
};

/**
 * Get a content by id
 * @param contentId string
 * @param context: reference to the AbortController used to abort the call (optional)
 * @returns Promise<Content>
 * @example const customer = await getCustomer(customerId);
 */
export const getContentEntryBySlug = async (
  slug: string,
  preview = false
): Promise<ContentEntry | undefined> => {
  const response = (await fetchGraphQL(
    `
      query {
        ${ENTRIES_COLLECTION_NAME}(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${ENTRY_GRAPHQL_FIELDS}
          }
        }
      }
    `,
    preview
  )) as ContentResponse;
  const output = response[ENTRIES_COLLECTION_NAME].items[0] as ContentEntry;
  return output;
};
