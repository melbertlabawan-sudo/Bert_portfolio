import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises"
import path from "node:path"
import { PDFParse } from "pdf-parse"

const root = path.resolve(import.meta.dirname, "..")
const docsDir = path.join(root, "docs")
const outDir = path.join(root, "public", "images", "technical-drawings")
const assetsDir = path.join(root, "public", "technical-drawings")

await mkdir(outDir, { recursive: true })
await mkdir(assetsDir, { recursive: true })

const pdfs = [
  {
    src: "ESPANOL-BERZA-LABAWAN_LIC-3RD-FLOOR_Power Layout.pdf",
    out: "lic-3rd-floor-power-layout.png",
  },
  {
    src: "ESPANOL, BERZA, LABAWAN_LIC 3RD FLOOR_Report.pdf",
    out: "lic-3rd-floor-report.png",
  },
]

for (const pdf of pdfs) {
  const buffer = await readFile(path.join(docsDir, pdf.src))
  const parser = new PDFParse({ data: buffer })
  const result = await parser.getScreenshot({ desiredWidth: 1600, first: 1 })
  await parser.destroy()

  const page = result.pages[0]
  if (!page?.data) {
    console.warn(`No screenshot for ${pdf.src}`)
    continue
  }

  await writeFile(path.join(outDir, pdf.out), page.data)
  console.log(`Wrote ${pdf.out}`)
}

const dwgSrc = "ESPANOL-BERZA-LABAWAN_LIC-3RD-FLOOR_AUTOCAD FILES.dwg"
await copyFile(
  path.join(docsDir, dwgSrc),
  path.join(assetsDir, "lic-3rd-floor-autocad.dwg"),
)
console.log("Copied DWG to public/technical-drawings/")
