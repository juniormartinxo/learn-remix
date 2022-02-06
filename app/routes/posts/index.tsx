import { Link, useLoaderData } from 'remix'
import { getPosts } from '~/post'

/**
 * Cria o type para o loader
 */
export type Post = {
  slug: string
  title: string
}

/**
 * Loader da rota de posts
 * @returns {Post}
 */
export const loader = async () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
