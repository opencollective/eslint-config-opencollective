import fs from 'fs';

export function readConfig(path: string): string {
  return fs.readFileSync(path, 'utf8');
}
