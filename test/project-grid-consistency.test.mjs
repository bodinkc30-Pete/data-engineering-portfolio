import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../moon-theme.css", import.meta.url), "utf8");

test("Moon project grid exposes GitHub repository CTA for Project 01-08", () => {
  for (let i = 1; i <= 8; i += 1) {
    const id = String(i).padStart(2, "0");
    const match = html.match(new RegExp('<article class="project-detail-' + id + '"[\\s\\S]*?<\\/article>'));
    assert.ok(match, "missing Project " + id + " card");
    assert.match(match[0], /class="card-cta project-repo-cta"/, "missing GitHub CTA on Project " + id);
    assert.match(match[0], /href="https:\/\/github\.com\/bodinkc30-Pete\//, "missing GitHub URL on Project " + id);
  }
});

test("Moon project grid locks title, copy, metrics and action rhythm on desktop", () => {
  assert.match(css, /grid-auto-rows:\s*1fr/);
  assert.match(css, /min-height:\s*2\.4em/);
  assert.match(css, /-webkit-line-clamp:\s*5/);
  assert.match(css, /> \.project-detail-metrics \{[\s\S]*?margin-top:\s*auto/);
  assert.match(css, /#projects \.project-repo-cta/);
});

test("Repository CTAs remain external while card body still opens internal detail", () => {
  const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
  assert.match(script, /a\.card-cta:not\(\.project-repo-cta\)/);
  assert.match(script, /event\.target\.closest\("a, button"\)/);
});
