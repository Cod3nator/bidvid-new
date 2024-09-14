module.exports = {
    apps: [
      {
        name: 'bidvid-new',
        exec_mode: 'cluster',  
        instances: 'max',   
        script: './node_modules/next/.bin/next',
        args: 'start',
      }
    ]
  };
  