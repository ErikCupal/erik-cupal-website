// Production configuration file for PM2

module.exports = {
  apps: [
    {
      name: "erik-cupal-website-production",
      script: "./build/production/server.js",
      env: {
        PORT: 8081,
        NODE_ENV: "production"
      },
      cwd: '/root/apps/erik-cupal-website',
      node_args: "--harmony"
    }
  ]
}