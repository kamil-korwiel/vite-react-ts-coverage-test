import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '../test.global.d.ts'


afterEach(() => {
    cleanup();
});