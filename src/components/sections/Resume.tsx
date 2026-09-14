import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Download } from "lucide-react"
import {
  education,
  personalInfo,
  resumeSections,
  skillItems,
  workExperience,
  workExposure,
} from "../../data/portfolio"
import { SectionHeading } from "../ui/SectionHeading"

function ResumeBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-background-alt p-6"
    >
      <h3 className="mb-4 border-l-4 border-accent pl-3 text-lg font-semibold text-text-primary">
        {title}
      </h3>
      {children}
    </motion.div>
  )
}

export function Resume() {
  const allSkills = [...skillItems]

  return (
    <section id="resume" className="section-container py-20 md:py-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          label="Resume"
          title="Online Resume"
          description="Education, experience, skills, and professional credentials."
        />
        <a
          href={personalInfo.resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-muted"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ResumeBlock title="Education">
          {education.map((item) => (
            <div key={item.institution} className="mb-4 last:mb-0">
              <p className="font-semibold text-text-primary">{item.institution}</p>
              <p className="text-sm text-accent">{item.degree}</p>
              <p className="text-sm text-text-secondary">{item.period}</p>
            </div>
          ))}
        </ResumeBlock>

        <ResumeBlock title="Licenses / Certifications">
          <ul className="space-y-2">
            {resumeSections.licenses.map((item) => (
              <li key={item} className="text-sm text-text-secondary">
                • {item}
              </li>
            ))}
          </ul>
        </ResumeBlock>

        <ResumeBlock title="Work Experience">
          {workExperience.map((item) => (
            <div key={item.id} className="mb-5 last:mb-0">
              <p className="font-semibold text-text-primary">{item.role}</p>
              <p className="text-sm text-accent">{item.organization}</p>
              <p className="text-sm text-text-secondary">{item.period}</p>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
              <ul className="mt-2 space-y-1">
                {item.responsibilities.map((task) => (
                  <li key={task} className="text-sm text-text-secondary">
                    • {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ResumeBlock>

        <ResumeBlock title="Work Exposure">
          {workExposure.map((item) => (
            <div key={item.id} className="mb-5 last:mb-0">
              <p className="font-semibold text-text-primary">{item.role}</p>
              <p className="text-sm text-accent">{item.organization}</p>
              <p className="text-sm text-text-secondary">{item.period}</p>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </ResumeBlock>

        <ResumeBlock title="Skills">
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </ResumeBlock>

        {(resumeSections.extracurricular.length > 0 ||
          resumeSections.languages.length > 0) && (
          <ResumeBlock title="Extracurricular & Languages">
            <div className="space-y-4">
              {resumeSections.extracurricular.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-medium text-text-primary">
                    Extracurricular Activities
                  </p>
                  <ul className="space-y-1">
                    {resumeSections.extracurricular.map((item) => (
                      <li key={item} className="text-sm text-text-secondary">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {resumeSections.languages.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-medium text-text-primary">Languages</p>
                  <ul className="space-y-1">
                    {resumeSections.languages.map((item) => (
                      <li key={item} className="text-sm text-text-secondary">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ResumeBlock>
        )}
      </div>
    </section>
  )
}
