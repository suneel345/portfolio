import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create or update profile
  const profile = await prisma.profile.upsert({
    where: { email: "suneel@example.com" },
    update: {},
    create: {
      name: "Suneel",
      title: "Full Stack Developer & UI Portfolio Specialist",
      bio: "Passionate about building exceptional digital experiences. Specializing in Next.js, React, and modern web technologies.",
      email: "suneel@example.com",
      location: "India",
      website: "https://suneelportfolio.dev",
    },
  });

  console.log(`Profile: ${profile.name}`);

  // Seed Skills
  const skills = [
    {
      name: "Next.js",
      category: "Frontend",
      proficiency: 5,
      description: "Modern React framework with server-side rendering and API routes",
    },
    {
      name: "React",
      category: "Frontend",
      proficiency: 5,
      description: "Building interactive user interfaces with components",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      proficiency: 4,
      description: "Type-safe JavaScript development",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      proficiency: 5,
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      name: "Node.js",
      category: "Backend",
      proficiency: 4,
      description: "Server-side JavaScript runtime",
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      proficiency: 4,
      description: "Relational database management",
    },
    {
      name: "Prisma",
      category: "Backend",
      proficiency: 4,
      description: "Modern ORM for Node.js and TypeScript",
    },
    {
      name: "AWS",
      category: "DevOps",
      proficiency: 3,
      description: "Cloud infrastructure and services",
    },
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { profileId_name: { profileId: profile.id, name: skill.name } },
      update: skill,
      create: { ...skill, profileId: profile.id },
    });
  }

  console.log("Skills seeded");

  // Seed Certifications
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: new Date("2024-01-15"),
      expiryDate: new Date("2026-01-15"),
      description: "Professional certification in AWS cloud architecture",
      badgeUrl: "https://via.placeholder.com/150?text=AWS",
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      issueDate: new Date("2023-06-20"),
      expiryDate: new Date("2025-06-20"),
      description: "Cloud engineering certification",
      badgeUrl: "https://via.placeholder.com/150?text=GCP",
    },
  ];

  for (const cert of certifications) {
    await prisma.certification.create({
      data: { ...cert, profileId: profile.id },
    });
  }

  console.log("Certifications seeded");

  // Seed Articles
  const articles = [
    {
      title: "Building Scalable Next.js Applications with Prisma",
      slug: "nextjs-prisma-scalable-apps",
      excerpt: "Learn how to build scalable full-stack applications using Next.js and Prisma ORM.",
      content: "# Building Scalable Next.js Applications\n\nFull content here...",
      published: true,
      publishedAt: new Date("2024-01-10"),
      readTime: 8,
      tags: ["nextjs", "prisma", "typescript"],
    },
    {
      title: "Modern UI Design Patterns in React",
      slug: "modern-ui-patterns-react",
      excerpt: "Exploring component composition and design patterns for building maintainable React applications.",
      content: "# Modern UI Design Patterns\n\nFull content here...",
      published: true,
      publishedAt: new Date("2024-01-05"),
      readTime: 10,
      tags: ["react", "design-patterns", "ui"],
    },
  ];

  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: article,
      create: { ...article, profileId: profile.id },
    });
  }

  console.log("Articles seeded");

  // Seed Book Recommendations
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "A Handbook of Agile Software Craftsmanship",
      rating: 5,
      readStatus: "completed",
      category: "Technical",
      review: "Essential reading for any developer. Martin's principles have shaped my coding practices.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      description: "Your Journey to Mastery in Software Development",
      rating: 5,
      readStatus: "completed",
      category: "Technical",
      review: "Timeless wisdom on practical software development.",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "An Easy & Proven Way to Build Good Habits and Break Bad Ones",
      rating: 4.5,
      readStatus: "reading",
      category: "Productivity",
    },
  ];

  for (const book of books) {
    await prisma.bookRecommendation.create({
      data: { ...book, profileId: profile.id },
    });
  }

  console.log("Books seeded");

  // Seed Social Links
  const socialLinks = [
    { platform: "github", url: "https://github.com/suneel345" },
    { platform: "linkedin", url: "https://linkedin.com/in/suneel" },
    { platform: "twitter", url: "https://twitter.com/suneel" },
    { platform: "email", url: "mailto:suneel@example.com" },
  ];

  for (const link of socialLinks) {
    await prisma.socialLink.upsert({
      where: { profileId_platform: { profileId: profile.id, platform: link.platform } },
      update: link,
      create: { ...link, profileId: profile.id },
    });
  }

  console.log("Social links seeded");
  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
