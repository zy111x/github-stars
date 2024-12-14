---
project: stencil
stars: 12617
description: A toolchain for building scalable, enterprise-ready component systems on top of TypeScript and Web Component standards. Stencil components can be distributed natively to React, Angular, Vue, and traditional web developers from a single, framework-agnostic codebase.
url: https://github.com/ionic-team/stencil
---

Stencil
=======

A compiler for generating Web Components using technologies like TypeScript and JSX, built by the Ionic team.

Quick Start · Documentation · Contribute · Blog  
Community: Discord · Forums · Twitter
---------------------------------------------------------------------------------------

### Getting Started

Start a new project by following our quick Getting Started guide. We would love to hear from you! If you have any feedback or run into issues using Stencil, please file an issue on this repository.

### Examples

A Stencil component looks a lot like a class-based React component, with the addition of TypeScript decorators:

import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',            // the name of the component's custom HTML tag
  styleUrl: 'my-component.css',   // css styles to apply to the component
  shadow: true,                   // this component uses the ShadowDOM
})
export class MyComponent {
  // The component accepts two arguments:
  @Prop() first: string;
  @Prop() last: string;

   //The following HTML is rendered when our component is used
  render() {
    return (
      <div\>
        Hello, my name is {this.first} {this.last}
      </div\>
    );
  }
}

The component above can be used like any other HTML element:

<my-component first\="Stencil" last\="JS"\></my-component\>

Since Stencil generates web components, they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend framework, though using it as such is certainly not required.

### Contributing

Thanks for your interest in contributing! Please take a moment to read up on our guidelines for contributing. Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
