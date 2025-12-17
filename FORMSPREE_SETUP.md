# Formspree Setup Guide

Your forms are now configured to send submissions to Formspree! Follow these simple steps to complete the setup.

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month per form on free tier)

## Step 2: Create 3 Forms

Create one form for each submission type:

### Form 1: Contact Form
1. Click "New Form"
2. Name it: "Contact Form" or "Tcode Farms Contact"
3. Copy the **Form ID** (it looks like: `xqwerty123`)

### Form 2: Consultation Form
1. Click "New Form"
2. Name it: "Consultation Form" or "Tcode Farms Consultation"
3. Copy the **Form ID**

### Form 3: Email Subscription Form
1. Click "New Form"
2. Name it: "Email Subscription" or "Tcode Farms Subscriptions"
3. Copy the **Form ID**

## Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Formspree Form IDs:
   ```env
   NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID=xqwerty123
   NEXT_PUBLIC_FORMSPREE_CONSULTATION_FORM_ID=abc123xyz
   NEXT_PUBLIC_FORMSPREE_SUBSCRIPTION_FORM_ID=def456uvw
   ```

   Replace the example IDs with your actual Form IDs from Step 2.

## Step 4: Restart Your Development Server

After updating `.env.local`, restart your Next.js server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 5: Test Your Forms

1. **Contact Form**: Go to `/contact` and submit a test message
2. **Consultation Form**: Go to `/products` and click "Book Consultation"
3. **Email Subscription**: Go to any product page and subscribe

Check your Formspree dashboard to see the submissions!

## How It Works

- ✅ **Formspree receives submissions** → You get email notifications
- ✅ **LocalStorage backup** → Data is also saved locally (in case Formspree is down)
- ✅ **No backend needed** → Everything works client-side

## Formspree Features

- **Email Notifications**: Get notified when someone submits a form
- **Spam Protection**: Built-in spam filtering
- **Form Analytics**: See submission stats in your dashboard
- **Export Data**: Download submissions as CSV
- **Webhooks**: Connect to Google Sheets, Zapier, etc. (paid plans)

## Troubleshooting

**Forms not submitting?**
- Check that your Form IDs in `.env.local` are correct
- Make sure you restarted the dev server after updating `.env.local`
- Check browser console for errors

**Not receiving emails?**
- Check your Formspree dashboard for submissions
- Verify your email in Formspree settings
- Check spam folder

**Need more than 50 submissions/month?**
- Upgrade to Formspree Pro ($20/month for 1,000 submissions)
- Or use Google Apps Script (free, unlimited)

## Next Steps (Optional)

Want to send submissions directly to Google Sheets?

1. Use Formspree's webhook feature (paid)
2. Or use Zapier to connect Formspree → Google Sheets (free tier available)
3. Or switch to Google Apps Script (completely free)

---

**Questions?** Check the [Formspree Documentation](https://help.formspree.io/)

