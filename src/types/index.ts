import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type PageType = {
  _id: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};

export type ProjectType = {
  _id: string;
  name: string;
  tagline: string;
  slug: string;
  projectLogo: string;
  projectUrl: string;
  coverImage: { alt: string | null; image: string };
  description: PortableTextBlock[];
};
