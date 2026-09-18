# Portfolio Evidence Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a privacy-safe, bilingual evidence gallery to all eight project detail pages.

**Architecture:** Keep evidence metadata in `project-detail.js`, render a shared gallery/modal in `project.html`, and style it in `project-detail.css`. Store static synthetic/sanitized SVG examples under `assets/evidence/`.

**Tech Stack:** HTML, CSS, browser JavaScript, SVG, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-18-portfolio-evidence-gallery-design.md`

## Global Constraints

- Never publish raw RaveUp or personal data.
- Every evidence item must visibly identify synthetic/sanitized portfolio evidence.
- Keep English and Thai copy in the existing language model.
- Preserve separate GitHub repository links.

---

### Task 1: Add failing evidence coverage

**Files:**
- Create: `test/project-evidence-gallery.test.mjs`

- [ ] **Step 1: Write tests for the evidence contract.** Assert eight project ids exist, each has two to four evidence items, every item has a file/title/caption/label, and every referenced file exists.

- [ ] **Step 2: Run the new test.**

Run: `node --test test/project-evidence-gallery.test.mjs`

Expected: FAIL because the evidence property and assets do not exist yet.

### Task 2: Create safe evidence assets

**Files:**
- Create: `assets/evidence/project-01/*.svg` through `assets/evidence/project-08/*.svg`

- [ ] **Step 1: Create two to four small SVG assets per project.** Use only synthetic row values, generic ids, aggregate counts, schemas, flow diagrams, test summaries, and clearly visible `SYNTHETIC / SANITIZED` labels.

- [ ] **Step 2: Run the asset existence test.**

Run: `node --test test/project-evidence-gallery.test.mjs`

Expected: FAIL only on missing metadata.

### Task 3: Add bilingual metadata and rendering

**Files:**
- Modify: `project-detail.js`
- Modify: `project.html`
- Modify: `project-detail.css`

- [ ] **Step 1: Add evidence metadata.** Define `evidence` arrays for all eight projects with the matrix in the spec and bilingual copy.

- [ ] **Step 2: Render the gallery.** Add a gallery section after delivered work and before tools. Render cards from metadata, with alt text and an evidence label.

- [ ] **Step 3: Implement modal behavior.** Open from card click or Enter/Space, close from close button/Escape/backdrop, and return focus to the originating card.

- [ ] **Step 4: Style responsive layout.** Use a two-to-four card desktop grid and a one-column mobile layout; prevent clipped captions.

- [ ] **Step 5: Run focused tests.**

Run: `node --check project-detail.js && node --test test/project-evidence-gallery.test.mjs test/project-detail-pages.test.mjs`

Expected: PASS.

### Task 4: Regression verification

**Files:**
- Modify: `test/project-detail-pages.test.mjs` if needed for gallery assertions.

- [ ] **Step 1: Run the complete suite.**

Run: `node --test test/*.test.mjs`

Expected: all tests pass with zero failures.

- [ ] **Step 2: Review the diff.** Confirm no raw RaveUp data, no credential-like values, no removed GitHub links, and no references to unverified production deployment.

- [ ] **Step 3: Commit.**

```bash
git add project.html project-detail.js project-detail.css assets/evidence test
git commit -m "feat: add privacy-safe project evidence galleries"
```
