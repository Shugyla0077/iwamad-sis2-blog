import { posts } from '../data/posts'
import { PostCard } from '../components/PostCard'

export const PostsPage = () => {
  return (
    <section className="max-w-3xl w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
