import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const index = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");

test("experience describes reporting support without claiming dashboard ownership", () => {
  assert.match(index, /Reporting Data Preparation &amp; Stakeholder Support/);
  assert.match(script, /reporting-ready outputs to support dashboards, reports, presentations/);
  assert.match(script, /การเตรียมข้อมูลสำหรับ Reporting และการสนับสนุน Stakeholder/);
  assert.doesNotMatch(script, /Prepared monthly performance reports, presentation decks, dashboards/);
  assert.doesNotMatch(script, /แปลงข้อมูล campaign และ commerce เป็น insight, dashboard, presentation/);
});
