import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, email, phone, message } = body;

    // 必須フィールドの検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    await transporter.sendMail({
      from: 'noreply@novan.co.jp',
      to: 'info@novan.co.jp',
      subject: `【お問い合わせ】${company || '会社名なし'} - ${name}様より`,
      text: `
会社名: ${company || 'なし'}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || 'なし'}

お問い合わせ内容:
${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ 
      success: true,
      message: 'お問い合わせを受け付けました'
    });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
} 