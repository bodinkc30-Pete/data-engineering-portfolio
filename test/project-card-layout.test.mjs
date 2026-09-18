import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("Project 05 uses the standard single-column desktop card layout", () => {
  const css = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

  assert.match(
    css,
    /PROJECT 05 CARD NORMALIZATION[\s\S]*?\.v213-projects \.project-detail-05\s*\{[\s\S]*?grid-column:\s*auto\s*!important;[\s\S]*?width:\s*auto\s*!important;[\s\S]*?max-width:\s*none\s*!important;/,
  );
});
