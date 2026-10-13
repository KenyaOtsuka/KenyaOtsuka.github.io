# kenyaotsuka.github.io

Personal homepage of Kenya Otsuka. Built with [Astro](https://astro.build) and
deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`
(every push to `main` rebuilds and publishes the site).

## Where things live

| What to change | File |
| --- | --- |
| Papers | `src/data/publications.yaml` |
| Talks, posters | `src/data/talks.yaml` |
| Awards, grants, reviewing | `src/data/awards.yaml` |
| Software (shown on the CV page only) | `src/data/software.yaml` |
| Education | `src/data/education.yaml` |
| Intro text, nav labels, profile links incl. LinkedIn (EN + JA) | `src/site.ts` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page structure | `src/components/Home.astro`, `src/components/CV.astro`, `src/layouts/Base.astro` |

Every text field in the YAML files is bilingual: `en` is required, `ja` is
optional and falls back to `en`. Field shapes are validated by
`src/content.config.ts`; a wrong field fails the build instead of producing a
broken page. Use the exact string `Kenya Otsuka` (or `大塚健矢` in `authors_ja`)
so the name is highlighted in author lists.

## Pages

- `/` English home, `/cv/` English CV
- `/ja/` Japanese home, `/ja/cv/` Japanese CV

## Local commands

```sh
npm install
npm run build     # output in dist/
npm run dev       # live preview at http://localhost:4321
```

## Rules for content

- Only material that is already public (papers, talks, affiliations, public
  repositories) goes on this site. No job-search notes, internal memos,
  reviewing details beyond what is public, or e-mail addresses in plain text.
- Keep wording consistent with researchmap / ORCID.
