import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("sidebar exposes Sun and Moon appearance controls", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /class="theme-panel appearance-panel"/);
  assert.match(html, /data-style-option="sun"/);
  assert.match(html, /data-style-option="moon"/);
  assert.match(html, /data-i18n="appearance\.sun"/);
  assert.match(html, /data-i18n="appearance\.moon"/);
});

test("style choice persists and Moon has a dedicated presentation layer", () => {
  const js = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../moon-theme.css", import.meta.url), "utf8");
  assert.match(js, /portfolio-style/);
  assert.match(js, /document\.documentElement\.dataset\.style/);
  assert.match(css, /html\[data-style="moon"\] body/);
  assert.match(css, /Moon Design Mode/);
});

test("Moon mode adds education, project filters, and persists on project detail pages", () => {
  const home = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const detail = fs.readFileSync(new URL("../project.html", import.meta.url), "utf8");
  assert.match(home, /id="education"/);
  assert.match(home, /data-project-filter="cloud"/);
  assert.match(home, /data-project-groups="cloud sql orchestration"/);
  assert.match(detail, /portfolio-style/);
  assert.match(detail, /moon-theme\.css/);
});
