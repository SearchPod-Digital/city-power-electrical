import { createRequire } from "module";
const require = createRequire(import.meta.url);
const GettyImagesApi = require("gettyimages-api");
import { writeFile, mkdir } from "fs/promises";
import { existsSync, readdirSync, copyFileSync, unlinkSync } from "fs";
import https from "https";
import http from "http";

const api = new GettyImagesApi({
  apiKey: "2rjapr45sv4662w4rb39ctwz",
  apiSecret: "gMmewAxn7wm9xXryYRpV",
  username: "info@searchpod.com",
  password: "Qv9@zL#81mTx!P3r",
});

const searches = [
  { query: "electrician working", file: "hero-electrician.jpg" },
  { query: "modern lighting", file: "hero-lighting.jpg" },
  { query: "electrician safety", file: "feature-licensed.jpg" },
  { query: "emergency repair", file: "feature-emergency.jpg" },
  { query: "home estimate", file: "feature-pricing.jpg" },
  { query: "professional worker", file: "feature-clean.jpg" },
  { query: "ev charger", file: "service-ev.jpg" },
  { query: "electrical panel", file: "service-panel.jpg" },
  { query: "kitchen lighting", file: "service-lighting.jpg" },
  { query: "smart home", file: "service-smart.jpg" },
  { query: "swimming pool", file: "service-pool.jpg" },
  { query: "commercial building", file: "service-commercial.jpg" },
  { query: "electrician portrait", file: "about-electrician.jpg" },
  { query: "toronto skyline", file: "about-toronto.jpg" },
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

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const outDir = "public/images/home2";
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

  for (const { query, file } of searches) {
    const outPath = `${outDir}/${file}`;

    try {
      console.log(`\nSearching: "${query}"...`);
      const result = await api
        .searchimagescreative()
        .withPhrase(query)
        .withSortOrder("best_match")
        .withPageSize(3)
        .execute();

      if (!result.images || result.images.length === 0) {
        console.log(`  No results`);
        continue;
      }

      let downloaded = false;
      for (const img of result.images) {
        console.log(`  Trying image ${img.id}...`);
        try {
          const dlResult = await api
            .downloadsimages()
            .withId(img.id)
            .withProductType("royaltyfreesubscription")
            .execute();

          if (dlResult.uri) {
            console.log(`  Downloading licensed image...`);
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
          if (dlErr.statusCode === 429) {
            console.log("  Rate limited — waiting 10s...");
            await sleep(10000);
          }
        }
      }
      if (!downloaded) console.log(`  Could not download for "${query}"`);

      // Small delay between searches to avoid rate limits
      await sleep(1500);
    } catch (err) {
      console.error(`  Search error:`, err.message || err);
      if (err.message?.includes("Too Many")) {
        console.log("  Rate limited — waiting 15s...");
        await sleep(15000);
      }
    }
  }

  // Copy to home5
  console.log("\nCopying to home5...");
  const home5Dir = "public/images/home5";
  if (!existsSync(home5Dir)) await mkdir(home5Dir, { recursive: true });
  for (const f of readdirSync(outDir)) {
    const dest = `${home5Dir}/${f}`;
    if (existsSync(dest)) unlinkSync(dest);
    copyFileSync(`${outDir}/${f}`, dest);
    console.log(`  Copied ${f}`);
  }

  console.log("\nDone!");
}

main().catch(console.error);
