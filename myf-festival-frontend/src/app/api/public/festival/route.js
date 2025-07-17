import { NextResponse } from 'next/server';
import { mockData } from '../../../../../lib/mockData';

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return NextResponse.json({
    about: mockData.festival.about,
    program: mockData.festival.program,
    partners: mockData.festival.partners,
    pastFestivals: mockData.festival.pastFestivals
  });
}