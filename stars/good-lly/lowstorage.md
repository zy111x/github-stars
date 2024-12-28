---
project: lowstorage
stars: 224
description: 💾 Simple, lightning fast, object pseudo-database for S3-compatible storages using Avro schema
url: https://github.com/good-lly/lowstorage
---

lowstorage | for server/less edges and S3-compatible storages  

================================================================

> **💾 Simple, lightning fast, "object database" for S3-compatible storages, strongly inspired by lowdb(https://github.com/typicode/lowdb/).**  

Dev:

Master:

\[github\] \[npm\]

Features
--------

-   **🚀 Lightweight** under ~135kb minified
-   **🔧 Minimalist** - only two (zero-dependency) dependencies wrapped in a single package
-   **💾 Familiar API** - similar to object databases like MongoDB
-   **📦 BYOS3 / S3-compatibility** - "Bring-Your-Own-S3" like Garage, Cloudflare R2, Minio, Ceph, DigitalOcean Spaces, Google Cloud Storage, etc.
-   **🔁 Fast and small** - Using msgpackr support (fast and compact with much smaller (15~50%) encodings than JSON)
-   **💻 Typed** - Written in TypeScript

Sponsors
--------

### Version 2 - Breaking Changes

Since version 2.0.0, `lowstorage` has undergone significant changes:

-   **Support for S3 Storages / constructor changes**: The constructor now accepts any S3-compatible configuration instead of being tied to Cloudflare R2. Like AWS S3, Cloudflare R2, Minio, Ceph, DigitalOcean Spaces, Google Cloud Storage, etc. (see S3-compatible storages) instead of using AWS-SDK it utilize S3 via the zero-dependency `ultralight-s3` package.
-   **Msgpackr encodings**: Data is now encoded using msgpackr instead of JSON or Avro schemas. This allows for much faster and smaller encodings (15~50% smaller than JSON)

If you are migrating from version 1.x.x, please review the new constructor parameters and usage examples below.

#### Cloudflare R2 vs. S3 API Compatibility

R2 uses the S3 API to allow users and their applications to migrate with ease. When comparing to AWS S3, Cloudflare has removed some API operations’ features and added others. The S3 API operations are listed below with their current implementation status. Feature implementation is currently in progress. Refer back to this page for updates. The API is available via the `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` endpoint. Find your account ID in the Cloudflare dashboard.

### Installation

npm install lowstorage

yarn add lowstorage

pnpm add lowstorage

### Usage & Examples

import { lowstorage, lowstorage\_ERROR\_CODES } from 'lowstorage';
// Initialize object and get users collection
const storage \= new lowstorage({
	accessKeyId: 'YOUR\_ACCESS\_KEY',
	secretAccessKey: 'YOUR\_SECRET\_KEY',
	endpoint: 'YOUR\_ENDPOINT',
	bucketName: 'YOUR\_BUCKET\_NAME',
	region: 'YOUR\_REGION', // fallback to auto
	// optional params from here
	logger?: console, // logger object for your tough times
	dirPrefix?: 'lowstorage', // folder name prefix for collections
	maxRequestSizeInBytes?: 50 \* 1024 \* 1024, // request size in bytes for S3 operations (default: 5MB)
});

 // get collection (if dont exists, returns empty array \[\])
const userCol \= await storage.collection('users');

// Or you can create a collection with data
const newUserCol \= await storage.createCollection('newUsers', yourUserData);

// Add new user
const newUser \= await userCol.insert({
	name: 'Kevin',
	age: 32,
	gender: 'whatever',
	posts: \[\],
});

// Show all users
const allUsers \= await userCol.find({});

// Find users with pagination (e.g., page 2, 10 users per page)
const secondPageUsers \= await userCol.find({}, { skip: 10, limit: 10 });

// Find user by ID and update name
const kevin \= await userCol.findOne({ name: 'Kevin' });
await userCol.update({ \_id: kevin.\_id }, { name: 'Carlos' });

// Delete user
await userCol.delete({ name: 'Carlos' });

// Delete all users
await userCol.deleteAll();

// Count users
const count \= await userCol.count();

// Rename collection
await userCol.renameCollection('usersOld');

// Remove collection
await userCol.removeCollection();

// List all collections
const listCollections \= await storage.listCollections();

// Get S3 instance and perform S3 operations (get, put, delete, etc.) Read more about ultralight-s3 here: https://github.com/sentienhq/ultralight-s3
const s3ops \= await storage.s3();

// check the API section for more details in /dev folder for more samples

Table of Contents
-----------------

-   Features
    
-   Cloudflare R2 vs. S3 API Compatibility
    
-   Usage & Examples
    
-   Installation
    
-   Setup & config
    
-   API
    
    -   lowstorage class
        
        -   constructor(options: S3Options)
        -   checkIfStorageExists(): Promise
        -   createStorage(): Promise
        -   collection(colName: string, autoCreate?: boolean)
        -   listCollections(): Promise<string\[\]>
        -   createCollection(colName: string, data?: any\[\]): Promise
        -   removeCollection(colName: string): Promise
        -   collectionExists(colName: string): Promise
        -   s3(): S3
    -   Collection class
        
        -   constructor(colName: string, s3: S3, dirPrefix?: string, safeWrite?: boolean, chunkSize?: number)
        -   getProps(): CollectionProps
        -   setProps(props: CollectionProps): void
        -   setSafeWrite(safeWrite: boolean): void
        -   getSafeWrite(): boolean
        -   getCollectionETag(): string
        -   insert(doc: Object | Array<Object>): Promise<Object\[\]>
        -   find(query: Object, options: Object): Promise<Object\[\]>
        -   findOne(query: Object): Promise<Object | null>
        -   update(query: Object, update: Object, options: Object): Promise<number>
        -   updateOne(query: Record<string, any>, update: Record<string, any>, options: Record<string, any>): Promise<number>
        -   delete(query: Object): Promise<number>
        -   deleteAll(): Promise<number>
        -   count(query: Object): Promise<number>
        -   renameCollection(newColName: string): Promise<Collection>
    -   Error classes
        
        -   lowstorageError
        -   CollectionNotFoundError
        -   DocumentValidationError
        -   S3OperationError
    -   Error codes
        
-   Important Notice
    
-   Contributing
    
-   License
    

### Setup & config

To set up and bind your storage, configure your storage client with the appropriate credentials and bucket information. Here is an example setup for AWS S3:

import { lowstorage, lowstorage\_ERROR\_CODES } from 'lowstorage';

const storage \= new lowstorage({
	endPoint: 's3.amazonaws.com',
	region: 'YOUR-REGION',
	accessKey: 'YOUR-ACCESSKEYID',
	secretKey: 'YOUR-SECRETACCESSKEY',
	bucketName: 'your-bucket-name',
});

For Cloudflare R2, follow similar steps with your R2-specific endpoint and credentials.

API
---

### lowstorage class

#### constructor(options: S3Options)

-   **Behavior**: Creates a new lowstorage instance.
    
-   **Input**: An object containing the following properties:
    
    -   `accessKeyId`: The access key ID for your S3 account.
    -   `secretAccessKey`: The secret access key for your S3 account.
    -   `endpoint`: The endpoint URL for your S3 account.
    -   `bucketName`: The name of the bucket to use.
    -   `region?`: The region for your S3 bucket. Default is `auto`.
    -   `logger?`: An optional logger object for your tough times.
    -   `dirPrefix?`: An optional directory prefix for your collections. Default is `lowstorage`.
    -   `maxRequestSizeInBytes?`: An optional maximum request size in bytes for S3 operations. Default is 5MB.
-   **Returns**: A new lowstorage instance.
    
-   **Throws**: A lowstorageError if there's an error.
    

#### checkIfStorageExists(): Promise<boolean>

-   **Behavior**: Checks if a storage bucket exists.
-   **Returns**: A Promise that resolves to a boolean indicating whether the storage bucket exists.
-   **Throws**: A lowstorageError if there's an error.

#### createStorage(): Promise<boolean>

-   **Behavior**: Creates a new storage bucket if it doesn't exist.
-   **Returns**: A Promise that resolves to a boolean indicating whether the storage bucket was created or already exists.
-   **Throws**: A lowstorageError if there's an error.

#### collection(colName: string, autoCreate?: boolean)

-   **Behavior**: Creates or accesses a collection with the given name.
-   **Input**: A string representing the name of the collection.
    -   `colName`: The name of the collection.
    -   `autoCreate?`: An optional boolean indicating whether to automatically create the collection if it doesn't exist. Default is `true`.
-   **Returns**: An instance of the Collection class corresponding to the specified collection name.
-   **Throws**: A lowstorageError if there's an error.

#### listCollections(): Promise<string\[\]>

-   **Behavior**: Lists all collections stored in the lowstorage instance.
-   **Returns**: A promise that resolves to an array of collection names.
-   **Throws**: A lowstorageError if there's an error.

#### createCollection(colName: string,data?: any\[\]): Promise<Collection>

-   **Behavior**: Creates a new collection with the given name.
-   **Input**: A string representing the name of the collection.
    -   `colName`: The name of the collection.
    -   `data?`: An optional array of data to initialize the collection with - if not provided, an empty array will be used and empty file will be created.
-   **Returns**: A promise that resolves to a Collection object.
-   **Throws**: A lowstorageError if there's an error.

#### removeCollection(colName: string): Promise<boolean>

-   **Behavior**: Removes a collection with the given name.
-   **Input**: A string representing the name of the collection.
    -   `colName`: The name of the collection.
-   **Returns**: A promise that resolves to a boolean indicating whether the collection was removed.
-   **Throws**: A lowstorageError if there's an error.

#### collectionExists(colName: string): Promise<boolean>

-   **Behavior**: Checks if a collection with the given name exists.
-   **Input**: A string representing the name of the collection.
    -   `colName`: The name of the collection.
-   **Returns**: A promise that resolves to a boolean indicating whether the collection exists.
-   **Throws**: A lowstorageError if there's an error.

#### s3(): S3

-   **Behavior**: Returns the S3 instance associated with the lowstorage instance. For more check the ultralight-s3 package.
-   **Returns**: The S3 instance.

Collection class
----------------

#### constructor(colName: string, s3: S3, dirPrefix?: string, safeWrite?: boolean, chunkSize?: number)

-   **Behavior**: Creates a new Collection instance.
-   **Input**: A string representing the name of the collection, an S3 instance, an optional directory prefix, an optional boolean indicating whether to perform safe writes, and an optional chunk size.
    -   `colName`: The name of the collection.
    -   `s3`: The S3 instance.
    -   `dirPrefix?`: An optional directory prefix for the collection. Default is `lowstorage`.
    -   `safeWrite?`: An optional boolean indicating whether to perform safe writes. Default is `false`. Safe writes doublechecks the ETag of the object before writing. False = overwrites the object, True = only writes if the object has not been modified. (One request extra for safe writes = slower)
    -   `chunkSize?`: An optional chunk size for reading and writing data. Default is 5MB.
-   **Returns**: A new Collection instance.
-   **Throws**: A lowstorageError if there's an error.

#### getProps(): CollectionProps

-   **Behavior**: Returns the properties of the collection.
-   **Returns**: An object containing the following properties:
    -   `colName`: The name of the collection.
    -   `s3`: The S3 instance.
    -   `dirPrefix`: The directory prefix for the collection.
    -   `safeWrite`: A boolean indicating whether to perform safe writes.
    -   `chunkSize`: The chunk size for reading and writing data.
-   **Throws**: A lowstorageError if there's an error.

#### setProps(props: CollectionProps): void

-   **Behavior**: Sets the properties of the collection.
-   **Input**: An object containing the following properties:
    -   `props`: An object containing the following properties:
        -   `colName`: The name of the collection.
        -   `s3`: The S3 instance.
        -   `dirPrefix`: The directory prefix for the collection.
        -   `safeWrite`: A boolean indicating whether to perform safe writes.
        -   `chunkSize`: The chunk size for reading and writing data.
-   **Returns**: A void.
-   **Throws**: A lowstorageError if there's an error.

#### setSafeWrite(safeWrite: boolean): void

-   **Behavior**: Sets the safe write property of the collection.
-   **Input**: A boolean indicating whether to perform safe writes.
    -   `safeWrite`: A boolean indicating whether to perform safe writes.
-   **Returns**: A void.
-   **Throws**: A lowstorageError if there's an error.

#### getSafeWrite(): boolean

-   **Behavior**: Returns the safe write property of the collection.
-   **Returns**: A boolean indicating whether to perform safe writes.
-   **Throws**: A lowstorageError if there's an error.

#### getCollectionETag(): string

-   **Behavior**: Returns the ETag of the collection.
-   **Returns**: A string representing the ETag of the collection.
-   **Throws**: A lowstorageError if there's an error.

#### insert(doc: Object | Array<Object>): Promise<Object\[\]>

-   **Behavior**: Inserts the given document(s) into the collection.
-   **Input**: An object or an array of objects to insert into the collection.
    -   `doc`: An object or an array of objects to insert into the collection.
-   **Returns**: A promise that resolves to an array of inserted documents.
-   **Throws**: A lowstorageError if there's an error.

#### find(query: Object, options: Object): Promise<Object\[\]>

-   **Behavior**: Finds documents in the collection that match the given query.
-   **Input**: An object representing the query to filter documents.
    -   `query`: An object representing the query to filter documents.
    -   `options`: An object representing the options for pagination.
-   **Returns**: A promise that resolves to an array of matching documents.
-   **Throws**: A lowstorageError if there's an error.

#### findOne(query: Object): Promise<Object | null>

-   **Behavior**: Finds the first document in the collection that matches the given query.
-   **Input**: An object representing the query to filter documents.
    -   `query`: An object representing the query to filter documents.
-   **Returns**: A promise that resolves to the first matching document or null if no match is found.
-   **Throws**: A lowstorageError if there's an error.

#### update(query: Object, update: Object, options: Object): Promise<number>

-   **Behavior**: Updates documents in the collection that match the given query.
-   **Input**: An object representing the query to filter documents and an object representing the update operations.
    -   `query`: An object representing the query to filter documents.
    -   `update`: An object representing the update operations.
    -   `options`: An object representing the options for pagination.
-   **Returns**: A promise that resolves to the number of documents updated.
-   **Throws**: A lowstorageError if there's an error.

#### updateOne(query: Record<string, any>, update: Record<string, any>, options: Record<string, any>): Promise<number>

-   **Behavior**: Updates the first document in the collection that matches the given query.
-   **Input**: An object representing the query to filter the document to update and an object representing the update operations.
    -   `query`: An object representing the query to filter the document to update.
    -   `update`: An object representing the update operations.
    -   `options`: An object representing the options for pagination.
-   **Returns**: A promise that resolves to the number of documents updated.
-   **Throws**: A lowstorageError if there's an error.

#### delete(query: Object): Promise<number>

-   **Behavior**: Deletes documents in the collection that match the given query.
-   **Input**: An object representing the query to filter documents.
    -   `query`: An object representing the query to filter documents.
-   **Returns**: A promise that resolves to the number of documents deleted.
-   **Throws**: A lowstorageError if there's an error.

#### deleteAll(): Promise<number>

-   **Behavior**: Deletes all documents in the collection.
-   **Returns**: A promise that resolves to the number of documents deleted.
-   **Throws**: A lowstorageError if there's an error.

#### count(query: Object): Promise<number>

-   **Behavior**: Counts the number of documents in the collection that match the given query.
-   **Input**: An object representing the query to filter documents.
    -   `query`: An object representing the query to filter documents.
-   **Returns**: A promise that resolves to the number of documents in the collection.
-   **Throws**: A lowstorageError if there's an error.

#### renameCollection(newColName: string): Promise<Collection>

-   **Behavior**: Renames the collection with the given name.
-   **Input**: A string representing the new name of the collection.
    -   `newColName`: The new name of the collection.
-   **Returns**: A promise that resolves to a Collection object.
-   **Throws**: A lowstorageError if there's an error.

Error classes
-------------

#### lowstorageError

-   **Behavior**: Represents a lowstorage error.
-   **Input**: An optional string representing the error message and an optional error code.
    -   `message?`: An optional string representing the error message.
    -   `code?`: An optional error code.
-   **Returns**: A new lowstorageError instance.
-   **Throws**: A lowstorageError if there's an error.

#### CollectionNotFoundError

-   **Behavior**: Represents a CollectionNotFound error.
-   **Input**: An optional string representing the error message and an optional error code.
    -   `message?`: An optional string representing the error message.
    -   `code?`: An optional error code.
-   **Returns**: A new CollectionNotFoundError instance.
-   **Throws**: A lowstorageError if there's an error.

#### DocumentValidationError

-   **Behavior**: Represents a DocumentValidation error.
-   **Input**: An optional string representing the error message and an optional error code.
    -   `message?`: An optional string representing the error message.
    -   `code?`: An optional error code.
-   **Returns**: A new DocumentValidationError instance.
-   **Throws**: A lowstorageError if there's an error.

#### S3OperationError

-   **Behavior**: Represents an S3Operation error.
-   **Input**: An optional string representing the error message and an optional error code.
    -   `message?`: An optional string representing the error message.
    -   `code?`: An optional error code.
-   **Returns**: A new S3OperationError instance.
-   **Throws**: A lowstorageError if there's an error.

Error codes
-----------

#### lowstorage\_ERROR\_CODES

-   **Behavior**: Represents a lowstorage error code constants. Check the error classes and `src/errors.ts` for more details.
-   **Returns**: An object containing the following properties:
    -   `MISSING_ARGUMENT`: A string representing the missing argument error code.
    -   `COLLECTION_EXISTS`: A string representing the collection exists error code.
    -   `CREATE_COLLECTION_ERROR`: A string representing the create collection error code.
    -   `RENAME_COLLECTION_ERROR`: A string representing the rename collection error code.
    -   `REMOVE_COLLECTION_ERROR`: A string representing the remove collection error code.
    -   `COLLECTION_NOT_FOUND`: A string representing the collection not found error code.
    -   `DOCUMENT_VALIDATION_ERROR`: A string representing the document validation error code.
    -   `S3_OPERATION_ERROR`: A string representing the S3 operation error code.
    -   `FIND_ERROR`: A string representing the find error code.
    -   `FIND_ONE_ERROR`: A string representing the find one error code.
    -   `SAVE_DATA_ERROR`: A string representing the save data error code.
    -   `INSERT_ERROR`: A string representing the insert error code.
    -   `UPDATE_ERROR`: A string representing the update error code.
    -   `UPDATE_ONE_ERROR`: A string representing the update one error code.
    -   `DELETE_ERROR`: A string representing the delete error code.
    -   `COUNT_ERROR`: A string representing the count error code.
    -   `UNKNOWN_ERROR`: A string representing the unknown error code.

Important Notice
----------------

`lowstorage` is primarily designed for small, hobby, or personal projects. We advise extreme caution when using `lowstorage` for critical applications or production environments, as it may not offer the robustness or features required for such use cases.

Contributing
------------

Feel free to dive in! Open an issue or submit PRs.

Standard Readme follows the Contributor Covenant Code of Conduct.

License
-------

MIT