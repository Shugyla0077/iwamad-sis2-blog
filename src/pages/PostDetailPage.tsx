import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import { Card } from '../components/ui/Card'
import { Tag } from '../components/ui/Tag'
import { LikeButton } from '../components/LikeButton'

export const PostDetailPage = () => {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <section className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-2 text-rose-600">Post not found</h2>
        <p className="text-gray-600 mb-4">No post with ID {id}.</p>
        <Link to="/posts" className="text-indigo-600 font-medium underline">
          Back to Posts
        </Link>
      </section>
    )
  }

  return (
    <Card className="max-w-xl w-full text-left flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Tag label={post.tag} />
        <span className="text-xs text-gray-500">{post.date}</span>
      </div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <LikeButton />
        <Link to="/posts" className="text-indigo-600 font-medium underline text-sm">
          Back to Posts
        </Link>
      </div>
    </Card>
  )
}
