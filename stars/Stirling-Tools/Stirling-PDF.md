---
project: Stirling-PDF
stars: 47025
description: #1 Locally hosted web application that allows you to perform various operations on PDF files
url: https://github.com/Stirling-Tools/Stirling-PDF
---

Stirling-PDF
============

Stirling-PDF is a robust, locally hosted web-based PDF manipulation tool using Docker. It enables you to carry out various operations on PDF files, including splitting, merging, converting, reorganizing, adding images, rotating, compressing, and more. This locally hosted web application has evolved to encompass a comprehensive set of features, addressing all your PDF requirements.

Stirling-PDF does not initiate any outbound calls for record-keeping or tracking purposes.

All files and PDFs exist either exclusively on the client side, reside in server memory only during task execution, or temporarily reside in a file solely for the execution of the task. Any file downloaded by the user will have been deleted from the server by that point.

Features
--------

-   Enterprise features like SSO Check here
-   Dark mode support
-   Custom download options
-   Parallel file processing and downloads
-   Custom 'Pipelines' to run multiple features in a queue
-   API for integration with external scripts
-   Optional Login and Authentication support (see here for documentation)
-   Database Backup and Import (see here for documentation)

PDF Features
------------

### Page Operations

-   View and modify PDFs - View multi-page PDFs with custom viewing, sorting, and searching. Plus on-page edit features like annotate, draw, and adding text and images. (Using PDF.js with Joxit and Liberation fonts)
-   Full interactive GUI for merging/splitting/rotating/moving PDFs and their pages
-   Merge multiple PDFs into a single resultant file
-   Split PDFs into multiple files at specified page numbers or extract all pages as individual files
-   Reorganize PDF pages into different orders
-   Rotate PDFs in 90-degree increments
-   Remove pages
-   Multi-page layout (format PDFs into a multi-paged page)
-   Scale page contents size by set percentage
-   Adjust contrast
-   Crop PDF
-   Auto split PDF (with physically scanned page dividers)
-   Extract page(s)
-   Convert PDF to a single page
-   Overlay PDFs on top of each other
-   PDF to single page
-   Split PDF by sections

### Conversion Operations

-   Convert PDFs to and from images
-   Convert any common file to PDF (using LibreOffice)
-   Convert PDF to Word/PowerPoint/others (using LibreOffice)
-   Convert HTML to PDF
-   Convert PDF to xml
-   Convert PDF to CSV
-   URL to PDF
-   Markdown to PDF

### Security & Permissions

-   Add and remove passwords
-   Change/set PDF permissions
-   Add watermark(s)
-   Certify/sign PDFs
-   Sanitize PDFs
-   Auto-redact text

### Other Operations

-   Add/generate/write signatures
-   Split by Size or PDF
-   Repair PDFs
-   Detect and remove blank pages
-   Compare two PDFs and show differences in text
-   Add images to PDFs
-   Compress PDFs to decrease their filesize (using qpdf)
-   Extract images from PDF
-   Remove images from PDF
-   Extract images from scans
-   Remove annotations
-   Add page numbers
-   Auto rename file by detecting PDF header text
-   OCR on PDF (using tesseract)
-   PDF/A conversion (using libreoffice)
-   Edit metadata
-   Flatten PDFs
-   Get all information on a PDF to view or export as JSON
-   Show/detect embedded JavaScript

For an overview of the tasks and the technology each uses, please view Endpoint-groups.md.

A demo of the app is available here.

Technologies Used
-----------------

-   Spring Boot + Thymeleaf
-   PDFBox
-   LibreOffice for advanced conversions
-   qpdf
-   HTML, CSS, JavaScript
-   Docker
-   PDF.js
-   PDF-LIB.js

How to Use
----------

### Windows

For Windows users, download the latest Stirling-PDF.exe from our release section or by clicking here.

### Locally

Please view the LocalRunGuide.

### Docker / Podman

Note

https://hub.docker.com/r/stirlingtools/stirling-pdf

Stirling-PDF has three different versions: a full version, an ultra-lite version, and a 'fat' version. Depending on the types of features you use, you may want a smaller image to save on space. To see what the different versions offer, please look at our version mapping. For people that don't mind space optimization, just use the latest tag.

Please note in the examples below, you may need to change the volume paths as needed, e.g., `./extraConfigs:/configs` to `/opt/stirlingpdf/extraConfigs:/configs`.

### Docker Run

docker run -d \\
  -p 8080:8080 \\
  -v ./trainingData:/usr/share/tessdata \\
  -v ./extraConfigs:/configs \\
  -v ./logs:/logs \\
# Optional customization (not required)
# -v /location/of/customFiles:/customFiles \\
  -e DOCKER\_ENABLE\_SECURITY=false \\
  -e INSTALL\_BOOK\_AND\_ADVANCED\_HTML\_OPS=false \\
  -e LANGS=en\_GB \\
  --name stirling-pdf \\
  stirlingtools/stirling-pdf:latest

### Docker Compose

version: '3.3'
services:
  stirling-pdf:
    image: stirlingtools/stirling-pdf:latest
    ports:
      - '8080:8080'
    volumes:
      - ./trainingData:/usr/share/tessdata # Required for extra OCR languages
      - ./extraConfigs:/configs
#      - ./customFiles:/customFiles/
#      - ./logs:/logs/
    environment:
      - DOCKER\_ENABLE\_SECURITY=false
      - INSTALL\_BOOK\_AND\_ADVANCED\_HTML\_OPS=false
      - LANGS=en\_GB

Note: Podman is CLI-compatible with Docker, so simply replace "docker" with "podman".

### Kubernetes

See the kubernetes helm chart here

Enable OCR/Compression Feature
------------------------------

Please view the HowToUseOCR.md.

Reuse Stored Files
------------------

Certain functionality like `Sign` supports pre-saved files stored at `/customFiles/signatures/`. Image files placed within here will be accessible to be used via the web UI. Currently, this supports two folder types:

-   `/customFiles/signatures/ALL_USERS`: Accessible to all users, useful for organizations where many users use the same files or for users not using authentication
-   `/customFiles/signatures/{username}`: Such as `/customFiles/signatures/froodle`, accessible only to the `froodle` username, private for all others

Supported Languages
-------------------

Stirling-PDF currently supports 37 languages!

Language

Progress

Arabic (العربية) (ar\_AR)

Azerbaijani (Azərbaycan Dili) (az\_AZ)

Basque (Euskara) (eu\_ES)

Bulgarian (Български) (bg\_BG)

Catalan (Català) (ca\_CA)

Croatian (Hrvatski) (hr\_HR)

Czech (Česky) (cs\_CZ)

Danish (Dansk) (da\_DK)

Dutch (Nederlands) (nl\_NL)

English (English) (en\_GB)

English (US) (en\_US)

French (Français) (fr\_FR)

German (Deutsch) (de\_DE)

Greek (Ελληνικά) (el\_GR)

Hindi (हिंदी) (hi\_IN)

Hungarian (Magyar) (hu\_HU)

Indonesian (Bahasa Indonesia) (id\_ID)

Irish (Gaeilge) (ga\_IE)

Italian (Italiano) (it\_IT)

Japanese (日本語) (ja\_JP)

Korean (한국어) (ko\_KR)

Norwegian (Norsk) (no\_NB)

Polish (Polski) (pl\_PL)

Portuguese (Português) (pt\_PT)

Portuguese Brazilian (Português) (pt\_BR)

Romanian (Română) (ro\_RO)

Russian (Русский) (ru\_RU)

Serbian Latin alphabet (Srpski) (sr\_LATN\_RS)

Simplified Chinese (简体中文) (zh\_CN)

Slovakian (Slovensky) (sk\_SK)

Spanish (Español) (es\_ES)

Swedish (Svenska) (sv\_SE)

Thai (ไทย) (th\_TH)

Traditional Chinese (繁體中文) (zh\_TW)

Turkish (Türkçe) (tr\_TR)

Ukrainian (Українська) (uk\_UA)

Vietnamese (Tiếng Việt) (vi\_VN)

Contributing (Creating Issues, Translations, Fixing Bugs, etc.)
---------------------------------------------------------------

Please see our Contributing Guide.

Stirling PDF Enterprise
-----------------------

Stirling PDF offers a Enterprise edition of its software, This is the same great software but with added features and comforts

### Whats included

-   Prioritised Support tickets via support@stirlingpdf.com to reach directly to Stirling-PDF team for support and 1:1 meetings where applicable (Provided they come from same email domain registered with us)
-   Prioritised Enhancements to Stirling-PDF where applicable
-   Base SSO support
-   Advanced SSO such as automated login handling (Coming very soon)
-   SAML SSO (Coming very soon)
-   Custom automated metadata handling
-   Advanced user configurations (Coming soon)
-   Plus other exciting features to come

Check out of docs on it or our official website

Customization
-------------

Stirling-PDF allows easy customization of the app, including things like:

-   Custom application name
-   Custom slogans, icons, HTML, images, CSS, etc. (via file overrides)

There are two options for this, either using the generated settings file `settings.yml`, which is located in the `/configs` directory and follows standard YAML formatting, or using environment variables, which would override the settings file.

For example, in `settings.yml`, you might have:

security:
  enableLogin: 'true'

To have this via an environment variable, you would use `SECURITY_ENABLELOGIN`.

The current list of settings is:

security:
  enableLogin: false # set to 'true' to enable login
  csrfDisabled: true # set to 'true' to disable CSRF protection (not recommended for production)
  loginAttemptCount: 5 # lock user account after 5 tries; when using e.g. Fail2Ban you can deactivate the function with -1
  loginResetTimeMinutes: 120 # lock account for 2 hours after x attempts
  loginMethod: all # 'all' (Login Username/Password and OAuth2\[must be enabled and configured\]), 'normal'(only Login with Username/Password) or 'oauth2'(only Login with OAuth2)
  initialLogin:
    username: '' # initial username for the first login
    password: '' # initial password for the first login
  oauth2:
    enabled: false # set to 'true' to enable login (Note: enableLogin must also be 'true' for this to work)
    client:
      keycloak:
        issuer: '' # URL of the Keycloak realm's OpenID Connect Discovery endpoint
        clientId: '' # client ID for Keycloak OAuth2
        clientSecret: '' # client secret for Keycloak OAuth2
        scopes: openid, profile, email # scopes for Keycloak OAuth2
        useAsUsername: preferred\_username # field to use as the username for Keycloak OAuth2
      google:
        clientId: '' # client ID for Google OAuth2
        clientSecret: '' # client secret for Google OAuth2
        scopes: https://www.googleapis.com/auth/userinfo.email, https://www.googleapis.com/auth/userinfo.profile # scopes for Google OAuth2
        useAsUsername: email # field to use as the username for Google OAuth2
      github:
        clientId: '' # client ID for GitHub OAuth2
        clientSecret: '' # client secret for GitHub OAuth2
        scopes: read:user # scope for GitHub OAuth2
        useAsUsername: login # field to use as the username for GitHub OAuth2
    issuer: '' # set to any provider that supports OpenID Connect Discovery (/.well-known/openid-configuration) endpoint
    clientId: '' # client ID from your provider
    clientSecret: '' # client secret from your provider
    autoCreateUser: false # set to 'true' to allow auto-creation of non-existing users
    blockRegistration: false # set to 'true' to deny login with SSO without prior registration by an admin
    useAsUsername: email # default is 'email'; custom fields can be used as the username
    scopes: openid, profile, email # specify the scopes for which the application will request permissions
    provider: google # set this to your OAuth provider's name, e.g., 'google' or 'keycloak'
  saml2:
    enabled: false # currently in alpha, not recommended for use yet, enableAlphaFunctionality must be set to true
    autoCreateUser: false # set to 'true' to allow auto-creation of non-existing users
    blockRegistration: false # set to 'true' to deny login with SSO without prior registration by an admin
    registrationId: stirling
    idpMetadataUri: https://dev-XXXXXXXX.okta.com/app/externalKey/sso/saml/metadata
    idpSingleLogoutUrl: https://dev-XXXXXXXX.okta.com/app/dev-XXXXXXXX\_stirlingpdf\_1/externalKey/slo/saml
    idpSingleLoginUrl: https://dev-XXXXXXXX.okta.com/app/dev-XXXXXXXX\_stirlingpdf\_1/externalKey/sso/saml
    idpIssuer: http://www.okta.com/externalKey
    idpCert: classpath:okta.crt
    privateKey: classpath:saml-private-key.key
    spCert: classpath:saml-public-cert.crt

enterpriseEdition:
  enabled: false # set to 'true' to enable enterprise edition
  key: 00000000-0000-0000-0000-000000000000
  CustomMetadata:
    autoUpdateMetadata: false # set to 'true' to automatically update metadata with below values
    author: username # supports text such as 'John Doe' or types such as username to autopopulate with user's username
    creator: Stirling-PDF # supports text such as 'Company-PDF'
    producer: Stirling-PDF # supports text such as 'Company-PDF'

legal:
  termsAndConditions: https://www.stirlingpdf.com/terms-and-conditions # URL to the terms and conditions of your application (e.g. https://example.com/terms). Empty string to disable or filename to load from local file in static folder
  privacyPolicy: https://www.stirlingpdf.com/privacy-policy # URL to the privacy policy of your application (e.g. https://example.com/privacy). Empty string to disable or filename to load from local file in static folder
  accessibilityStatement: '' # URL to the accessibility statement of your application (e.g. https://example.com/accessibility). Empty string to disable or filename to load from local file in static folder
  cookiePolicy: '' # URL to the cookie policy of your application (e.g. https://example.com/cookie). Empty string to disable or filename to load from local file in static folder
  impressum: '' # URL to the impressum of your application (e.g. https://example.com/impressum). Empty string to disable or filename to load from local file in static folder

system:
  defaultLocale: en-US # set the default language (e.g. 'de-DE', 'fr-FR', etc)
  googlevisibility: false # 'true' to allow Google visibility (via robots.txt), 'false' to disallow
  enableAlphaFunctionality: false # set to enable functionality which might need more testing before it fully goes live (this feature might make no changes)
  showUpdate: false # see when a new update is available
  showUpdateOnlyAdmin: false # only admins can see when a new update is available, depending on showUpdate it must be set to 'true'
  customHTMLFiles: false # enable to have files placed in /customFiles/templates override the existing template HTML files
  tessdataDir: /usr/share/tessdata # path to the directory containing the Tessdata files. This setting is relevant for Windows systems. For Windows users, this path should be adjusted to point to the appropriate directory where the Tessdata files are stored.
  enableAnalytics: undefined # set to 'true' to enable analytics, set to 'false' to disable analytics; for enterprise users, this is set to true

ui:
  appName: '' # application's visible name
  homeDescription: '' # short description or tagline shown on the homepage
  appNameNavbar: '' # name displayed on the navigation bar

endpoints:
  toRemove: \[\] # list endpoints to disable (e.g. \['img-to-pdf', 'remove-pages'\])
  groupsToRemove: \[\] # list groups to disable (e.g. \['LibreOffice'\])

metrics:
  enabled: true # 'true' to enable Info APIs (\`/api/\*\`) endpoints, 'false' to disable

# Automatically Generated Settings (Do Not Edit Directly)
AutomaticallyGenerated:
  key: example
  UUID: example

There is an additional config file `/configs/custom_settings.yml` where users familiar with Java and Spring `application.properties` can input their own settings on top of Stirling-PDF's existing ones.

### Extra Notes

-   **Endpoints**: Currently, the `ENDPOINTS_TO_REMOVE` and `GROUPS_TO_REMOVE` endpoints can include comma-separated lists of endpoints and groups to disable. For example, `ENDPOINTS_TO_REMOVE=img-to-pdf,remove-pages` would disable both image-to-pdf and remove pages, while `GROUPS_TO_REMOVE=LibreOffice` would disable all things that use LibreOffice. You can see a list of all endpoints and groups here.
-   **customStaticFilePath**: Customize static files such as the app logo by placing files in the `/customFiles/static/` directory. An example of customizing the app logo is placing `/customFiles/static/favicon.svg` to override the current SVG. This can be used to change any `images/icons/css/fonts/js`, etc. in Stirling-PDF.

### Environment-Only Parameters

-   `SYSTEM_ROOTURIPATH` - Set the application's root URI (e.g. `/pdf-app` to set the root URI to `localhost:8080/pdf-app`)
-   `SYSTEM_CONNECTIONTIMEOUTMINUTES` - Set custom connection timeout values
-   `DOCKER_ENABLE_SECURITY` - Set to `true` to download security jar (required for authentication login)
-   `INSTALL_BOOK_AND_ADVANCED_HTML_OPS` - Download Calibre onto Stirling-PDF to enable PDF to/from book and advanced HTML conversion
-   `LANGS` - Define custom font libraries to install for document conversions

API
---

For those wanting to use Stirling-PDF's backend API to link with their own custom scripting to edit PDFs, you can view all existing API documentation here, or navigate to `/swagger-ui/index.html` of your Stirling-PDF instance for your version's documentation (or by following the API button in the settings of Stirling-PDF).

Login Authentication
--------------------

### Prerequisites

-   User must have the folder `./configs` volumed within Docker so that it is retained during updates.
-   Docker users must download the security jar version by setting `DOCKER_ENABLE_SECURITY` to `true` in environment variables.
-   Then either enable login via the `settings.yml` file or set `SECURITY_ENABLE_LOGIN` to `true`.
-   Now the initial user will be generated with username `admin` and password `stirling`. On login, you will be forced to change the password to a new one. You can also use the environment variables `SECURITY_INITIALLOGIN_USERNAME` and `SECURITY_INITIALLOGIN_PASSWORD` to set your own credentials straight away (recommended to remove them after user creation).

Once the above has been done, on restart, a new `stirling-pdf-DB.mv.db` will show if everything worked.

When you log in to Stirling-PDF, you will be redirected to the `/login` page to log in with those default credentials. After login, everything should function as normal.

To access your account settings, go to Account Settings in the settings cog menu (top right in the navbar). This Account Settings menu is also where you find your API key.

To add new users, go to the bottom of Account Settings and hit 'Admin Settings'. Here you can add new users. The different roles mentioned within this are for rate limiting. This is a work in progress and will be expanded on more in the future.

For API usage, you must provide a header with `X-API-Key` and the associated API key for that user.

FAQ
---

### Q1: What are your planned features?

-   Progress bar/tracking
-   Full custom logic pipelines to combine multiple operations together
-   Folder support with auto-scanning to perform operations on
-   Redact text (via UI, not just automated)
-   Add forms
-   Multi-page layout (stitch PDF pages together) support x rows y columns and custom page sizing
-   Fill forms manually or automatically

### Q2: Why is my application downloading .htm files? Why am i getting HTTP error 413?

This is an issue commonly caused by your NGINX configuration. The default file upload size for NGINX is 1MB. You need to add the following in your Nginx sites-available file: `client_max_body_size SIZE;` (where "SIZE" is 50M for example for 50MB files).

### Q3: Why is my download timing out?

NGINX has timeout values by default, so if you are running Stirling-PDF behind NGINX, you may need to set a timeout value, such as adding the config `proxy_read_timeout 3600;`.
