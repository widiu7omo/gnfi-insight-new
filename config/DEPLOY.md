# GNFI Insight - VPS Deployment Guide

## 1. Install Bun

```bash
# Install Bun (official installer)
curl -fsSL https://bun.sh/install | bash

# Reload shell
source ~/.bashrc
# or
source ~/.zshrc

# Verify installation
bun --version
```

---

## 2. Install PM2

```bash
# Install PM2 globally using Bun
bun install -g pm2

# Verify installation
pm2 --version
```

> **Note**: PM2 itself runs on Node.js, but it can manage Bun processes.  
> If you don't have Node.js, install it first:
> ```bash
> curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
> sudo apt install -y nodejs
> npm install -g pm2
> ```

---

## 3. Setup Project

```bash
# Clone/upload your project
cd /var/www
git clone <your-repo> gnfi-insight
cd gnfi-insight

# Install dependencies and build
bun install
bun run build

# Create logs directory
mkdir -p logs
```

---

## 4. Setup Nginx

```bash
# Copy nginx config
sudo cp config/insight.goodnewsfromindonesia.id.conf /etc/nginx/sites-available/

# Create symlink
sudo ln -s /etc/nginx/sites-available/insight.goodnewsfromindonesia.id.conf /etc/nginx/sites-enabled/

# Create cache directory
sudo mkdir -p /var/cache/nginx/gnfi
sudo chown www-data:www-data /var/cache/nginx/gnfi

# Test & reload
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. Start with PM2

```bash
# Start the app
cd /var/www/gnfi-insight
pm2 start config/ecosystem.config.cjs

# Check status
pm2 status

# View logs
pm2 logs

# Monitor resources
pm2 monit
```

---

## 6. Enable Auto-start on Reboot

```bash
# Generate startup script
pm2 startup

# Save current process list
pm2 save
```

---

## 7. Useful PM2 Commands

| Command | Description |
|---------|-------------|
| `pm2 status` | Show all processes |
| `pm2 logs` | View logs (live) |
| `pm2 logs --lines 100` | View last 100 lines |
| `pm2 monit` | Real-time monitoring |
| `pm2 restart all` | Restart all processes |
| `pm2 reload all` | Zero-downtime reload |
| `pm2 stop all` | Stop all processes |
| `pm2 delete all` | Remove all processes |
| `pm2 flush` | Clear all logs |

---

## 8. Update Deployment

```bash
cd /var/www/gnfi-insight

# Pull latest code
git pull

# Install deps & rebuild
bun install
bun run build

# Zero-downtime reload
pm2 reload all
```

---

## Quick Reference

```
App URL:     https://insight.goodnewsfromindonesia.id
App Ports:   3000, 3001 (load balanced)
Logs:        /var/www/gnfi-insight/logs/
Nginx Logs:  /var/log/nginx/insight.*.log
PM2 Config:  /var/www/gnfi-insight/config/ecosystem.config.cjs
```
