import {defineCollection, z} from "astro:content"

const articlesCollection = defineCollection({
  schema: ({ image }) => 
    z.object({
      author: z.string(),
      title: z.string(),
      date: z.string(),
      image: image(),
    })
})

export const collections = {
  articles: articlesCollection
}