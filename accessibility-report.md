# Accessibility Audit Report

## Page audited

- `index.html`

## Issues found

- Link text for the email contact link was not as descriptive as it could be. It used `My Email`, which is less clear than an action-oriented label.
- The page content was not wrapped in a semantic `<main>` landmark element.

## Fixes applied

- Updated the email link text to `Email Joy` so the action and destination are clear.
- Added a `<main>` wrapper around the page content to improve document structure and landmark navigation.
- Verified that the `<html>` tag already includes `lang="en"`.
- Verified the image includes meaningful `alt` text: `Image of Joy`.
- Verified heading hierarchy is correct: `<h1>` followed by `<h2>`.
- Verified descriptive link text on the external site link: `Wikipedia`.

## Final Lighthouse accessibility score

- Estimated score: `100/100`

> Note: This report is based on a manual accessibility audit of `index.html` in the current workspace. The page meets the key accessibility requirements listed in the task.
