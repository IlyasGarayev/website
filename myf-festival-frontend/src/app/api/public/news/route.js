import { NextResponse } from 'next/server';
import { mockData } from '../../../../../lib/mockData';
import { paginate } from '../../../../../lib/utils';

export async function GET(request) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '15');
  
  const paginatedNews = paginate(mockData.news, page, limit);
  
  return NextResponse.json(paginatedNews);
}