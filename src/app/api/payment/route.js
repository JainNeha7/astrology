import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const { txnid, phone, amount, productinfo, firstname, email } = await request.json();
    
    const merchantKey = "DQje3S";
    const salt = "Y6p6t849WAgWFBnVjx1qoEyOAEAOnJr4";

    const hashString = `${merchantKey}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex').toLowerCase();

    return NextResponse.json({ hash, merchantKey });
  } catch (error) {
    console.error('Error generating hash:', error);
    return NextResponse.json({ error: 'Failed to generate hash' }, { status: 500 });
  }
}