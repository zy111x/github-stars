---
project: valibot
stars: 6370
description: The modular and type safe schema library for validating structural data 🤖
url: https://github.com/fabian-hiller/valibot
---

Valibot
=======

Hello, I am Valibot and I would like to help you validate data easily using a schema. No matter if it is incoming data on a server, a form or even configuration files. I have no dependencies and can run in any JavaScript environment.

> I highly recommend you read the announcement post, and if you are a nerd like me, the bachelor's thesis I am based on.

Highlights
----------

-   Fully type safe with static type inference
-   Small bundle size starting at less than 600 bytes
-   Validate everything from strings to complex objects
-   Open source and fully tested with 100 % coverage
-   Many transformation and validation actions included
-   Well structured source code without dependencies
-   Minimal, readable and well thought out API

Example
-------

First you create a schema that describes a structured data set. A schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to guarantee type safety of unknown data.

import \* as v from 'valibot'; // 1.24 kB

// Create login schema with email and password
const LoginSchema \= v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

// Infer output TypeScript type of login schema
type LoginData \= v.InferOutput<typeof LoginSchema\>; // { email: string; password: string }

// Throws error for \`email\` and \`password\`
v.parse(LoginSchema, { email: '', password: '' });

// Returns data as { email: string; password: string }
v.parse(LoginSchema, { email: 'jane@example.com', password: '12345678' });

Apart from `parse` I also offer a non-exception-based API with `safeParse` and a type guard function with `is`. You can read more about it here.

Comparison
----------

Instead of relying on a few large functions with many methods, my API design and source code is based on many small and independent functions, each with just a single task. This modular design has several advantages.

For example, this allows a bundler to use the import statements to remove code that is not needed. This way, only the code that is actually used gets into your production build. This can reduce the bundle size by up to 95 % compared to Zod.

In addition, it allows you to easily extend my functionality with external code and makes my source code more robust and secure because the functionality of the individual functions can be tested much more easily through unit tests.

Credits
-------

My friend Fabian created me as part of his bachelor thesis at Stuttgart Media University, supervised by Walter Kriha, Miško Hevery and Ryan Carniato. My role models also include Colin McDonnell, who had a big influence on my API design with Zod.

Feedback
--------

Find a bug or have an idea how to improve my code? Please fill out an issue. Together we can make the library even better!

License
-------

I am completely free and licensed under the MIT license. But if you like, you can feed me with a star on GitHub.
