import { NextResponse } from 'next/server';
import { mockData } from '../../../../../lib/mockData';

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json(mockData.sponsorship);
}