import React from 'react'
import PostComponent from './PostComponent'
import { PostData } from '@/app/types/postType'

interface PostFeedProps {
    posts: PostData[];
}

const PostFeed: React.FC<PostFeedProps> = ({posts}) => {
    if(!posts) {
        return <p>No posts feed...</p>
    }
  return (
    <div className='space-y-2 pb-20'>
        {!posts && <p>No posts...</p>}
        {posts && posts?.map((post) => (
            <PostComponent key={post.id} post={post} />
        ))}
    </div>
  )
}

export default PostFeed