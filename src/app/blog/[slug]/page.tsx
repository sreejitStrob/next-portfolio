import { notFound } from 'next/navigation';
import Post from '@/models/Post';

interface PostData {
  title: string;
  content: string;
  created_at: string;
  image_url?: string; // Optional image URL
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch post from database
  const post = await Post.findOne({ where: { slug: slug } });
  const postData = post?.get() as PostData | undefined; // or post.toJSON()

  console.log('===>post', postData);

  if (!postData) {
    notFound(); // show 404 page if not found
  }

  // Extract post details only if postData exists
  let { title, content, created_at, image_url } = postData;
  image_url = '/ach_image.jpeg'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{title}</h1>
        <span className="text-lg text-gray-600">{new Date(created_at).toLocaleDateString()}</span>
      </div>

      {/* Image Section */}
      <div className="mb-8">
        {/* Use image_url from database or a placeholder */}
        <img
          src={image_url || 'https://via.placeholder.com/800x400'} // Placeholder image if no image is provided
          alt={title}
          className="w-full max-w-4xl h-64 object-cover rounded-lg mx-auto shadow-lg"
        />
      </div>

      {/* Main Content Section */}
      <div className="prose lg:prose-xl text-gray-900 leading-relaxed">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
