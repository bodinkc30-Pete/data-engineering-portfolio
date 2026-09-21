import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");

test("Moon About uses domain context instead of location", () => {
  const match = html.match(/<div class="moon-about-facts moon-only">([\s\S]*?)<\/div>/);
  assert.ok(match, "Moon About facts not found");
  assert.match(match[1], /data-i18n="moon\.about\.domain"/);
  assert.match(match[1], /E-commerce \/ Marketplace \/ Operational Data/);
  assert.doesNotMatch(match[1], /contact\.locationValue/);
  assert.doesNotMatch(match[1], /Bangkok, Thailand/);
});

test("Moon About domain is translated in both language dictionaries", () => {
  assert.match(script, /TRANSLATIONS\.en\["moon\.about\.domain"\] = "E-commerce \/ Marketplace \/ Operational Data";/);
  assert.match(script, /TRANSLATIONS\.th\["moon\.about\.domain"\] = "E-commerce \/ Marketplace \/ Operational Data";/);
});
