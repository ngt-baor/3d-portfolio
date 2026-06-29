import type { Metadata } from "next";
import ResumeView from "./resume-view";

export const metadata: Metadata = {
  title: "Resume | Nguyen The Bao",
  description:
    "Resume of Nguyen The Bao - Backend Developer Intern. View online or download the PDF.",
};

export default function ResumePage() {
  return <ResumeView />;
}
