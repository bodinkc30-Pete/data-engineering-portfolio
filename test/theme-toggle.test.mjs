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

test("Moon blueprint uses the requested seven sidebar sections and dedicated section layouts", () => {
  const home = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../moon-theme.css", import.meta.url), "utf8");
  assert.match(home, /class="moon-about-visual moon-only"/);
  assert.match(home, /class="moon-experience-timeline moon-only"/);
  assert.match(home, /class="moon-skills-layout moon-only"/);
  assert.match(css, /side-nav-link\[data-section="proof"\][\s\S]*display:\s*none/);
  assert.match(css, /side-nav-link\[data-section="credentials"\][\s\S]*display:\s*none/);
  assert.match(css, /#capabilities \.v228-cap-grid \{ display:none/);
});

test("Moon project detail has its own sidebar and Sun-Moon switch", () => {
  const html = fs.readFileSync(new URL("../project.html", import.meta.url), "utf8");
  const js = fs.readFileSync(new URL("../project-detail.js", import.meta.url), "utf8");
  assert.match(html, /class="moon-detail-sidebar moon-only"/);
  assert.match(html, /data-project-style="sun"/);
  assert.match(html, /data-project-style="moon"/);
  assert.match(js, /applyProjectStyle/);
});
