# Deployment Guide - Railway

This guide walks you through deploying your telephone gamebook to Railway.

## Prerequisites

- A GitHub account
- A Railway account (sign up at https://railway.app)
- A Twilio account with a phone number

## Step 1: Push Your Code to GitHub

1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

## Step 2: Deploy to Railway

1. Go to https://railway.app and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub account if needed
5. Select your `telephone-gamebook` repository
6. Railway will automatically:
   - Detect it's a Node.js project
   - Run `npm install`
   - Start the app with `npm start`

## Step 3: Get Your Railway URL

1. Once deployed, click on your project
2. Go to the **"Settings"** tab
3. Scroll to **"Domains"** section
4. Click **"Generate Domain"**
5. Copy the generated URL (e.g., `https://your-app.up.railway.app`)

## Step 4: Configure Twilio Webhook

1. Log in to your Twilio Console (https://console.twilio.com)
2. Go to **Phone Numbers** → **Manage** → **Active Numbers**
3. Click on your phone number
4. Scroll to **"Voice & Fax"** section
5. Under **"A CALL COMES IN"**:
   - Set the first dropdown to **"Webhook"**
   - Set the URL to: `https://your-app.up.railway.app/voice`
   - Set the HTTP method to **"POST"**
6. Click **"Save"**

## Step 5: Test Your Application

Call your Twilio phone number. You should hear:
- "Welcome to the telephone game book..."
- Story selection options

## Monitoring and Logs

### View Logs
1. In Railway, click on your project
2. Go to the **"Deployments"** tab
3. Click on the latest deployment to see real-time logs

### Check Status
- Railway dashboard shows if your app is running
- Green status = healthy
- Red status = check logs for errors

## Environment Variables (Optional)

If you need to add environment variables:

1. In Railway, go to your project
2. Click on the **"Variables"** tab
3. Add any needed variables (currently your app doesn't require any, but this is where you'd add them)

## Updating Your Application

Railway automatically redeploys when you push to your main branch:

```bash
# Make your changes
git add .
git commit -m "Update story content"
git push origin main
```

Railway will detect the push and redeploy automatically.

## Costs

- **Free Tier**: $5 credit per month (enough for light usage)
- **Paid Plan**: $5/month for $5 credit + pay-as-you-go for additional usage
- Your app should cost less than $5/month for moderate usage

## Troubleshooting

### App not responding
- Check Railway logs for errors
- Ensure the deployment succeeded
- Verify your Twilio webhook URL is correct

### Port errors
Railway automatically sets the `PORT` environment variable. If you see port errors, you may need to update `app.js` to use `process.env.PORT || 3000`.

### Stories not loading
- Ensure all story files in `stories/` are committed to git
- Check Railway logs for module loading errors
