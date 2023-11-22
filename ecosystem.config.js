module.exports = {
    apps: [
      {
        name: 'chatgpt',
        script: 'node_modules/.bin/next',
        args: 'start --port 7890 --host localhost',
        instances: 'max',
        exec_mode: 'cluster',
        watch: false,
        merge_logs: true,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
};