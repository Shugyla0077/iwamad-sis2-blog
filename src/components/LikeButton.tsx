import { useState } from 'react'
import { Button } from './ui/Button'

export const LikeButton = () => {
  const [likes, setLikes] = useState(0)

  return (
    <Button
      variant="primary"
      onClick={() => setLikes(likes + 1)}
      className="like-button"
    >
      ♥ {likes}
    </Button>
  )
}
