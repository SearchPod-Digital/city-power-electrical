import { createRequire } from "module";
const require = createRequire(import.meta.url);
const GettyImagesApi = require("gettyimages-api");
import { writeFile, mkdir } from "fs/promises";
import { existsSync, unlinkSync } from "fs";
import https from "https";
import http from "http";

const api = new GettyImagesApi({
  apiKey: "2rjapr45sv4662w4rb39ctwz",
  apiSecret: "gMmewAxn7wm9xXryYRpV",
  username: "info@searchpod.com",
  password: "Qv9@zL#81mTx!P3r",
});

const searches = [
  { query: "team electricians professional group hard hat smiling construction", file: "hero-electrician.jpg" },
  { query: "electrician inspecting electrical panel certificate clipboard safety", file: "feature-licensed.jpg" },
];

function downloadUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    mod.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function main() {
  const outDir = "public/images";
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

  for (const { query, file } of searches) {
    const outPath = `${outDir}/${file}`;
    try {
      console.log(`\nSearching: "${query}"...`);
      const result = await api
        .searchimagescreative()
        .withPhrase(query)
        .withSortOrder("best_match")
        .withPageSize(5)
        .execute();

      if (!result.images || result.images.length === 0) { console.log("  No results"); continue; }

      let downloaded = false;
      for (const img of result.images) {
        console.log(`  Trying image ${img.id} — ${img.title || ""}...`);
        try {
          const dlResult = await api.downloadsimages().withId(img.id).withProductType("royaltyfreesubscription").execute();
          if (dlResult.uri) {
            const buf = await downloadUrl(dlResult.uri);
            if (buf.length > 50000) {
              if (existsSync(outPath)) unlinkSync(outPath);
              await writeFile(outPath, buf);
              console.log(`  SAVED: ${file} (${(buf.length / 1024 / 1024).toFixed(1)} MB)`);
              downloaded = true;
              break;
            }
          }
        } catch (dlErr) {
          console.log(`  Download error (${dlErr.statusCode || "?"})`);
          if (dlErr.statusCode === 429) { await sleep(10000); }
        }
      }
      if (!downloaded) console.log(`  Could not download for "${query}"`);
      await sleep(1500);
    } catch (err) {
      console.error(`  Search error:`, err.message || err);
    }
  }
  console.log("\nDone!");
}

main().catch(console.error);
