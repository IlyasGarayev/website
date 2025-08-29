import { NextResponse } from 'next/server';
import { mockData } from '../../../../../../lib/mockData';

export async function GET(request, { params }) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const { slug } = params;
  const news = mockData.news.find(item => item.slug === slug);
  
  if (!news) {
    return NextResponse.json({ error: 'News not found' }, { status: 404 });
  }
  
  // Increment view count (in real app, this would be in database)
  news.views += 1;
  
  return NextResponse.json(news);
}