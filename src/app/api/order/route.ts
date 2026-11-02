import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = data.name || data.clientName || 'Anonymous Client';
    const email = data.email || data.clientEmail;
    const phone = data.phone || data.clientPhone || 'N/A';
    const timeline = data.timeline || 'Standard (3-6 Weeks)';
    const apps = data.apps || data.selectedApps || [];
    const scopes = data.scopes || [];
    const description = data.description || '';
    const specText = data.specText || '';

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required to submit a project inquiry.' },
        { status: 400 }
      );
    }

    // Server-side logging of lead
    console.log('--- NEW HDE PROJECT INQUIRY RECEIVED ---');
    console.log(`Client: ${name} (${email})`);
    console.log(`Phone: ${phone}`);
    console.log(`Timeline: ${timeline}`);
    console.log(`Selected Apps: ${Array.isArray(apps) ? apps.join(', ') : apps}`);
    console.log(`Scopes: ${Array.isArray(scopes) ? scopes.join(', ') : scopes}`);
    console.log(`Description: ${description}`);
    if (specText) {
      console.log(`Blueprint Spec:\n${specText}`);
    }
    console.log('----------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Your project inquiry has been logged. The HDE engineering team will review technical feasibility and contact you promptly.',
      receivedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error handling order inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please email thyagaraja1983@gmail.com directly.' },
      { status: 500 }
    );
  }
}
