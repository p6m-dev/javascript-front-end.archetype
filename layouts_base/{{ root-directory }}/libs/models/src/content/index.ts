/**
 * Content entry
 */
export interface ContentEntry {
  id: string;
  slug: string;
  title?: string;
  description?: {
    json: unknown;
  };
}
