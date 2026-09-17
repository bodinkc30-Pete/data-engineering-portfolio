import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("engineering proof includes CI/CD and reproducibility evidence", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");

  assert.match(html, /<span class="proof-icon pink">CI<\/span>[\s\S]*?data-i18n="proof\.cicd\.title"/);
  assert.match(script, /"proof\.cicd\.title"/);
  assert.match(script, /"proof\.cicd\.text"/);
});

test("capabilities cover proven observability and cloud infrastructure work", () => {
  const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");

  assert.match(html, /<span class="cap-icon orange">MON<\/span>[\s\S]*?data-i18n="cap\.reliability\.title"/);
  assert.match(html, /<span class="cap-icon cyan">CLD<\/span>[\s\S]*?data-i18n="cap\.cloud\.title"/);
  assert.match(script, /"cap\.reliability\.title"/);
  assert.match(script, /"cap\.cloud\.title"/);
});

test("desktop capability layout reserves a balanced third row for the two new cards", () => {
  const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

  assert.match(css, /\.v228-capabilities\s*\{[\s\S]*?aspect-ratio:\s*1916\s*\/\s*1045/);
  assert.match(css, /\.v228-cap-grid article:nth-child\(9\)\{[^}]*grid-column:\s*1\s*\/\s*span\s*2/);
  assert.match(css, /\.v228-cap-grid article:nth-child\(10\)\{[^}]*grid-column:\s*3\s*\/\s*span\s*2/);
});

test("capability rows reserve enough height for every visible line of text", () => {
  const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

  assert.match(css, /\.v228-capabilities\s*\{[\s\S]*?aspect-ratio:\s*1916\s*\/\s*1150/);
  assert.match(css, /\.v228-cap-grid\s*\{[\s\S]*?grid-template-rows:\s*12\.50cqw\s+13\.50cqw\s+12\.50cqw\s*!important;/);
  assert.match(css, /\.v228-cap-grid article:nth-child\(-n\+4\)\s*\{[\s\S]*?height:\s*12\.50cqw\s*!important;/);
  assert.match(css, /\.v228-cap-grid article:nth-child\(n\+5\):nth-child\(-n\+8\)\s*\{[\s\S]*?height:\s*13\.50cqw\s*!important;/);
});
