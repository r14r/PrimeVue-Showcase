import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkgPath = path.resolve(__dirname, '../package.json');

const pkgJson = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }));

// No longer syncing with monorepo-level package.json as this is now a standalone project.
fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 4) + '\n', { encoding: 'utf8' });
