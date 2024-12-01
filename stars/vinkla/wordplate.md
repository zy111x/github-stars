---
project: wordplate
stars: 2120
description: A boilerplate for WordPress, built with Composer and designed with sensible defaults.
---

WordPlate
=========

WordPlate is a boilerplate for WordPress, built with Composer and designed with sensible defaults.

-   Features
-   Installation
-   Configuration
    -   Public Directory
    -   Environment Configuration
    -   Salt Keys
-   Plugins
    -   WordPress Packagist
    -   Must Use Plugins
    -   Included Plugins
-   Vite.js
-   Mail
-   FAQ
-   Upgrade Guide
-   Acknowledgements
-   License

Features
--------

-   **WordPress + Composer = ❤️**
    
    WordPress can be installed and updated with ease using Composer. To update WordPress, simply run the command `composer update`.
    
-   **Environment Files**
    
    Similar to Laravel, WordPlate stores environment variables, such as database credentials, in an `.env` file.
    
-   **WordPress Packagist**
    
    WordPress Packagist enables the management of WordPress plugins and themes through Composer.
    
-   **Must-use plugins**
    
    Don't worry about clients deactivating plugins; must-use plugins are enabled by default.
    
-   **Vite.js**
    
    Using Vite, you can rapidly set up and begin building and minifying your CSS and JavaScript.
    
-   **Debugging**
    
    Familiar debugging helper functions are integrated such as `dump()` and `dd()`.
    
-   **Clean UI**
    
    Enhance the WordPress dashboard and improves the user experience for clients.
    
-   **Security**
    
    We've replaced WordPress' outdated and insecure MD5-based password hashing with modern and secure bcrypt using the `roots/wp-password-bcrypt` package.
    

Installation
------------

Before using WordPlate, make sure you have PHP 8.2 and MySQL 8.0 installed on your computer. You'll also need to have Composer, a package manager for PHP, installed on your computer.

To install WordPlate, open your terminal and enter the following command:

composer create-project --prefer-dist vinkla/wordplate example-app

After installing WordPlate, you'll need to update the database credentials in the `.env` file. This file is located in the root directory of your project. Open the file and update the following lines with your database credentials:

DB\_NAME\=database
DB\_USER\=username
DB\_PASSWORD\=password

To run your WordPlate application, you may serve it using PHP's built-in web server. Open your terminal and navigate to the `public` directory of your project. Then, enter the following command:

php -S 127.0.0.1:8000 -t public/

Finally, open your web browser and visit the following URLs to view your WordPlate application:

-   `http://127.0.0.1:8000/` - Your website
-   `http://127.0.0.1:8000/wordpress/wp-admin` - The dashboard

Configuration
-------------

### Public Directory

After installing WordPlate, you'll need to configure your web server's document or web root to be the `public` directory. This is where the main entry point for your application, `index.php`, is located.

By setting the `public` directory as your web server's document root, you ensure that all HTTP requests are routed through the front controller, which handles the requests and returns the appropriate responses.

This configuration helps to improve the security and performance of your application by preventing direct access to files outside of the `public` directory.

### Environment Configuration

WordPlate makes it easy to manage different configuration values based on the environment where your application is running. For example, you may need to use a different database locally than you do on your production server.

To accomplish this, WordPlate uses the `vlucas/phpdotenv` PHP package. When you install WordPlate, a `.env.example` file is included in the root directory of your application. If you installed WordPlate via Composer, this file will automatically be renamed to `.env`. Otherwise, you should rename the file manually.

It's important to note that your `.env` file should not be committed to your application's source control. This is because each developer or server using your application may require a different environment configuration. Additionally, committing your `.env` file to source control would be a security risk in the event that an intruder gains access to your repository, as any sensitive credentials would be exposed.

To learn more about managing environment variables in WordPlate, you can refer to Laravel's documentation on the topic:

-   Environment Variable Types
-   Retrieving Environment Configuration

### Salt Keys

It's important to add salt keys to your environment file. These keys are used to encrypt sensitive data, such as user sessions, and help to ensure the security of your application.

If you don't set the salt keys, your user sessions and other encrypted data may be vulnerable to attacks. To make it easier to generate secure salt keys, we've created a salt key generator that you can use. If you haven't already done so, copy the `.env.example` file to a new file named `.env`. Then visit the generator and copy the randomly generated keys to your `.env` file.

Plugins
-------

### WordPress Packagist

WordPlate includes integration with WordPress Packagist, a Composer repository that mirrors the WordPress plugin and theme directories. With this integration, you can install and manage plugins using Composer.

To install a plugin, use `wpackagist-plugin` as the vendor name and the plugin slug as the package name. For example, to install the `clean-image-filenames` plugin, you would use the following command:

composer require wpackagist-plugin/clean-image-filenames

The installed packages will be located in the `public/plugins` directory.

Here's an example of what your `composer.json` file might look like:

"require": {
    "wpackagist-plugin/clean-image-filenames": "^1.5"
}

For more information and examples, please visit the WordPress Packagist website.

### Must Use Plugins

Must-use plugins (also known as mu-plugins) are a type of WordPress plugin that is installed in a special directory inside the content folder. These plugins are automatically enabled on all sites in the WordPress installation.

To install plugins into the `mu-plugins` directory, add the plugin name to the `installer-paths` of your `composer.json` file:

"installer-paths": {
    "public/mu-plugins/{$name}": \[
        "type:wordpress-muplugin",
        "wpackagist-plugin/clean-image-filenames",
    \]
}

To install the plugin, use `wpackagist-plugin` as the vendor name and the plugin slug as the package name:

composer require wpackagist-plugin/clean-image-filenames

The plugin will be installed in the `public/mu-plugins` directory.

For more information on the must-use plugin autoloader, please refer to the Bedrock documentation.

### Included Plugins

#### Headache

An easy-to-swallow painkiller plugin for WordPress. It removes a lot of default WordPress stuff you just can't wait to get rid of. It removes meta tags such as feeds, version numbers and emojis.

#### Clean Image Filenames

The plugin automatically converts language accent characters in filenames when uploading to the media library. Characters are converted into browser and server friendly, non-accent characters.

-   `Räksmörgås.jpg` → `raksmorgas.jpg`
-   `Æblegrød_FTW!.gif` → `aeblegrod-ftw.gif`
-   `Château de Ferrières.png` → `chateau-de-ferrieres.png`

Vite.js
-------

Vite is a build tool that provides a faster and leaner development experience for modern web projects. It comes with sensible defaults and is highly extensible via its Plugin and JavaScript APIs with full typing support.

# Start the dev server...
npm run dev

# Build for production...
npm run build

Learn more about Vite's backend integration.

Mail
----

To set up custom SMTP credentials for sending emails in your WordPlate application, you need to configure the required environment variables in your `.env` file.

MAIL\_HOST\=127.0.0.1
MAIL\_PORT\=2525
MAIL\_USERNAME\=null
MAIL\_PASSWORD\=null
MAIL\_ENCRYPTION\=null
MAIL\_FROM\_ADDRESS\="hello@example.com"
MAIL\_FROM\_NAME\="Example"

If you're using a local email service like Mailhog or Mailpit, you need to disable encryption by setting the `MAIL_ENCRYPTION` environment variable to `null`.

FAQ
---

**Can I add WordPress constants to the environment file?**

This is possible by updating the `public/wp-config.php` file after the WordPlate application have been created.

define('WP\_DISABLE\_FATAL\_ERROR\_HANDLER', env('WP\_DISABLE\_FATAL\_ERROR\_HANDLER', false));

+define('WP\_ALLOW\_MULTISITE', env('WP\_ALLOW\_MULTISITE', true));

Then you may add the constant to the `.env` file.

WP\_DEFAULT\_THEME=wordplate
+WP\_ALLOW\_MULTISITE=true

**Can I disable WP-Cron and set up a manual cron job?**

WordPlate allows you to disable the internal WordPress cron system via the `DISABLE_WP_CRON` environment variable:

DISABLE\_WP\_CRON\=true

It is recommended to manually set a cron job if you enable this setting and disable the WordPress cron. You'll need to add the following in your crontab file:

\*/5 \* \* \* \* curl https://example.com/wp/wp-cron.php

**Can I install languages with Composer?**

If you want to install language packs using Composer, we recommend looking at the WP Languages project. Below is an example of a `composer.json` file that installs the Swedish language pack for WordPress.

{
    "require": {
        "koodimonni-language/core-sv\_se": "\*",
    },
    "repositories": \[
        {
            "type": "composer",
            "url": "https://wp-languages.github.io",
            "only": \[
                "koodimonni-language/\*"
            \]
        }
    \],
    "config": {
        "allow-plugins": {
            "koodimonni/composer-dropin-installer": true
        },
    },
    "extra": {
        "dropin-paths": {
            "public/languages/": \[
                "vendor:koodimonni-language"
            \]
        }
    }
}

**Can I rename the public directory?**

Update your `.gitignore`, `composer.json`, `.vite.config.js`, and `wp-cli.yml` files with the new path to the `public` directory. Then, run `composer update` in the root of your project.

**Can I rename the WordPress directory?**

By default WordPlate will put the WordPress in `public/wordpress`. If you want to change this there are a couple of steps you need to go through. Let's say you want to change the default WordPress location to `public/wp`:

1.  Update the `wordpress-install-dir` path in your `composer.json` file.
    
2.  Update `wordpress` to `wp` in `wordplate/public/.gitignore`.
    
3.  Update the last line in the `public/index.php` file to:
    
    require \_\_DIR\_\_.'/wp/wp-blog-header.php';
    
4.  Update the `WP_DIR` environment variable in the `.env` file to `wp`.
    
5.  If you're using WP-CLI, update the path in the `wp-cli.yml` file to `public/wp`.
    
6.  Remove the `public/wordpress` directory if it exist and then run `composer update`.
    

**Can I rename the theme directory?**

For most applications you may leave the theme directory as it is. If you want to rename the `wordplate` theme to something else you'll also need to update the `WP_DEFAULT_THEME` environment variable in the `.env` file.

**Can I use WordPlate with Laravel Herd or Valet?**

If you're using Laravel Herd or Valet together with WordPlate, you may use our custom driver:

<?php

namespace Valet\\Drivers\\Custom;

use Valet\\Drivers\\BasicValetDriver;

class WordPlateValetDriver extends BasicValetDriver
{
    public function serves(string $sitePath, string $siteName, string $uri): bool
    {
        return is\_dir($sitePath . '/public/wordpress');
    }

    public function isStaticFile(string $sitePath, string $siteName, string $url)
    {
        $staticFilePath = $sitePath . '/public' . $url;

        if ($this\->isActualFile($staticFilePath)) {
            return $staticFilePath;
        }

        return false;
    }

    public function frontControllerPath(string $sitePath, string $siteName, string $uri): ?string
    {
        return parent::frontControllerPath(
            $sitePath . '/public',
            $siteName,
            $this\->forceTrailingSlash($uri)
        );
    }

    private function forceTrailingSlash(string $uri)
    {
        if (substr($uri, -1 \* strlen('/wordpress/wp-admin')) === '/wordpress/wp-admin') {
            header('Location: ' . $uri . '/');
            exit;
        }

        return $uri;
    }
}

**Can I use WordPlate with Tinkerwell?**

If you're using Tinkerwell together with WordPlate, you may use our custom driver:

<?php

final class WordPlateTinkerwellDriver extends WordpressTinkerwellDriver
{
    public function canBootstrap($projectPath)
    {
        return file\_exists($projectPath . '/public/wordpress/wp-load.php');
    }

    public function bootstrap($projectPath)
    {
        require $projectPath . '/public/wordpress/wp-load.php';
    }

    public function appVersion()
    {
        return 'WordPlate ' . get\_bloginfo('version');
    }
}

Upgrade Guide
-------------

**Upgrading from 11 to 12**

1.  The `wordplate/framework` package has been archived. Update the `composer.json` file:
    
    "require": {
    \-   "wordplate/framework": "^11.1",
    +   "composer/installers": "^2.1",
    +   "johnpbloch/wordpress-core-installer": "^2.0",
    +   "johnpbloch/wordpress-core": "^6.0",
    +   "roots/bedrock-autoloader": "^1.0",
    +   "roots/wp-password-bcrypt": "^1.1",
    +   "symfony/http-foundation": "^6.0",
    +   "symfony/var-dumper": "^6.0",
    +   "vlucas/phpdotenv": "^5.4"
    }
    
2.  Replace your `public/wp-config.php` file with the one in this repository. Remember to save any custom constants defined in your `wp-config.php` file.
    
3.  Add the `src/helpers.php` file from this repository and autoload it in the `composer.json` file:
    
    +"autoload": {
    +    "files": \[
    +        "src/helpers.php"
    +    \]
    +}
    
4.  Run `composer update` in the root of your project.
    

**Upgrading from 10 to 11**

1.  WordPlate now requires PHP 8.0 or later.
    
2.  Bump the version number in the `composer.json` file to `^11.0`.
    
3.  Run `composer update` in the root of your project.
    

**Upgrading from 9 to 10**

1.  WordPlate now requires PHP 7.4 or later.
    
2.  Bump the version number in the `composer.json` file to `^10.0`.
    
3.  Rename `WP_ENV` to `WP_ENVIRONMENT_TYPE` in the environment file.
    
4.  Rename `WP_THEME` to `WP_DEFAULT_THEME` in the environment file.
    
5.  Rename `WP_URL` to `WP_HOME` in the environment file (if it exists).
    
6.  If you're using the `WP_CACHE` environment variable you'll need to define it in the `public/wp-config.php` file:
    
    $application->run();
    
    +define('WP\_CACHE', env('WP\_CACHE', false));
    
    $table\_prefix = env('DB\_TABLE\_PREFIX', 'wp\_');
    
7.  Optional: Rename `WP_PREFIX` to `DB_TABLE_PREFIX` in the following files:
    
    -   `.env`
    -   `.env.example`
    -   `public/wp-config.php`
8.  Run `composer update` in the root of your project.
    

**Upgrading from 8 to 9**

1.  Bump the version number in the `composer.json` file to `^9.0`.
    
2.  Copy the `public/mu-plugins/mu-plugins.php` file into your project.
    
3.  Update the `public/.gitignore` file to allow the new `mu-plugins.php` file:
    
    \-mu-plugins/
    +mu-plugins/\*
    +!mu-plugins/mu-plugins.php
    
4.  Run `composer update` in the root of your project.
    

**Upgrading from 7 to 8**

1.  WordPlate now requires PHP 7.2 or later.
    
2.  Bump the version number in the `composer.json` file to `^8.0`.
    
    > \[!Note\]  
    > WordPlate 8.0 requires WordPress 5.3 or later.
    
3.  Laravel's helper functions is now optional in WordPlate. If you want to use the functions, install the `laravel/helpers` package, with Composer, in the root of your project:
    
    composer require laravel/helpers
    
4.  Laravel's collections are now optional in WordPlate. If you want to use collections, install the `tightenco/collect` package, with Composer, in the root of your project:
    
    composer require tightenco/collect
    
5.  The `mix` helper function is now optional in WordPlate. If you want to use the function, install the `ibox/mix-function` package, with Composer, in the root of your project:
    
    composer require ibox/mix-function
    
6.  Replace any usage of `asset`, `stylesheet_url` and `template_url` functions with WordPress's `get_theme_file_uri` function.
    
7.  Replace any usage of `stylesheet_path` and `template_path` functions with WordPress's `get_theme_file_path` function .
    
8.  The `base_path` and `template_slug` functions have been removed.
    
9.  Run `composer update` in the root of your project.
    

**Upgrading from 6 to 7**

1.  Bump the version number in the `composer.json` file to `^7.0`.
    
    > \[!Note\]  
    > WordPlate 7.0 requires WordPress 5.0 or later.
    
2.  Update the `realpath(__DIR__)` to `realpath(__DIR__.'/../')` in the `wp-config.php` file.
    
3.  If your public directory isn't named `public`, add the following line to the `wp-config.php` file:
    
    $application\->setPublicPath(realpath(\_\_DIR\_\_));
    
4.  Run `composer update` in the root of your project.
    

**Upgrading from 5 to 6**

1.  Bump the version number in the `composer.json` file to `^6.0`.
    
2.  Update the `realpath(__DIR__.'/../')` to `realpath(__DIR__)` in the `wp-config.php` file.
    
3.  Run `composer update` in the root of your project.
    

**Upgrading from 4 to 5**

1.  Bump the version number in the `composer.json` file to `^5.0`.
    
2.  Copy and paste the contents of the `wp-config.php` file into your application.
    
    > \[!Note\]  
    > Make sure you don't overwrite any of your custom constants.
    
3.  Run `composer update` in the root of your project.
    

Acknowledgements
----------------

WordPlate wouldn't be possible without these amazing open-source projects.

-   `composer/installers`
-   `motdotla/dotenv`
-   `outlandish/wpackagist`
-   `roots/bedrock-autoloader`
-   `roots/wordpress`
-   `roots/wp-password-bcrypt`
-   `symfony/http-foundation`
-   `symfony/var-dumper`
-   `upperdog/clean-image-filenames`
-   `vinkla/headache`
-   `vitejs/vite`
-   `vlucas/phpdotenv`

License
-------

The WordPlate package is open-sourced software licensed under the MIT license.
