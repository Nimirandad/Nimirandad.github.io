const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export const cvPath = withBase('cv/Nicolas-Miranda-Delgado-CV.pdf');
