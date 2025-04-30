import PostItem from '@/components/posts/PostItem'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { Post } from '@/types/Post'

type PostsProps = {
  data: Post[]
}

export default function Posts({ data }: PostsProps) {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
        {data.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </SectionWrapper>
  )
}
