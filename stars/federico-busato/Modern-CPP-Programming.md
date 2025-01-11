---
project: Modern-CPP-Programming
stars: 12585
description: Modern C++ Programming Course (C++03/11/14/17/20/23/26)
url: https://github.com/federico-busato/Modern-CPP-Programming
---

Modern C++ Programming
======================

C++03 / C++11 / C++14 / C++17 / C++20 / C++23 / C++26
-----------------------------------------------------

This _open-access_ course is directed at those who are already familiar with C and object-oriented programming towards a proficiency level of C++ programming. The course covers the basics of C++ programming and moves on to advanced C++ semantics and concepts.

**Key features**:

-   _Free and frequently updated_
-   _26 lectures, 1800+ slides_
-   Include the _last language standard_ concepts and features
-   _Practical teaching_: non-verbose, short structured descriptions associated with code
-   _Minimal code examples_ for showing just a specific feature or issue without digressing
-   _Complementary language aspects_: tools, coding conventions, project organization, and code optimization
-   _Experience-based_: many aspects, examples, and problems come from real-world cases faced during my work as software engineer

_If you enjoy the course or you find it useful_, please add a **Star**

CHAPTERS
--------

#

TITLE

MAIN FOCUS

**1**

**Introduction** (html)

History of C/C++, Areas of applications, Course introduction

**2**

**Preparation** (html)

Books, How to compile, Hello world

**3**

**Basic Concepts I** (html)

Type System, Fundamental types, and Operators

**4**

**Basic Concepts II** (html)

Integral and Floating-point types and their arithmetic

**5**

**Basic Concepts III** (html)

Entities, Enumerators, Structures, Control flow statements

**6**

**Basic Concepts IV** (html)

Heap, Stack, Pointers, References, Const properties, Conversion operators

**7**

**Basic Concepts V** (html)

Functions, Lambda expressions, Preprocessing directives

**8**

**Object-Oriented Programming I** (html)

Class hierarchy, Constructor, Destructor, Class keywords

**9**

**Object Oriented Programming II** (html)

Polymorphism, Operators overloading

**10**

**Templates and Meta-programming I** (html)

Function template, Type traits, Compile-time utilities

**11**

**Templates and Meta-programming II** (html)

Class template, SFINAE

**12**

**Translation Units I** (html)

Linkage and One Definition Rule

**13**

**Translation Units II** (html)

Dealing with multiple translation units and files,`#include`, Modules

**14**

**Code Conventions I** (html)

Project organization, code conventions intro, entities conventions

**15**

**Code Conventions II** (html)

Template, namespace, modern c++, maintainability , naming, and formatting conventions

**16**

**Debugging and Testing** (html)

Execution/memory debugging, Sanitizers, Harding techniques, Unit test, Test-Driven Development

**17**

**Ecosystem** (html)

Cmake, Documenting, and Other Tools

**18**

**Utilities** (html)

Main `std` libraries

**19**

**Containers, Iterators, and Algorithms** (html)

Containers, Iterators, Algorithms, Ranges

**20**

**Advanced Topics I** (html)

Move semantics, Universal reference, Type deduction

**21**

**Advanced Topics II** (html)

Error handling, C++ idioms, Smart pointers

**22**

**Performance Optimizations I** (html)

Ahmdal Law, Performance bounds, Architecture concepts (ILP, SIMD, etc.), Memory hierarchy

**23**

**Performance Optimizations II** (html)

Arithmetic optimizations, Memory optimizations, etc.

**24**

**Performance Optimizations III** (html)

Compiler optimizations, Profiling, Benchmarking tools

**25**

**Software Design I** (html)

Basic Concepts, Principles, Use cases

**26**

**Software Design II** (html)

Design Patterns and Idioms

_**ALL-IN-ONE BOOK**_: **modern-cpp.pdf** (could be a few commits behind), html

TOPICS IN DETAILS
-----------------

**1\. Introduction**

-   **A Little History of C/C++ Programming Languages**
-   **Areas of Application and Popularity**
-   **C++ Philosophy**
-   **C++ Weakness**: C++ alternatives, Why switching to a new language is hard?
-   **The Course**

**2\. Preparation**

-   **Books and References**
-   **Slide Legend**
-   **What Editor/ IDE/Compiler Should I Use?**
-   **How to compile?**
-   **Hello World**: I/O Stream

**3\. Basic Concepts I - Type System, Fundamental Types, and Operators**

-   **The C++ Type System**: Type categories, Type properties
-   **C++ Fundamental Types Overview**: Arithmetic types, Suffix and prefix, Non-standard arithmetic types, `void` type, `nullptr`
-   **Conversion Rules**
-   **`auto` Keyword**
-   **C++ Operators**: Operators precedence, Prefix/Postfix increment/decrement semantic, Assignment, compound, and comma operators, Spaceship operator `<=>` , Safe comparison operators

**4\. Basic Concepts II - Integral and Floating-point Types**

-   **Integral Data Types**: Fixed width integers, `size_t`, `ptrdiff_t`, `uintptr_t`, Arithmetic Operation Semantics, Promotion, Truncation, Undefined behavior, Saturation Arithmentic
-   **Floating-point Types and Arithmetic**: IEEE Floating-point standard and other representations, Normal/Denormal values, Infinity, Not a Number (`NaN`), Machine Epsilon, Units at the Last Place (ULP), Cheatsheet, Limits and useful functions, Arithmetic properties, Special values behavior, Undefined behavior, Detect floating-point errors
-   **Floating-point Issues**: Catastrophic cancellation, Floating-point comparison

**5\. Basic Concepts III - Entities and Control Flow**

-   **Entities**
-   **Declaration and Definition**
-   **Enumerators**
-   **`struct`, Bitfield, `union`**
-   **Control Flow**: `if` statement, `for` and `while` loops, Range-base `for` loop, `switch`, `goto`, Avoid unused variable warning
-   **Namespace**: Explicit global namespace, namespace alias, `using`\-declaration, `using namespace`\-directive, `inline` namespace
-   **Attributes**: `[[nodiscard]]`, `[[maybe_unused]]`, `[[deprecated]]`, `[[noreturn]]`

**6\. Basic Concepts IV - Memory Concepts**

-   **Pointers**: Pointer operations, Address-of operator `&`, `struct` member access, `void` pointer, Pointer conversion, Pointer arithmetic, Wild and dangling pointers
-   **Heap and Stack**: Stack memory, `new`, `delete`, Non-allocating placement allocation, Non-throwing allocation, Memory leak
-   **Initialization**: Variable initialization, Uniform initialization, Array initialization, Structure initialization, Structure Binding, Dynamic memory initialization
-   **References**
-   **`Const` and Constant Expressions**: Contants and literals, `const`, `constexpr`, `consteval`, `constinit`, `if constexpr`, `std::is constant evaluated()`, `if consteval`
-   **`volatile` keyword**
-   **Explicit Type Conversion**: `static_cast`, `const_cast`, `reinterpret_cast`, Type punning, `std::bit_cast`, Uniform initialization conversion, `gls::narrow_cast`
-   **`sizeof` Operator**: overview, `[[no_unique_address]]`

**7\. Basic Concepts V - Functions and Preprocessing**

-   **Functions**: Pass-by-value, Pass-by-pointer, Pass-by-reference, Function signature and overloading, Overloading and `=delete`, Default parameters
-   **Function Pointer and Function Objects**
-   **Lambda Expressions**: Capture list, Lambda expression and function relation, Parameter notes, Composability, Recursion, `constexpr/consteval`, `template`, `mutable`, `[[nodiscard]]`, Capture list and classes
-   **Preprocessing**: Preprocessors, Common errors, Source location macros, Conditional compiling macros, Stringizing operator (`#`), `#error` and `#warning`, `#pragma`, Token-pasting operator `##`, Variadic macro

**8\. Object-Oriented Programming I - Class Concepts**

-   **C++ Classes**: RAII idiom
-   **Class Hierarchy**
-   **Access specifiers**: Inheritance access specifiers, When use `public/protected/private` for data members?
-   **Class Constructor**: Default constructor, Class initialization, Uniform initialization for objects, Delegate constructor, `explicit` keyword, `[[nodiscard]]` and classes
-   **Copy Constructor**
-   **Class Destructor**
-   **Defaulted Constructors, Destructor, and Operators** (`= default`)
-   **Class Keywords**: `this`, `static`, `const`, `mutable`, `using`, `friend`, `delete`

**9\. Object-Oriented Programming II - Polymorphism and Operator Overloading**

-   **Polymorphism**: C++ mechanisms for polymorphism, `virtual` methods, Virtual table, `override` keyword, `final` keyword, Common errors, Pure virtual method, Abstract class and interface
-   **Inheritance Casting and Run-time Type Identification**
-   **Operator Overloading**: Overview, Comparison operator `<`, Spaceship operator `<=>`, Subscript operator `[]`, Multidimensional subscript operator `[]`, Function call operator `()`, static operator `[]` and operator `()`, Conversion operator `T()`, Return type overloading resolution, Increment and decrement operators `++`/`--`, Assignment operator `=`, Stream operator `<<`, Operator notes
-   **C++ Object Layout**: Aggregate, Trivial class, Standard-layout class, Plain old data (POD), Hierarchy

**10\. Templates and Meta-programming I - Function Templates and Compile-Time Utilities**

-   **Function Template**: Overview, Template instantiation, Templat parameters, Template parameter - default value, Overloading, Specialization
-   **Template Variable**
-   **Template Parameter Types**: Generic Type Notes, `auto` Placeholder, Class template parameter type, Array and pointer types, Function type
-   **Compile-Time Utilities**: `static_assert`, `using` keyword, `decltype` keyword
-   **Type Traits**: Overview, Type traits library, Type manipulation

**11\. Templates and Meta-programming II - Class Templates and SFINAE**

-   **Class Template**: Class specialization, Class template constructor
-   **Constructor template automatic deduction (CTAD)**
-   **Class Template - Advanced Concepts**: Class + Function - specialization, Dependent names - `typename` and `template` keywords, Class template hierarchy and `using`, `friend` keyword, Template template arguments
-   **Template Meta-Programming**
-   **SFINAE: Substitution Failure Is Not An Error**: Function SFINAE, Class SFINAE
-   **Variadic Template**: Folding expression, Variadic class template
-   **C++20 Concepts**: Overview, `concept` keyword, `requires` clause, `requires` expression, `requires` expression + clause, `requires` clause + expression, `requires` and `constexpr`, Nested `requires`
-   **Template Debugging**

**12\. Translation Units I - Linkage and One Definition Rule**

-   **Basic Concepts**: Translation unit, Local and global scope, Linkage
-   **Storage Class and Duration**: Storage duration, Storage class, `static` keyword, Anonymous namespace, `extern` keywords
-   **Linkage of `const` and `constexpr`**: Static initialization order fiasco
-   **Linkage Summary**
-   **Dealing with Multiple Translation Units**: Class in multiple translation units
-   **One Definition Rule (ODR)**: Global variable issues, ODR - Point 3, `inline` functions/variables, `constexpr` and `inline`
-   **ODR - Function Template**: Cases, `extern` keyword
-   **ODR - Class Template**: Cases, `extern` keyword
-   **ODR Undefined Behavior and Summary**

**13\. Translation Units II - Include, Module, and Namespace**

-   **`#include` Issues**: Include guard, Forward declaration, Circular dependencies, Common linking errors
-   **C++20 Modules**: Overview, Terminology, Visibility and reachability, Module unit types, Keywords, Global module fragment, Private module fragment, Header module unit, Module partitions
-   **Compiling Multiple Translation Units**: Fundamental compiler flags, Compile Methods
-   **Libraries in C++**: Static library, Build static libraries, Using static libraries, Dynamic library, Build dynamic libraries, Using dynamic libraries, Application binary interface (ABI), Demangling, Find Dynamic library dependencies, Analyze object/executable symbols

**14\. Code Conventions I**

-   **C++ Project Organization**: Project directories, Project files, "Common" project organization notes, Alternative - “Canonical” project organization
-   **Coding Styles and Conventions**: Overview, Popular coding styles
-   **Header Files and `#include`**: `#include` guard, `#include` syntax, order of `#include`, Common header/source filename conventions
-   **Preprocessing**: Macro, Preprocessing statements
-   **Variables**: `static` global variables, conversions
-   **Enumerators**
-   **Arithmetic Types**: Signed vs. unsigned integral types, integral types conversion, Integral types: size and other issues, Floating-point types
-   **Functions**: Function parameters, Function arguments, function return values, Function specifiers, lambda expressions
-   **Structs and Classes**: `struct` vs `class`, Initialization, Braced initializer lists, Special member functions, `=default`, `=delete`, Other issues, Inheritance, Style

**15\. Code Conventions II**

-   **`auto`**
-   **Templates and Type Deduction**
-   **Control Flow**: Redundant control flow , `if/else`, Comparison, `switch`, `for/while`
-   **Namespace**: `using namespace` directive, Anoymous/unnamed namespace, Namespace and class design, Style
-   **Modern C++ Features**: Keywords, Features, Class, Library
-   **Maintainability**: Code comprehension, Functions, Template and Debuction, Library
-   Portability
-   **Naming**: Entities, Variables, Functions, Style conventions, Enforcing naming styles
-   **Readability and Formatting**: Horizontal spacing, Pointers/References, Vertical spacing, Braces, Type decorators, Reduce code verbosity, Other issues
-   **Code Documentation**: Function documentation, Comment syntax, File documentation

**16\. Debugging and Testing**

-   **Debugging Overview**
-   **Assertions**
-   **Execution debugging**: Breakpoints, Watchpoints / Catchpoints, Control flow, Stack and info, Print, Disassemble, `std::breakpoint`
-   **Memory Debugging**: `valgrind`
-   **Hardening Techniques**: Stack usage, Standard library checks, Undefined behavior protections, Control flow protections
-   **Sanitizers**: Address sanitizer, Leak sanitizer, Memory sanitizers, Undefined behavior sanitizer, Sampling-baed sanitizer
-   **Debugging Summary**
-   **Compiler Warnings**
-   **Static Analysis**
-   **Code Testing**: Unit testing, Test-Driven Development (TDD), Code coverage, Fuzz testing
-   **Code Quality**: `clang-tidy`

**17\. Ecosystem - Cmake and Other Tools**

-   **CMake**: `cmake` and `ctest`
-   **Code Documentation**: `doxygen`
-   **Code Statistics**: Count lines of code, Cyclomatic complexity analyzer
-   **Other Tools**: Code formatting - `clang-format`, `Compiler Explorer`, Code transformation - `CppInsights`, AI-powered code completion -Local code search - `ugrep`, `ripgrep`, `hypergrep`, Code search engine - `searchcode/grep.app`, Code benchmarking - `Quick-Bench`, Font for coding

**18\. Utilities**

-   **I/O Stream**: Manipulator, `ofstream/ifstream`
-   **Strings**: `std::string`, Conversion from/to numeric values, `std::string_view`, `std::format`, `std::print`
-   **View**: `std::span`
-   **Math Libraries**
-   **Random Number**: Basic concepts, C++ `<random>`, Seed, PRNG period and quality, Distribution, Recent algorithms and Performance, Quasi-random
-   **Time Measuring**: Wall-Clock time, User time, System time
-   **Std Class Templates**: `std::pair`, `std::tuple`, `std::variant`, `std::optional`, `std::any`, `std::stacktrace`
-   **Filesystem Library**: Query methods, Modify methods

**19\. Containers, Iterators, and Algorithms**

-   **Containers and Iterators**
-   **Sequence Containers**: `std::array`, `std::vector`, `std::deque`, `std::list`, `std::forward_list`
-   **Associative Containers**: `std::set`, `std::map`, `std::multiset`
-   **Container Adaptors**: `std::stack`, `std::queue`, `std::priority_queue`
-   **Implement a Custom Iterator**: Implement a simple Iterator
-   **Iterator Notes**:
-   **Iterator Utility Methods**: `std::advance`, `std::next`, `std::prev`, `std::distance`, Container access methods, Iterator traits
-   **Algorithms Library**: `std::find_if`, `std::sort`, `std::accumulate`, `std::generate`, `std::remove_if`
-   **C++20 Ranges**: Key concepts, Range view, Range adaptor, Range factory, Range algorithms, Range actions

**20\. Advanced Topics I**

-   **Move Semantic**: `lvalues` and `rvalues` references, Move semantic, `std::move`, Class declaration semantic
-   **Universal Reference and Perfect Forwarding**: Universal reference, Reference collapsing rules, Perfect forwarding
-   **Value Categories**
-   **`&`, `&&` Ref-qualifiers and `volatile` Overloading**
-   **Copy Elision and RVO**
-   **Type Deduction**: Pass by-reference, Pass-by-pointer, Pass-by-value, `auto` deduction, `auto(x)`: Decay-copy
-   **`const` Correctness**

**21\. Advanced Topics II**

-   **Undefined Behavior:** Illegal behavior, Platform specific behavior, unspecified behavior, Detecting undefined behavior
-   **Error Handling**: Recoverable error handing, Return code, C++ Exceptions, Defining custom exceptions, `noexcept` keyword, Memory allocation issues, Return code and exception summary, `std::expected`, Alternative error handling approaches
-   **Smart pointers**: `std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`
-   **Concurrency**: Thread methods, Mutex, Atomic, Task-based parallelism

**22\. Optimization I - Basic Concepts**

-   **Introduction**: Moore's Law, Moore's Law limitations, Reasons for optimizing
-   **Basic Concepts**: Asymptotic complexity, Time-Memory trade-off, Developing cycle, Ahmdal's law, Throughput, Bandwidth, Latency, Performance bounds, Arithmetic intensity
-   **Basic Architecture Concepts**: Instruction throughput (IPC), In-Order, and Out-of-Order Execution, Instruction pipelining, Instruction-level parallelism (ILP), Little’s law, Data-level parallelism (DLP) and vector instructions (SIMD), Thread-level parallelism (TLP), Single Instruction Multiple Threads (SIMT), RISC, CISC instruction sets
-   **Memory Hierarchy**: Memory hierarchy concepts, Memory locality, Core-to-core latency and thread affinity, Memory ordering model

**23\. Optimization II - Code Optimization**

-   **I/O Operations**: `printf`, Memory mapped I/O, Speed up raw data loading
-   **Memory Optimizations**: Heap memory, Stack memory, Cache utilization, Data alignment, Memory Prefetch
-   **Arithmetic Types**: Data types, Arithmetic operations, Conversion, Floating-point, Compiler intrinsic functions, Value in a range, Lookup table
-   **Control Flow**: Branhes, Branch Hints - `[[likely]]` / `[[unlikely]]`, Signed/Unsigned integers, Loops, Loop hoisting, Loop unrolling, Assertions, Compiler hints `[[assume]]/std::unreacheable()`, Recursion
-   **Functions**: Function call cost, Argument passing, Function inlining, Function attributes, Pointers aliasing
-   **Object-Oriented Programming**
-   **Std Library and Other Language Aspects**

**24\. Optimization III - Non-Coding Optimizations and Benchmarking**

-   **Compiler Optimizations**: About the compiler, Compiler optimization flags, Floating-point optimization flags, Linker optimization flags, Architecture flags, Help the compiler to produce better code, Profile guided optimization (PGO), Post-processing binary optimizer, Polyhedral optimizations
-   **Compiler Transformation Techniques**: Basic transformations, Loop unswitching, Loop fusion, Loop fission, Loop interchange, Loop tiling
-   **Libraries and Data Structures**
-   **Performance Benchmarking**: What to test?, Workload/Dataset quality, Cache behavior, Stable CPU performance, Multi-threads considerations, Program memory layout, Measurement overhead, Compiler optimizations, Metric evaluation
-   **Profiling**: `gprof`, `uftrace`, `callgrind`, `cachegrind`, `perf` Linux profiler
-   **Parallel Computing**: Concurrency vs. parallelism, Performance scaling, Gustafson's Law, Parallel programming languages

**25\. Software Design I - Basic Concepts (DRAFT)**

-   **Books and References**
-   **Basic Concepts**: Abstraction, interface, and module, Class Invariant
-   **Software Design Principles**: Separation of concern, Low coupling, high cohesion, Encapsulation and information hiding, Design by contract, Problem decomposition, Code reuse
-   **Software Complexity**: Software entropy, Technical debt
-   **The SOLID Design Principles**
-   **Class Design**: The class interface principle, Member functions vs. free functions, namespace functions vs. class static methods
-   **BLAS GEMM Case Study**
-   **Owning Objects and Views**
-   **Value vs. Reference Semantic**
-   **Global Variables**

**26\. Software Design II - Design Patterns and Idioms (DRAFT)**

-   **C++ Idioms**: Rule of Zero, Rule of Three, Rule of Five
-   **Design Pattern**: Singleton, Pointer to implementation (PIMPL), Curiously Recurring Template Pattern (CRTP), Template virtual functions

### Roadmap

1.  Improve Software Design Chapters
2.  Build Aspects Chapter (e.g. reducing build time)

### Reporting bugs 🐛 and contributing

If you find any typo, conceptual error, or section to improve, please report them by using the `issue` panel.

Author
------

`Federico Busato`, https://federico-busato.github.io/

-   LinkedIn: www.linkedin.com/in/federico-busato/
-   Twitter: twitter.com/fedebusato
