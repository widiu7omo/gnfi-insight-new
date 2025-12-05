module.exports = {
  apps: [
    {
      name: 'gnfi-insight-1',
      script: './.output/server/index.mjs',
      interpreter: 'bun',  // Use Bun instead of Node.js
      exec_mode: 'fork',   // Bun doesn't support cluster mode, use fork
      max_memory_restart: '600M',
      
      // Graceful restart
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Auto-restart protection
      max_restarts: 10,
      min_uptime: '10s',
      exp_backoff_restart_delay: 100,
      
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      
      // Logging
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/error-1.log',
      out_file: './logs/output-1.log',
      time: true,
      log_type: 'json',
    },
    {
      name: 'gnfi-insight-2',
      script: './.output/server/index.mjs',
      interpreter: 'bun',
      exec_mode: 'fork',
      max_memory_restart: '600M',
      
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      max_restarts: 10,
      min_uptime: '10s',
      exp_backoff_restart_delay: 100,
      
      env: {
        NODE_ENV: 'production',
        PORT: 3001,  // Different port for load balancing
      },
      
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/error-2.log',
      out_file: './logs/output-2.log',
      time: true,
      log_type: 'json',
    },
  ],
};