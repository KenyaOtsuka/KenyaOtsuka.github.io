import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Bilingual string: `en` is required, `ja` falls back to `en` when omitted.
const bi = z.object({ en: z.string(), ja: z.string().optional() });

const link = z.object({
  label: z.string(),
  url: z.string().url(),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: bi,
    authors: z.array(z.string()), // use "Kenya Otsuka" exactly to get it highlighted
    authors_ja: z.array(z.string()).optional(), // optional Japanese author list (highlight: "大塚健矢")
    venue: bi,
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint']),
    note: bi.optional(),
    links: z.array(link).default([]),
    selected: z.boolean().default(false),
    short: z.string().optional(), // short venue label for the thumbnail tile, e.g. "TMLR"
    image: z.string().optional(), // path under public/, e.g. "/img/odc.png" (4:3 works best)
  }),
});

// Oral presentations only. Title and authors are kept in the language the
// talk was given in, on both the English and Japanese pages.
const talks = defineCollection({
  loader: file('src/data/talks.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    event: bi,
    date: bi, // free text, e.g. "Sep 2024" / "2024年9月"
    year: z.number().int(),
    format: z.enum(['oral', 'poster', 'invited']).default('oral'),
    note: bi.optional(),
    links: z.array(link).default([]),
    short: z.string().optional(),
    image: z.string().optional(),
  }),
});

const awards = defineCollection({
  loader: file('src/data/awards.yaml'),
  schema: z.object({
    title: bi,
    org: bi.optional(),
    year: z.number().int(),
    kind: z.enum(['award', 'grant', 'service']),
  }),
});

const software = defineCollection({
  loader: file('src/data/software.yaml'),
  schema: z.object({
    name: z.string(),
    role: bi,
    description: bi,
    url: z.string().url(),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.yaml'),
  schema: z.object({
    period: bi,
    degree: bi,
    institution: bi,
    note: bi.optional(),
  }),
});

export const collections = { publications, talks, awards, software, education };
