// Site-wide profile text. Everything shown on the pages that is not a list
// (publications, talks, ...) lives here. Edit this file to change wording.

export type Lang = 'en' | 'ja';

export const site = {
  url: 'https://kenyaotsuka.github.io',
  github: 'https://github.com/KenyaOtsuka',
  researchmap: 'https://researchmap.jp/kenyaotsuka',
  orcid: 'https://orcid.org/0009-0005-5714-7040',
  orcidId: '0009-0005-5714-7040',
  linkedin: 'https://jp.linkedin.com/in/kenya-otsuka', // empty hides the button
  goatcounter: 'https://kenyaotsuka.goatcounter.com/count', // privacy-friendly page-view counter; empty disables
  highlightAuthor: 'Kenya Otsuka',
  highlightAuthorJa: '大塚健矢',
};

export const t = {
  en: {
    name: 'Kenya Otsuka',
    nameSub: '大塚 健矢',
    photo: '', // e.g. '/img/photo.jpg'; leave empty to hide
    role: 'Ph.D. student, Kamitani Lab',
    description:
      'Kenya Otsuka — Ph.D. student at Kyoto University. Brain decoding and how training targets shape what a decoder learns.',
    bio: [
      'I am a Ph.D. student in the Kamitani Lab at Kyoto University. I am interested in the principles underlying intelligent systems such as brains and AI, and in how, and whether, such systems can become highly capable under limited resources.',
      'My current work centers on brain decoding, where I study how the targets in the training data shape what a decoder learns.',
    ],
    nav: { about: 'About', publications: 'Publications', talks: 'Presentations', cv: 'CV' },
    affiliation: 'Graduate School of Informatics, Kyoto University',
    buttons: { paper: 'Paper', code: 'Code', cv: 'CV' },
    langSwitch: { label: '日本語', href: '/ja/' },
    sections: {
      publications: 'Publications',
      talks: 'Presentations',
      software: 'Software',
      awards: 'Awards & Service',
      education: 'Education',
      links: 'Links',
      cv: 'Curriculum Vitae',
      pubMain: 'Journal & conference papers',
      pubWorkshop: 'Workshop papers & preprints',
    },
    selectedOnly: 'Selected',
    footer: '© {year} Kenya Otsuka',
    cvIntro: 'A concise CV. A PDF version is available on request.',
    affiliationLine: 'Graduate School of Informatics, Kyoto University · ATR',
  },
  ja: {
    name: '大塚 健矢',
    nameSub: 'Kenya Otsuka',
    photo: '',
    role: '博士後期課程 · 神谷研究室',
    description:
      '大塚健矢 — 京都大学 博士後期課程。ブレインデコーディングと、訓練データのターゲットが学習に与える影響を研究。',
    bio: [
      '京都大学 神谷研究室の博士後期課程に所属しています。脳や AI のような知的システムの内部原理を理解すること、そして限られたリソースのもとで優れた知能がどのように実現されるのか、そもそも実現できるのかに関心があります。',
      '現在はブレインデコーディングを中心に、訓練データのターゲットが学習に与える影響を研究しています。',
    ],
    nav: { about: '概要', publications: '論文', talks: '発表', cv: 'CV' },
    affiliation: '京都大学大学院 情報学研究科',
    buttons: { paper: '論文', code: 'コード', cv: 'CV' },
    langSwitch: { label: 'English', href: '/' },
    sections: {
      publications: '論文',
      talks: '研究発表',
      software: 'ソフトウェア',
      awards: '受賞・採択・査読',
      education: '学歴',
      links: 'リンク',
      cv: '経歴',
      pubMain: '論文誌・国際会議',
      pubWorkshop: 'ワークショップ・プレプリント',
    },
    selectedOnly: '主要',
    footer: '© {year} 大塚 健矢',
    cvIntro: '簡易版の経歴です。PDF 版は求めに応じて提供します。',
    affiliationLine: '京都大学大学院 情報学研究科 · ATR',
  },
} as const;

export function pick<T extends { en: string; ja?: string }>(v: T | undefined, lang: Lang): string {
  if (!v) return '';
  return lang === 'ja' && v.ja ? v.ja : v.en;
}

export function href(lang: Lang, path: string): string {
  // path like "/cv/" or "/"
  return lang === 'ja' ? `/ja${path}` : path;
}
