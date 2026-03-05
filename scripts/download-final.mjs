import { createRequire } from "module";
const require = createRequire(import.meta.url);
const GettyImagesApi = require("gettyimages-api");
import { writeFile, mkdir, rm } from "fs/promises";
import { existsSync, readdirSync, copyFileSync, unlinkSync } from "fs";
import https from "https";
import http from "http";

const api = new GettyImagesApi({
  apiKey: "2rjapr45sv4662w4rb39ctwz",
  apiSecret: "gMmewAxn7wm9xXryYRpV",
  username: "info@searchpod.com",
  password: "Qv9@zL#81mTx!P3r",
});

// Better, more specific search terms for an electrical contractor website
const searches = [
  { query: "electrician electrical panel residential", file: "hero-electrician.jpg" },
  { query: "modern home recessed lighting ceiling", file: "hero-lighting.jpg" },
  { query: "electrician hard hat safety vest working", file: "feature-licensed.jpg" },
  { query: "electrician emergency night flashlight", file: "feature-emergency.jpg" },
  { query: "electrician explaining homeowner clipboard", file: "feature-pricing.jpg" },
  { query: "electrician tidy clean work boots home", file: "feature-clean.jpg" },
  { query: "electric vehicle charger home garage wall", file: "service-ev.jpg" },
  { query: "circuit breaker panel box close up", file: "service-panel.jpg" },
  { query: "modern kitchen pendant lighting interior", file: "service-lighting.jpg" },
  { query: "smart home tablet app control lights", file: "service-smart.jpg" },
  { query: "backyard pool night underwater lighting", file: "service-pool.jpg" },
  { query: "commercial office building electrical wiring", file: "service-commercial.jpg" },
  { query: "confident electrician arms crossed portrait", file: "about-electrician.jpg" },
  { query: "toronto skyline night downtown", file: "about-toronto.jpg" },
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const outDir = "public/images/home2";

  // Delete all old images first
  if (existsSync(outDir)) {
    for (const f of readdirSync(outDir)) {
      unlinkSync(`${outDir}/${f}`);
      console.log(`Deleted old: ${f}`);
    }
  } else {
    await mkdir(outDir, { recursive: true });
  }

  for (const { query, file } of searches) {
    const outPath = `${outDir}/${file}`;

    try {
      console.log(`\nSearching: "${query}"...`);
      const result = await api
        .searchimagescreative()
        .withPhrase(query)
        .withSortOrder("best_match")
        .withOrientation("horizontal")
        .withPageSize(5)
        .execute();

      if (!result.images || result.images.length === 0) {
        console.log(`  No results`);
        // Fallback: try shorter query
        const short = query.split(" ").slice(0, 2).join(" ");
        console.log(`  Retrying with: "${short}"`);
        const retry = await api
          .searchimagescreative()
          .withPhrase(short)
          .withSortOrder("best_match")
          .withOrientation("horizontal")
          .withPageSize(5)
          .execute();
        if (!retry.images || !retry.images.length) {
          console.log(`  Still no results, skipping`);
          continue;
        }
        result.images = retry.images;
      }

      let downloaded = false;
      for (const img of result.images) {
        try {
          // Download at "large" size (approx 2000px wide) — sharp but not bloated
          const dlResult = await api
            .downloadsimages()
            .withId(img.id)
            .withProductType("royaltyfreesubscription")
            .withHeight(1416)
            .execute();

          if (dlResult.uri) {
            const buf = await downloadUrl(dlResult.uri);
            // Verify it's a valid JPEG
            if (buf.length > 50000 && buf[0] === 0xFF && buf[1] === 0xD8) {
              await writeFile(outPath, buf);
              console.log(`  SAVED: ${file} (${(buf.length / 1024).toFixed(0)} KB) — ID: ${img.id}`);
              downloaded = true;
              break;
            } else {
              console.log(`  Not a valid JPEG, trying next...`);
            }
          }
        } catch (dlErr) {
          if (dlErr.statusCode === 429) {
            console.log("  Rate limited — waiting 10s...");
            await sleep(10000);
          }
        }
      }
      if (!downloaded) console.log(`  Failed for "${query}"`);
      await sleep(1500);
    } catch (err) {
      console.error(`  Error:`, err.message || err);
      if (String(err.message).includes("Too Many")) {
        console.log("  Waiting 15s...");
        await sleep(15000);
      }
    }
  }

  // Copy to home5, clearing old ones first
  console.log("\nSyncing to home5...");
  const home5Dir = "public/images/home5";
  if (existsSync(home5Dir)) {
    for (const f of readdirSync(home5Dir)) unlinkSync(`${home5Dir}/${f}`);
  } else {
    await mkdir(home5Dir, { recursive: true });
  }
  for (const f of readdirSync(outDir)) {
    copyFileSync(`${outDir}/${f}`, `${home5Dir}/${f}`);
    console.log(`  Copied ${f}`);
  }

  // Show total size
  let total = 0;
  for (const f of readdirSync(outDir)) {
    const stat = require("fs").statSync(`${outDir}/${f}`);
    total += stat.size;
  }
  console.log(`\nTotal image size: ${(total / 1024 / 1024).toFixed(1)} MB`);
  console.log("Done!");
}

main().catch(console.error);
