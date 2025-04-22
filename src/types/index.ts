export interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
}

export type ThemeMode = 'dark' | 'light';

export interface SkillData {
  name: string;
  color?: string;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  success: boolean;
  message: string;
}