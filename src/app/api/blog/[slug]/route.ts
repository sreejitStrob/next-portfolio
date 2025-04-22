import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/Post';

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }
){
    try {
      const post = await Post.findOne({ where: { slug: params.slug } });
  
      if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  
      return NextResponse.json(post);
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }