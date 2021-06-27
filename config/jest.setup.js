import 'regenerator-runtime/runtime.js';
import '@testing-library/jest-dom/extend-expect';
// import 'whatwg-fetch';
import fetch from 'node-fetch';
globalThis.fetch = fetch;
import { server } from '../__mocks__/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
