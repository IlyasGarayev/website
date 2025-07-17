import { NextResponse } from 'next/server';

export async function POST(request) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const surname = formData.get('surname');
    const phone = formData.get('phone');
    const idFront = formData.get('idFront');
    
    // Validate required fields
    if (!name || !surname || !phone || !idFront) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Simulate successful submission
    console.log('Form submission:', { name, surname, phone, idFront: idFront.name });
    
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      submissionId: Math.random().toString(36).substr(2, 9)
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}