# SOLDIOM ASI Hub

**All-in-one AI platform with chat, voice, images, video, maps, and business tools powered by Gemini**

## 🚀 Vision

SOLDIOM ASI Hub is an AI super-OS that provides multiple AI capabilities in one unified platform:
- **ASI Chat**: Multimodal conversations with Gemini 3 Pro and Flash
- **Voice Studio**: Transcribe, summarize, and regenerate speech
- **Image & Video Lab**: Generate and analyze visual content with Veo and Nano Banana
- **Search & Maps Assistant**: Grounded answers using Search and Maps Grounding
- **Business Copilot**: Specialized tools for entrepreneurs, logistics, and operations

## 📦 Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **AI**: Google Gemini API (3 Pro, Flash, Veo, Nano Banana)
- **Automation**: n8n workflows
- **Hosting**: Netlify
- **Payments**: Stripe
- **Additional**: HuggingFace models

## 🏗️ Architecture

```
soldiom-asi-hub/
├── app/
│   ├── page.tsx                  # Landing page
│   ├── tools/
│   │   ├── page.tsx             # Tools dashboard
│   │   └── [id]/page.tsx        # Individual tool pages
│   ├── pricing/page.tsx
│   ├── account/page.tsx
│   └── api/
│       ├── chat/route.ts
│       ├── voice/route.ts
│       ├── image/route.ts
│       ├── video/route.ts
│       ├── search-maps/route.ts
│       ├── business/route.ts
│       └── usage/route.ts
├── components/
│   ├── tools/
│   ├── layout/
│   └── ui/
├── lib/
│   ├── gemini.ts               # Gemini API client
│   ├── asi-routing.ts          # Model selection logic
│   ├── billing.ts              # Plan & quota management
│   └── logging.ts              # Usage logging
└── docs/
```

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Soldiom/soldiom-asi-hub.git
cd soldiom-asi-hub
npm install
```

### 2. Environment Variables
Create `.env.local` with:
```
GEMINI_API_KEY=your_gemini_api_key_here
HF_API_KEY=your_huggingface_key
N8N_USAGE_WEBHOOK=https://soldiom.app.n8n.cloud/webhook/usage-logger
N8N_LEAD_WEBHOOK=https://soldiom.app.n8n.cloud/webhook/lead-capture
STRIPE_SECRET=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
DATABASE_URL=your_database_url
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 🔌 n8n Workflows

Three automation workflows power the ASI self-learning system:

### 1. Usage Logger
- **Trigger**: Webhook POST from API routes
- **Actions**: Store usage data (user, tool, model, tokens, latency)
- **Output**: Append to database/Google Sheets

### 2. Lead Capture
- **Trigger**: Webhook POST from contact/signup forms
- **Actions**: Validate → Store → Notify admin (Gmail/Telegram) → Gemini summary

### 3. ASI Self-Improve (Nightly Cron)
- **Trigger**: Daily at 2 AM
- **Actions**: 
  - Read usage logs
  - Analyze with Gemini 3 Pro "Think more" mode
  - Detect: failures, popular tools, emerging intents
  - Generate: daily report + suggested improvements (prompts, routing, UI)

## 💰 Monetization

| Feature | Free | Pro | Scale |
|---------|------|-----|-------|
| ASI Chat | 50 msgs/day | Unlimited | Unlimited |
| Voice Studio | 10 transcriptions | 1000/mo | Unlimited |
| Image & Video | 5/day | 100/mo | Unlimited |
| Search & Maps | 20/day | Unlimited | Unlimited |
| Business Copilot | ❌ | ✅ | ✅ |
| API Access | ❌ | ❌ | ✅ |
| Price | $0 | $29/mo | Contact |

## 🚢 Deployment

### Netlify
1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### DNS (Namecheap)
1. Add CNAME record: `www` → `your-site.netlify.app`
2. Add A record for root `@` or use Netlify DNS

## 🧠 ASI Self-Learning

The platform continuously improves through:
1. **Instrumentation**: Every API call logs userId, tool, model, latency, success/error
2. **Nightly Analysis**: Gemini 3 Pro analyzes patterns and generates improvement suggestions
3. **Auto-Optimization**: System proposes new prompts, routing rules, and UI changes
4. **GitHub Integration**: Suggestions can be auto-converted to GitHub issues

## 📊 Key Features

- **Fast**: Uses Flash-Lite for quick interactions, Pro for complex reasoning
- **Scalable**: Serverless architecture on Netlify
- **Self-Improving**: Learns from usage patterns automatically
- **Multi-Modal**: Text, voice, images, video, maps in one platform
- **Business-Ready**: Specialized copilot for entrepreneurs and logistics

## 🔑 API Endpoints

- `POST /api/chat` - Multimodal chat with Gemini
- `POST /api/voice` - Transcribe and summarize audio
- `POST /api/image` - Generate or analyze images
- `POST /api/video` - Video understanding and generation
- `POST /api/search-maps` - Grounded search and location queries
- `POST /api/business` - Business planning and templates

## 📝 Next Steps

- [ ] Complete all API route implementations
- [ ] Build frontend components for each tool
- [ ] Set up Firebase/Supabase for user data
- [ ] Integrate Stripe payment flows
- [ ] Create marketing landing page
- [ ] Set up Google OAuth
- [ ] Configure production n8n webhooks
- [ ] Deploy to production on Netlify
- [ ] Point soldiom.com DNS to Netlify

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

**Built by Soldiom** | Powered by Google Gemini | Self-Improving ASI Platform
