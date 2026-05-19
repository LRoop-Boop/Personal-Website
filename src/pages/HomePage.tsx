import {
  LinkedinOriginal,
  GithubOriginal,
} from "devicons-react";
import {
  Mail,
  FileText,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 px-6 py-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm Lucy Roop, a Software Developer.
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-slate-700 leading-relaxed">
          <p>
            I don’t just build systems, I connect them to the people who use them.
          </p>
          <p>
            As a student pursuing a combined B.S. in Computer Science and M.S.
            in Applied Computer Science, I’ve learned the importance of seeing
            the bigger picture when solving problems. While I’ve gained
            experience across Python, SQL, C, and React, what sets me apart
            isn’t the tool, it’s how I bring ideas together.
          </p>
          <p>
            Outside of tech, I’m deeply creative. I sing in two choirs with
            daily rehearsals and spend my free time painting, animating,
            drawing, and crocheting. That creativity carries directly into my
            work, shaping my interest in the intersection of technology,
            design, and communication.
          </p>
          <p>
            I’m currently focused on growing as a developer while continuing to
            build the skills that allow me to lead, communicate, and design with
            intention.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-6">
            {/* Email */}
            <a
              href="mailto:rooplu@mail.gvsu.edu"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm hover:shadow-md"
            >
              <Mail size={18} />

              <span>Email Me</span>

            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/lucy-roop/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:border-slate-900 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md"
            >
            <LinkedinOriginal
              size="18"
              className="text-slate-900"
            />

              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/LRoop-Boop"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:border-slate-900 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md"
            >
            <GithubOriginal
              size="18"
              className="text-slate-900"
            />

              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a
              href="/Lucy-Roop-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white hover:border-slate-900 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md"
            >
              <FileText size={18} />

              <span>Download Resume</span>
            </a>

        </div>
          <div className="flex flex-col text-slate-700 leading-relaxed">
          <p>Lucy Roop</p>
          <p>rooplu@mail.gvsu.edu</p>
          <p>616.990.5615</p>
        </div>
      </div>
    </div>
  );
}