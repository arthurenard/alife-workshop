export interface Speaker {
  id: string;
  name: string;
  institution: string;
  website: string;
  image: string;
  biography?: string; // Optional biography
}

export interface Talk {
  time: string;
  title: string;
  date: string;
  description: string;
  speakerIds: string[];
}
