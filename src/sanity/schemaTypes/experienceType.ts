import { BiBriefcase } from "react-icons/bi";
import { defineType, defineField } from "sanity";

const experienceType = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: BiBriefcase,
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company at which you worked?",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title, e.g. Software Developer",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "Company Website",
      type: "url",
      initialValue: "https://",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
  ],
});

export default experienceType;
