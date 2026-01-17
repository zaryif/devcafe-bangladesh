# DevCafe Bangladesh 🇧🇩☕

> **Where Code Meets Coffee & Ideas** - Dhaka's First Tech Hub

A modern, full-stack web application for DevCafe Bangladesh, a developer-focused café and co-working space. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

![DevCafe Preview](./google_stitch_extracted/stitch_devcafe_community_membership/devcafe_bangladesh_homepage_1/screen.png)

---

## 🚀 Features

- **Community Platform** - Member profiles, project showcases, and collaboration tools
- **Event Management** - Workshops, hackathons, and community events
- **Menu & Ordering** - Developer-themed food and drinks with online ordering
- **Booking System** - Reserve tables, team spaces, and private rooms
- **Member Dashboard** - Track membership, notifications, and saved items
- **Dark/Light Theme** - Automatic and manual theme switching with persistence

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Auth & Database** | Supabase (planned) |
| **Deployment** | Vercel (recommended) |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/devcafe-bangladesh.git
cd devcafe-bangladesh

# Install dependencies
npm install

# Copy environment example
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

---

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```env
# ============================================
# SUPABASE CONFIGURATION
# ============================================
# Get these from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api

# Public URL - Safe to expose in frontend
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

# Anon Key - Safe for client-side (with RLS enabled)
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# ============================================
# BACKEND ONLY (Never expose in frontend!)
# ============================================
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
# Only use in API routes or server actions

# ============================================
# OPTIONAL SERVICES
# ============================================
# STRIPE_SECRET_KEY=sk_test_...
# STRIPE_WEBHOOK_SECRET=whsec_...
```

> ⚠️ **Security Warning**: Never commit `.env.local` or expose `SERVICE_ROLE_KEY` in client code!

---

## 🖼️ Updating Images

Images are located in various places throughout the app. Here's how to update them:

### Menu Item Images
**Location**: `src/app/page.tsx` (lines 43-100) and `src/app/menu/page.tsx`

```tsx
// Example: Update a menu item image
const menuItems = [
    {
        name: 'Java Runtime Environment',
        description: 'Double shot espresso...',
        price: '৳250',
        // 👇 Update this URL with your image
        image: 'https://your-cdn.com/your-image.jpg',
    },
];
```

### Hero Section Images
**Location**: `src/app/page.tsx` (hero section around line 130)

### Member Avatars & Community Images
**Location**: `src/app/community/members/page.tsx`

### Best Practice
1. Host images on a CDN (e.g., Cloudinary, Supabase Storage, Vercel)
2. Use optimized WebP format
3. Provide appropriate alt text for accessibility
4. Use consistent aspect ratios

---

## 🔐 Security Best Practices

### What's Safe for Frontend
- `NEXT_PUBLIC_*` environment variables
- Supabase Anon Key (with proper RLS policies)
- Public API endpoints

### What Must Stay Backend-Only
- Supabase Service Role Key
- Payment processor secrets (Stripe, etc.)
- Admin API keys
- Database connection strings

### Row Level Security (RLS)
When integrating Supabase, enable RLS on all tables:

```sql
-- Example: Users can only read their own data
CREATE POLICY "Users can view own data" ON profiles
    FOR SELECT USING (auth.uid() = user_id);
```

---

## 🗄️ Backend Integration (Supabase)

### Setting Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key to `.env.local`
3. Run the database migrations (coming soon)

### Replacing Mock Auth

The current auth system uses mock data for development. To integrate Supabase:

1. Update `src/lib/auth/context.tsx`:
   - Replace mock functions with Supabase auth methods
   - See comments marked `TODO: SUPABASE` in the file

2. Update `src/lib/supabase/client.ts`:
   - Already configured for Supabase SSR

### Database Schema (Planned)

```
profiles
├── id (uuid)
├── user_id (uuid, FK to auth.users)
├── full_name (text)
├── avatar_url (text)
├── bio (text)
├── skills (text[])
├── membership_tier (enum)
└── created_at (timestamp)

bookings
├── id (uuid)
├── user_id (uuid)
├── space_type (enum)
├── date (date)
├── start_time (time)
└── status (enum)
```

---

## 💬 Messaging System (Planned)

The messaging/notification system will use:

- **Supabase Realtime** for live updates
- **Database tables**: `messages`, `notifications`, `conversations`
- **Edge Functions** for push notifications

See `src/app/dashboard/notifications/page.tsx` for the current UI implementation.

---

## 💰 Pricing Format

All prices use **Bangladeshi Taka (BDT)** with the `৳` symbol:

```tsx
// ✅ Correct
price: '৳250'
price: '৳1,500'

// ❌ Incorrect
price: 'BDT 250'
price: '$4.50'
```

---

## 🎨 Theming

The app supports dark and light modes:

### Theme Context
Located at `src/lib/theme/context.tsx`

### Adding Theme Support to Components
```tsx
import { useTheme } from '@/lib/theme/context';

function MyComponent() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    
    return (
        <div className={isDark ? 'bg-gray-900' : 'bg-white'}>
            {/* Content */}
        </div>
    );
}
```

### CSS Variables
Theme colors are defined in `src/app/globals.css` using CSS variables.

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page components
│   ├── globals.css        # Global styles & theme variables
│   └── layout.tsx         # Root layout with providers
├── components/            # Reusable UI components
│   └── Navbar.tsx         # Main navigation
└── lib/                   # Utilities and contexts
    ├── auth/context.tsx   # Authentication context
    ├── theme/context.tsx  # Theme management
    └── supabase/client.ts # Supabase client
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow existing component patterns
- Add comments for complex logic
- Use semantic HTML

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 📞 Contact

- **Location**: Dhaka, Bangladesh
- **Email**: hello@devcafe.bd
- **Website**: [devcafe.bd](https://devcafe.bd)

---

Built with ❤️ by the DevCafe Bangladesh Team
