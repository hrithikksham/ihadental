export interface Doctor {
  id: string;

  name: string;

  designation: string;

  specialty: string;

  qualification: string;

  experience: number;

  image: string;

  bio: string;

  languages?: string[];

  profileUrl?: string;
}