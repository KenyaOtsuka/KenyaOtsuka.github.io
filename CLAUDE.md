# Working rules for this repository

This is the source of Kenya Otsuka's personal homepage (https://kenyaotsuka.github.io/).
The site is public, so everything committed here is public. Most changes are made by
an AI assistant on the owner's instructions; these rules keep that safe and predictable.

## Workflow

- `main` is what gets published. Never commit or push to `main` directly.
- For every change, create a branch from `main`, commit there, push, and open a pull
  request. The owner reviews and merges. Do not merge without the owner's approval.
- Keep the history clean: commit only wording the owner has already approved in
  conversation. Draft text is proposed in chat, not committed. Intermediate drafts in
  the history would stay visible forever once pushed.
- Before pushing, run `npm run build`. A failed build must not be pushed.
- When a change affects appearance, render screenshots (desktop, mobile, light and
  dark) and show them to the owner before asking for a merge.
- Commit author: `Claude <noreply@anthropic.com>` (set with `git config user.name Claude`
  and `git config user.email noreply@anthropic.com`).

## Content rules

- Publish only information that is already public: published papers, accepted
  workshop papers, conference presentations, affiliations, awards, public repositories,
  public profile links.
- Never add unpublished research results, research ideas or plans, submission status
  of unpublished work, reviewing details beyond what is public, job-search notes,
  internal memos, or anything marked internal in the owner's other repositories.
- No e-mail address in plain text.
- Keep names, titles and venues consistent with researchmap and ORCID.
- Titles and author lists of presentations stay in the language the presentation was
  given in; do not translate them.
- New wording for the bio or any prose is proposed to the owner first and committed
  only after approval.

## Where things live

| What | File |
| --- | --- |
| Bio, nav labels, profile links (EN + JA) | `src/site.ts` |
| Papers | `src/data/publications.yaml` |
| Presentations (oral, poster, invited) | `src/data/talks.yaml` |
| Awards, grants, reviewing | `src/data/awards.yaml` |
| Software (CV page only) | `src/data/software.yaml` |
| Education | `src/data/education.yaml` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page structure | `src/components/Home.astro`, `src/components/CV.astro`, `src/layouts/Base.astro` |
| Field definitions and validation | `src/content.config.ts` |

Text fields in the YAML files are bilingual: `en` is required, `ja` is optional and
falls back to `en`. The build fails on a field that does not match the schema.
