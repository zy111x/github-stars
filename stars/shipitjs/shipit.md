---
project: shipit
stars: 5324
description: Universal automation and deployment tool ⛵️
url: https://github.com/shipitjs/shipit
---

Universal automation and deployment tool ⛵️

Install shipit command line tools and shipit-deploy in your project
-------------------------------------------------------------------

```
npm install --save-dev shipit-cli
npm install --save-dev shipit-deploy
```

Shipit is an automation engine and a deployment tool.

Shipit provides a good alternative to Capistrano or other build tools. It is easy to deploy or to automate simple tasks on your remote servers.

**Features:**

-   Write your task using JavaScript
-   Task flow based on orchestrator
-   Login and interactive SSH commands
-   Easily extendable

Deploy using Shipit
-------------------

1.  Create a `shipitfile.js` at the root of your project

// shipitfile.js
module.exports \= shipit \=> {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/apps/super-project',
      repositoryUrl: 'https://github.com/user/super-project.git',
    },
    staging: {
      servers: 'deploy@staging.super-project.com',
    },
  })
}

1.  Run deploy command using npx: `npx shipit staging deploy`
    
2.  You can rollback using `npx shipit staging rollback`
    

Recipes
-------

### Copy config file

Add a custom task in your `shipitfile.js` and run `copyToRemote`.

// shipitfile.js
module.exports \= shipit \=> {
  /\* ... \*/

  shipit.task('copyConfig', async () \=> {
    await shipit.copyToRemote(
      'config.json',
      '/var/apps/super-project/config.json',
    )
  })
}

### Use events

You can add custom event and listen to events.

shipit.task('build', function() {
  // ...
  shipit.emit('built')
})

shipit.on('built', function() {
  shipit.start('start-server')
})

Shipit emits the `init` event once initialized, before any tasks are run.

### Use Babel in your `shipitfile.js`

Instead of using a `shipitfile.js`, use `shipitfile.babel.js`:

// shipitfile.babel.js
export default shipit \=> {
  shipit.initConfig({
    /\* ... \*/
  })
}

### Customizing environments

You can overwrite all default variables defined as part of the `default` object:

module.exports \= shipit \=> {
  shipit.initConfig({
    default: {
      branch: 'dev',
    },
    staging: {
      servers: 'staging.myproject.com',
      workspace: '/home/vagrant/website'
    },
    production: {
      servers: \[{
        host: 'app1.myproject.com',
        user: 'john',
      }, {
        host: 'app2.myproject.com',
        user: 'rob',
      }\],
      branch: 'production',
      workspace: '/var/www/website'
    }
  });

  ...
  shipit.task('pwd', function () {
    return shipit.remote('pwd');
  });
  ...
};

### Asynchronous config

If you can't call `shipit.initConfig(...)` right away because you need to get data asynchronously to do so, you can return a promise from the module:

module.exports \= async shipit \=> {
  const servers \= await getServers()
  shipit.initConfig({
    production: {
      servers: servers,
      // ...
    },
  })
}

Usage
-----

```
Usage: shipit <environment> <tasks...>

Options:

  -V, --version         output the version number
  --shipitfile <file>   Specify a custom shipitfile to use
  --require <files...>  Script required before launching Shipit
  --tasks               List available tasks
  --environments        List available environments
  -h, --help            output usage information
```

### Global configuration

#### ignores

Type: `Array<String>`

List of files excluded in `copyFromRemote` or `copyToRemote` methods.

#### key

Type: `String`

Path to SSH key.

#### servers

Type: `String` or `Array<String>`

The server can use the shorthand syntax or an object:

-   `user@host`: user and host
-   `user@host:4000`: user, host and port
-   `{ user, host, port, extraSshOptions }`: an object

### Shipit Deploy configuration

#### asUser

Type: `String`

Allows you to ‘become’ another user, different from the user that logged into the machine (remote user).

#### deleteOnRollback

Type: `Boolean`, default to `false`

Delete release when a rollback is done.

#### deployTo

Type: `String`

Directory where the code will be deployed on remote servers.

#### keepReleases

Type: `Number`

Number of releases kept on remote servers.

#### repositoryUrl

Type: `String`

Repository URL to clone, must be defined using `https` or `git+ssh` format.

#### shallowClone

Type: `Boolean`, default `true`

Clone only the last commit of the repository.

#### workspace

Type: `String`

If `shallowClone` is set to `false`, this directory will be used to clone the repository before deploying it.

#### verboseSSHLevel

Type: `Number`, default `0`

SSH verbosity level to use when connecting to remote servers. **0** (none), **1** (-v), **2** (-vv), **3** (-vvv).

### API

#### shipit.task(name, \[deps\], fn)

Create a new Shipit task. If a promise is returned task will wait for completion.

shipit.task('hello', async () \=> {
  await shipit.remote('echo "hello on remote"')
  await shipit.local('echo "hello from local"')
})

#### shipit.blTask(name, \[deps\], fn)

Create a new Shipit task that will block other tasks during its execution. If a promise is returned other task will wait before start.

shipit.blTask('hello', async () \=> {
  await shipit.remote('echo "hello on remote"')
  await shipit.local('echo "hello from local"')
})

#### shipit.start(tasks)

Run Shipit tasks.

shipit.start('task')
shipit.start('task1', 'task2')
shipit.start(\['task1', 'task2'\])

#### shipit.local(command, \[options\])

Run a command locally and streams the result. See ssh-pool#exec.

shipit
  .local('ls -lah', {
    cwd: '/tmp/deploy/workspace',
  })
  .then(({ stdout }) \=> console.log(stdout))
  .catch(({ stderr }) \=> console.error(stderr))

#### shipit.remote(command, \[options\])

Run a command remotely and streams the result. See ssh-pool#connection.run.

shipit
  .remote('ls -lah')
  .then((\[server1Result, server2Result\]) \=> {
    console.log(server1Result.stdout)
    console.log(server2Result.stdout)
  })
  .catch(error \=> {
    console.error(error.stderr)
  })

#### shipit.copyToRemote(src, dest, \[options\])

Make a remote copy from a local path to a remote path. See ssh-pool#connection.copyToRemote.

shipit.copyToRemote('/tmp/workspace', '/opt/web/myapp')

#### shipit.copyFromRemote(src, dest, \[options\])

Make a remote copy from a remote path to a local path. See ssh-pool#connection.copyFromRemote.

shipit.copyFromRemote('/opt/web/myapp', '/tmp/workspace')

#### shipit.log(...args)

Log using Shipit, same API as `console.log`.

shipit.log('hello %s', 'world')

Dependencies
------------

-   OpenSSH 5+
-   rsync 3+

Known Plugins
-------------

### Official

-   shipit-deploy

### Third Party

-   shipit-shared
-   shipit-db
-   shipit-assets
-   shipit-ssh
-   shipit-utils
-   shipit-npm
-   shipit-aws
-   shipit-captain
-   shipit-bower
-   shipit-composer
-   shipit-bastion
-   shipit-yaml
-   shipit-conditional

Who use Shipit?
---------------

-   Le Monde
-   Ghost blogging platform
-   Fusionary

License
-------

MIT
