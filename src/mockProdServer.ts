// mockProdServer.ts
// https://github.com/vbenjs/vite-plugin-mock

// @ts-ignore
import {createProdMockServer} from 'vite-plugin-mock/client';

// Import your mock .ts files one by one
// If you use vite.mock.config.ts, just import the file directly
// You can use the import.meta.glob function to import all
import book from '../mock/book';

export function setupProdMockServer() {
  createProdMockServer([
    book,
  ]);
}
