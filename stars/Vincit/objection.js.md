---
project: objection.js
stars: 7287
description: An SQL-friendly ORM for Node.js
url: https://github.com/Vincit/objection.js
---

Objection.js
============

Objection.js is an ORM for Node.js that aims to stay out of your way and make it as easy as possible to use the full power of SQL and the underlying database engine while still making the common stuff easy and enjoyable.

Even though ORM is the best commonly known acronym to describe objection, a more accurate description is to call it **a relational query builder**. You get all the benefits of an SQL query builder but also a powerful set of tools for working with relations.

Objection.js is built on an SQL query builder called knex. All databases supported by knex are supported by objection.js. **SQLite3**, **Postgres** and **MySQL** are thoroughly tested.

What objection.js gives you:

-   **An easy declarative way of defining models and relationships between them**
-   **Simple and fun way to fetch, insert, update and delete objects using the full power of SQL**
-   **Powerful mechanisms for eager loading, inserting and upserting object graphs**
-   **Easy to use transactions**
-   **Official TypeScript support**
-   **Optional JSON schema validation**
-   **A way to store complex documents as single rows**

What objection.js **doesn't** give you:

-   **A fully object oriented view of your database** With objection you don't work with entities. You work with queries. Objection doesn't try to wrap every concept with an object oriented equivalent. The best attempt to do that (IMO) is Hibernate, which is excellent, but it has 800k lines of code and a lot more concepts to learn than SQL itself. The point is, writing a good traditional ORM is borderline impossible. Objection attempts to provide a completely different way of working with SQL.
-   **A custom query DSL. SQL is used as a query language.** This doesn't mean you have to write SQL strings though. A query builder based on knex is used to build the SQL. However, if the query builder fails you for some reason, raw SQL strings can be easily written using the raw helper function.
-   **Automatic database schema creation and migration from model definitions.** For simple things it is useful that the database schema is automatically generated from the model definitions, but usually just gets in your way when doing anything non-trivial. Objection.js leaves the schema related things to you. knex has a great migration tool that we recommend for this job. Check out the example project.

The best way to get started is to clone our example project and start playing with it. There's also a typescript version available.

Check out this issue to see who is using objection and what they think about it.

Shortcuts:

-   Who uses objection.js
-   API reference
-   Example projects
-   Changelog
-   v1 -> v2 -> v3 migration guide
-   Contribution guide
-   Plugins
