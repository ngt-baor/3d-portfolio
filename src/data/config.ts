const config = {
  title: "Nguyen The Bao | Backend Developer Intern",
  description: {
    long: "Highly motivated IT student seeking a Backend Developer Intern position to gain practical experience and enhance technical skills. Passionate about backend architecture and database management, with a long-term career goal of becoming a Solution Architect.",
    short:
      "Backend Developer Intern focused on Java, Spring Boot, SQL, and database-driven web applications.",
  },
  keywords: [
    "Nguyen The Bao",
    "Bao",
    "portfolio",
    "backend developer intern",
    "Java developer",
    "web development",
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "Servlet",
    "JSP",
    "Jakarta EE",
    "Tomcat",
    "SQL Server",
    "MySQL",
    "REST APIs",
    "JDBC",
  ],
  author: "Nguyen The Bao",
  email: "baontph51745@gmail.com",
  site: "https://thebao.vercel.app",

  // for github stars button
  githubUsername: "ngt-baor",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/b%E1%BA%A3o-nguy%E1%BB%85n-th%E1%BA%BF-237972418",
    instagram: "https://www.instagram.com/ngt_baor",
    facebook: "https://facebook.com/ngt.baor",
    github: "https://github.com/ngt-baor",
  },
};
export { config };
