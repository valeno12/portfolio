import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Definimos la colección "proyectos": de dónde salen los archivos (glob) y qué
// forma tiene cada uno (schema). El schema valida: si a un .md le falta un campo
// o lo pone mal, el build avisa. Es tu red de seguridad.
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      descripcionEn: z.string().optional(),
      stack: z.array(z.string()),
      imagen: image().optional(), // ruta relativa al .md, ej: ../../assets/proyectos/x.png
      demo: z.string().url().optional(),
      repo: z.string().url().optional(), // sin repo = proyecto privado
      orden: z.number().default(99),
    }),
})

export const collections = { proyectos }
