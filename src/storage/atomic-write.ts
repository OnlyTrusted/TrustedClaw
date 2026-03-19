import { promises as fs } from "fs";
import { join, dirname } from "path";
import { randomBytes } from "crypto";

/**
 * Atomically write data to a file by writing to a temp file, fsyncing, then renaming.
 * Ensures that readers never see a partially-written file.
 */
export async function atomicWrite(
  filePath: string,
  data: string | Buffer
): Promise<void> {
  const dir = dirname(filePath);
  const tmp = join(dir, `.tmp.${randomBytes(6).toString("hex")}`);
  await fs.mkdir(dir, { recursive: true });
  const fh = await fs.open(tmp, "w");
  try {
    await fh.writeFile(data);
    await fh.sync();
  } finally {
    await fh.close();
  }
  await fs.rename(tmp, filePath);
}
