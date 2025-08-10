export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  preview: string;
  github: string;
}
