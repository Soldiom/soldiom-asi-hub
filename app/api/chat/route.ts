import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(req: NextRequest) {
  try {
    const { message, userId = 'anonymous' } = await req.json()
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Initialize Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    // Generate response
    const result = await model.generateContent(message)
    const response = await result.response
    const text = response.text()

    // Log to n8n webhook
    const n8nWebhook = process.env.N8N_USAGE_WEBHOOK
    if (n8nWebhook) {
      fetch(n8nWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userId,
          tool: 'chat',
          inputLength: message.length,
          outputLength: text.length,
          success: true
        })
      }).catch(err => console.error('n8n logging error:', err))
    }

    return NextResponse.json({
      success: true,
      response: text
    })
  } catch (error: any) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request', details: error.message },
      { status: 500 }
    )
  }
}
