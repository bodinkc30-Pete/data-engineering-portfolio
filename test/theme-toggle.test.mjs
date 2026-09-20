import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("sidebar exposes Black and Original theme controls", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /class="theme-panel"/);
  assert.match(html, /data-theme-option="black"/);
  assert.match(html, /data-theme-option="default"/);
  assert.match(html, /data-i18n="theme\.black"/);
  assert.match(html, /data-i18n="theme\.default"/);
});

test("theme choice persists and black theme has dedicated CSS", () => {
  const js = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.match(js, /portfolio-theme/);
  assert.match(js, /document\.documentElement\.dataset\.theme/);
  assert.match(css, /html\[data-theme="black"\] body/);
  assert.match(css, /V21\.56/);
});

test("project detail pages inherit the saved theme", () => {
  const html = fs.readFileSync(new URL("../project.html", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../project-detail.css", import.meta.url), "utf8");
  assert.match(html, /portfolio-theme/);
  assert.match(css, /html\[data-theme="black"\] \.project-detail-content/);
});
