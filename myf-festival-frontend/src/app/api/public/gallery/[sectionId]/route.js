import { NextResponse } from 'next/server';
import { mockData } from '../../../../../../lib/mockData';
import { paginate } from '../../../../../../lib/utils';

export async function GET(request, { params }) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const { sectionId } = params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '15');
  
  const sectionMedia = mockData.gallery.media[sectionId];
  
  if (!sectionMedia) {
    return NextResponse.json({ error: 'Section not found' }, { status: 404 });
  }
  
  const paginatedMedia = paginate(sectionMedia, page, limit);
  
  return NextResponse.json(paginatedMedia);
}