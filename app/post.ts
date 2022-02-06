import path from 'path'
import fs from 'fs/promises'
import parseFrontMatter from 'front-matter'
import invariant from 'tiny-invariant'

/**
 * Type Post
 */
export type Post = {
  slug: string
  title: string
}

/**
 * Tipo de dados para atributos de um post em formato markdown
 */
export type PostMarkdownAttributes = {
  title: string
}

// relative to the server output not the source!
const postsPath = path.join(__dirname, '..', 'posts')

/**
 * Verifica se o post está no formato correto
 * @param attributes
 * @returns
 */
function isValidPostAttributes(
  attributes: any,
): attributes is PostMarkdownAttributes {
  return attributes?.title
}

// ...
export async function getPost(slug: string) {
  // Caminho do arquivo
  const filepath = path.join(postsPath, slug + '.md')

  // Lê o arquivo
  const file = await fs.readFile(filepath)

  // Extrai o arquivo no formato front-matter
  const { attributes } = parseFrontMatter(file.toString())

  // Verifica se o arquivo está no formato correto
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`,
  )

  return { slug, title: attributes.title }
}

/**
 * Pega os posts
 * @returns
 */
export async function getPosts() {
  // verifica os posts que existem no diretório
  const dir = await fs.readdir(postsPath)

  // filtra os arquivos que são do formato markdown e retorna um array de posts
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(path.join(postsPath, filename))

      const { attributes } = parseFrontMatter(file.toString())

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`,
      )

      return {
        slug: filename.replace(/\.md$/, ''),
        title: attributes.title,
      }
    }),
  )
}
