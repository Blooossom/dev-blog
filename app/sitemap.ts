import type { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, categories, tags] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllTags(),
  ])

  const postUrls = posts.map((p) => ({
    url: `${BASE_URL}/posts/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryUrls = categories.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.toLowerCase()}`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const tagUrls = tags.map((tag) => ({
    url: `${BASE_URL}/tags/${tag.toLowerCase()}`,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [
    { url: BASE_URL, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/categories`, changeFrequency: 'weekly', priority: 0.7 },
    ...postUrls,
    ...categoryUrls,
    ...tagUrls,
  ]
}
