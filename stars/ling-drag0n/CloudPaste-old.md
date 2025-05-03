---
project: CloudPaste-old
stars: 530
description: 新版已重构！详细查看README。基于 Cloudflare Workers 的在线剪贴板和文件分享服务，支持 Markdown、阅后即焚、文本/文件分享、密码保护等功能
url: https://github.com/ling-drag0n/CloudPaste-old
---

CloudPaste - Online Clipboard 📋
================================

English | 中文

An online clipboard and file sharing service based on Cloudflare Workers. Supports Markdown, password protection, file uploads, and more.

👉Refactored version: https://github.com/ling-drag0n/CloudPaste

Old version deployment tutorial, click to expand!

✨ Features
----------

### 📝 Text Sharing

-   Supports plain text and Markdown styles
-   Real-time Markdown preview with synchronized scrolling
-   Resizable editor with bidirectional stretching
-   Password protection
-   Optional expiration time
-   Custom link suffix (available for single file uploads only)
-   Access count limit settings
-   Text sharing supports export to PDF, Word documents, and PNG images
-   Auto-save draft feature
    -   Automatically saves before browser closes
    -   Recoverable on next visit
    -   Automatically clears after successful submission

### 📁 File Sharing

-   Drag and drop upload support
-   Multiple file uploads
-   Configurable file size limits and total storage limits
-   Password protection
-   Optional expiration time
-   Real-time upload progress display
-   File preview functionality
-   Upload speed display
-   Upload cancellation support
-   Custom link suffix (available for single file uploads only)
-   QR code sharing and direct link sharing
-   Download count limit settings

### 🔐 Access Control

-   Storage space usage monitoring
-   Password Protection
    -   Password settings for text and file sharing
    -   Administrators can modify or remove passwords at any time
    -   Encrypted password storage
-   Text Content Control
    -   Only administrators can edit shared text content
    -   Regular users can only view
    -   Support for modifying expiration time
    -   Support for modifying access count limits
-   Upload Control
    -   Administrators can enable/disable text upload functionality
    -   Administrators can enable/disable file upload functionality
    -   Prevention of malicious resource consumption

### 🛡️ Security Features

-   Encrypted password storage
-   Access permission control
-   CORS security configuration
-   Upload limit protection
-   Automatic expiration cleanup
    -   Regular checks for expired content
    -   Automatic deletion of expired shares
    -   Storage space release
    -   Cleanup check triggered by access

### 🎨 Interface Optimization

-   Full resolution responsive layout
-   Optimized mobile adaptation
-   Beautiful scrollbar styles
-   Smooth animation transitions
-   File upload progress animation
-   Copy success notification animation
-   Error notification animation effects
-   Drag and drop upload visual feedback
-   Dark theme support (with minor imperfections)

🚀 Deployment (Automatic)
-------------------------

### 1\. GitHub Actions Deployment (Optional)

1.  **Fork this Repository**
    
    -   Click the Fork button in the top right
    -   Wait for repository cloning to complete
2.  **Set GitHub Secrets** In your GitHub repository, go to Settings -> Secrets and variables -> Actions -> New Repository secrets, and add the following secrets:
    
    -   `CF_API_TOKEN`: Cloudflare API token
        
        -   Visit Cloudflare Dashboard
        -   Create new API token - select "Edit Cloudflare Workers"
    -   `CF_ACCOUNT_ID`: Cloudflare account ID
        
        -   Found on the right side of your Cloudflare dashboard
    -   `ADMIN_USERNAME`: Administrator username
        
        -   Set your admin account
    -   `ADMIN_PASSWORD`: Administrator password
        
        -   Set your admin password
3.  **Run Workflow**
    

### 2\. One-Click Deployment

After deployment, there's no password by default. You need to set up variables and secrets in the corresponding worker under Cloudflare:

🚀 Deployment (Manual)
----------------------

### 1\. Prerequisites

1.  Register for a Cloudflare account
2.  Access the Cloudflare console

### 2\. Create Storage Resources

1.  Create KV Namespace
    
    -   Name: `PASTE_STORE`
    -   Used for storing text content
2.  Create KV Namespace
    
    -   Name: `UPLOAD_STATUS`
    -   Used for storing upload functionality switch status
3.  Create R2 Bucket
    
    -   Name: `cloudpaste-files`
    -   Used for storing uploaded files

### 3\. Create Worker

1.  Create a new Worker script
    
2.  Configure environment variables:
    
    ADMIN\_USERNAME\=your-admin-username
    ADMIN\_PASSWORD\=your-admin-password
    
3.  Bind storage:
    
    -   KV bindings:
        
        # Text storage
        Variable name: PASTE\_STORE
        Select created KV namespace
        
        # Upload status control
        Variable name: UPLOAD\_STATUS
        Select created KV namespace
        
    -   R2 binding:
        
        Variable name: FILE\_STORE
        Select created R2 bucket
        
4.  KV Namespace Description:
    
    -   `PASTE_STORE`: For storing text share content and metadata
    -   `UPLOAD_STATUS`: For storing and controlling upload functionality switches
        -   `textUpload`: Controls text upload functionality
        -   `fileUpload`: Controls file upload functionality
    -   `FILE_STORE`: For storing uploaded files
5.  Example Configuration (wrangler.toml):
    
    \[\[kv\_namespaces\]\]
    binding = "PASTE\_STORE"
    id = "your-KV-namespace-ID"
    
    \[\[kv\_namespaces\]\]
    binding = "UPLOAD\_STATUS"
    id = "your-KV-namespace-ID"
    
    \[\[r2\_buckets\]\]
    bucket\_name = "cloudpaste-files"
    binding = "FILE\_STORE"
    

### 4\. Deploy Code

1.  Copy the complete code from `worker.js`
2.  Paste it into the Worker editor
3.  Save and deploy

🔧 Code Structure
-----------------

### Main Components

1.  `worker.js`
    
    -   Main Worker code
    -   Contains route handling and API implementation
2.  Utility Functions
    
    -   `generateId`: Generate random ID
    -   `hashPassword`: Password encryption
    -   `verifyPassword`: Password verification
    -   `calculateExpiryTime`: Calculate expiration time
    -   `isExpired`: Check if expired
3.  Frontend Components
    
    -   Vue 3 application
    -   Markdown rendering
    -   Code highlighting
    -   File upload interface

### 📡 API Endpoints

1.  Text Related
    
    POST /api/paste     # Create text share
    GET  /api/paste/:id # Get text content
    
2.  File Related
    
    POST /api/file      # Upload file
    GET  /api/file/:id  # Get file information
    GET  /api/file/:id?download=true # Download file
    GET  /download/:id  # Direct file download
    
3.  Admin Related
    
    POST   /api/admin/login                    # Admin login
    GET    /api/admin/shares                   # Get share list
    GET    /api/admin/storage                  # Get storage space usage
    DELETE /api/admin/paste/:id                # Delete text share
    DELETE /api/admin/file/:id                 # Delete file share
    PUT    /api/admin/paste/:id/content        # Update text content
    PUT    /api/admin/paste/:id/password       # Modify text share password
    PUT    /api/admin/file/:id/password        # Modify file share password
    GET    /api/admin/upload-status            # Get upload status
    PUT    /api/admin/upload-status            # Update upload status
    PUT    /api/admin/file/:id/settings        # Modify file share settings
    

🔄 Automation Features
----------------------

### Expired Content Cleanup

-   Automatic detection of expired content
-   Scheduled cleanup of expired files and text
-   Storage space release
-   Automatic cleanup triggered every hour

⚠️ Usage Limitations
--------------------

-   Maximum file size: 98MB (modifiable)
-   Supported expiration times: 1 hour, 1 day, 7 days, 30 days, never expires
-   Concurrent requests limited by Worker
-   Free R2 total storage space: 10GB (modifiable)
-   Share access count limits:
    -   Text shares can set maximum view count
    -   File shares can set maximum download count
    -   Custom count settings, 0 means unlimited
    -   Automatic deletion when limit is reached
-   Custom link limitations:
    -   Only supports letters, numbers, hyphens, and underscores
    -   Only available for single file uploads
-   Storage space warnings:
    -   Warning at 70% usage
    -   Danger alert at 90% usage
    -   Upload disabled when storage is full

📝 Notes
--------

1.  Ensure correct environment variable configuration
    
2.  Regular storage usage checks
    
    -   Monitor storage space through admin panel
    -   Pay attention to storage space usage warnings
    -   Timely cleanup of unnecessary content
3.  Monitor error logs
    
4.  Mind Worker usage quotas
    
5.  For direct link downloads on server file transfer
    
    # Direct download
    curl -O https://your-domain/download/fileId
    
    # Download with password
    curl -H "X-Password: your-password" -O https://your-domain/download/fileId
    

🛠️ Built With
--------------

-   Cloudflare Workers
-   Cloudflare KV
-   Cloudflare R2
-   Vue 3
-   Marked (Markdown rendering)
-   Highlight.js (code highlighting)

📱 Browser Support
------------------

-   Chrome (recommended)
-   Firefox
-   Safari
-   Edge
-   Mobile browsers

📄 License
----------

MIT License

🔗 Related Links
----------------

-   Cloudflare Workers Documentation
-   Vue 3 Documentation
-   Marked Documentation

Star History
------------
