import { Link } from 'react-router'
import type { Post } from '../data/posts'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'
import { LikeButton } from './LikeButton'

interface PostCardProps {
  post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="text-left flex flex-col justify-between gap-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <Tag label={post.tag} />
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.summary}</p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <LikeButton />
        <Link to={`/posts/${post.id}`} className="text-indigo-600 text-sm font-medium underline">
          Read more
        </Link>
      </div>
    </Card>
  )
}
