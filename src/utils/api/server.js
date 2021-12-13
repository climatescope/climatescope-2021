import fs from "fs/promises"
import { join } from "path"
import shuffle from "lodash/shuffle"
import { csvParse } from "d3-dsv"

import { extractMetadata } from "@utils/api/extractMetadata"

const postsDirectory = (p = "") => join(process.cwd(), `pages/${p}`)

export async function getPostSlugs(n) {
  const slug = await fs.readdir(postsDirectory(n))
  return slug.filter((d) => d.indexOf(".mdx") !== -1)
}

export async function getPageBySlug(slug, n) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory(n), `${realSlug}.mdx`)
  const fileContents = await fs.readFile(fullPath, "utf8")
  return extractMetadata(fileContents, realSlug)
}

export async function getPages(n = "") {
  const slugs = await getPostSlugs(n)
  const pages = await Promise.all(slugs.map((slug) => getPageBySlug(slug, n)))
  return pages
}

export async function getDataPreview(filePath, options = {}) {
  const format = filePath.split(".").reverse()[0]
  const shuffleOption = options.shuffle
  const inputPath = join(process.cwd(), filePath)
  const data = await fs.readFile(inputPath, "utf8")
  const formatted = format === "csv" ? csvParse(data) : JSON.parse(data)
  const shuffled = shuffleOption ? shuffle(formatted) : formatted
  const sliceOption = options.slice || [0]
  return shuffled.slice ? shuffled.slice(...sliceOption) : shuffled
}

export const getServerData = getDataPreview
