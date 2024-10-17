module.exports = {
    apps: [
      {
        name: 'app.bidvid',
        exec_mode: 'cluster',  
        instances: 'max',   
        script: './node_modules/next/.bin/next',
        args: 'start',
      }
    ]
  };
  