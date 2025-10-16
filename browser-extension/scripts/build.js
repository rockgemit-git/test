import { mkdir, readdir, stat, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../src');
const targetDir = join(__dirname, '../dist');

async function copyRecursive(source, target) {
  const sourceStats = await stat(source);
  if (sourceStats.isDirectory()) {
    await mkdir(target, { recursive: true });
    const entries = await readdir(source);
    await Promise.all(
      entries.map((entry) =>
        copyRecursive(join(source, entry), join(target, entry))
      )
    );
  } else {
    await mkdir(dirname(target), { recursive: true });
    await copyFile(source, target);
  }
}

async function build() {
  await mkdir(targetDir, { recursive: true });
  await copyRecursive(sourceDir, targetDir);
  console.log(`Copied extension assets to ${targetDir}`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
