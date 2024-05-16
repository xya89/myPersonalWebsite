import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block w-full">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden w-full">
              {post.metadata.image && (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 w-full">
                <p className="text-neutral-600 dark:text-neutral-400 mb-2 w-full">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h2 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100 mb-2 w-full">
                  {post.metadata.title}
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-4 w-full">
                  {post.metadata.summary}
                </p>
                <p className="text-blue-500 hover:underline w-full">Read more</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
