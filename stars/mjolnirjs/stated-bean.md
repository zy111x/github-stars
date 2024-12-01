---
project: stated-bean
stars: 34
description: A light but scalable view-model library with react hooks
---

stated-bean
===========

> A light but scalable `view-model` library with react hooks.

TOC
---

-   Features
-   Online Demo
-   Usage
    -   Define a StatedBean
        -   Plain object StatedBean
        -   Class StatedBean
    -   Singleton and Named StatedBean
        -   Define a named bean
        -   Declare as a named bean when `useBean`
    -   Provider container and inject the singleton bean
    -   Auto inject and watch the props
    -   Effect action state and observer
-   API
    -   Decorators
        -   `StatedBean`
        -   `Stated`
        -   `AfterProvided`
        -   `Effect`
        -   `Props` and `ObservableProps`
    -   use Hooks
        -   `useBean`
        -   `useInject`
            -   `UseStatedBeanOption`
        -   `useObserveEffect`
    -   Provider
        -   `<StatedBeanProvider {...props: StatedBeanProviderProps} />`
-   License

# yarn
yarn add stated-bean

# npm
npm i stated-bean

Features
--------

-   OOP: easy to integrate with DI(dependency inject) framework together
-   Familiar API: just provider and hooks
-   Small size:
-   Written in TypeScript

Online Demo
-----------

GitHub Pages: Integration with injection-js

Usage
-----

### Define a StatedBean

#### Plain object StatedBean

import { useBean } from 'stated-bean';

const CounterModel \= {
  count: 0,
  decrement() {
    this.count\--;
  },
  increment() {
    this.count++;
  },
};

function CounterDisplay() {
  const counter \= useBean(() \=> CounterModel);

  return (
    <div\>
      <button onClick\={counter.decrement}\>\-</button\>
      <span\>{counter.count}</span\>
      <button onClick\={counter.increment}\>+</button\>
    </div\>
  );
}

function App() {
  return (
    <StatedBeanProvider\>
      <CounterDisplay /\>
    </StatedBeanProvider\>
  );
}

#### Class StatedBean

import { StatedBean, Stated useBean } from 'stated-bean';

@StatedBean()
class CounterModel {
  @Stated()
  count \= 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count\--;
  }
}

function CounterDisplay() {
  const counter \= useBean(CounterModel);

  return (
    // ...
  );
}

### Singleton and Named StatedBean

The named bean singleton bean can be resolved via `useInject` with the special name.

#### Define a named bean

@StatedBean('SpecialName')
class NamedBean {}

@StatedBean({ singleton: true })
class SingletonBean {}

#### Declare as a named bean by `useBean`

const model \= useBean(CounterModel, { name: 'SpecialName' });

### Provider container and inject the singleton bean

The beans was stored in the `StatedBeanContainer` witch be created by the `StatedBeanProvider` and bind to the React context. `useInject` will find the named bean from the container or it's parent container.

@StatedBean({ singleton: true })
class UserModel {
  @Stated()
  user \= { name: 'jack' };
}

function App() {
  return (
    <StatedBeanProvider providers\={\[UserModel\]}\>
      <UserDisplay /\>
    </StatedBeanProvider\>
  );
}

function UserDisplay() {
  const model \= useInject(UserModel);

  return model.user.name;
}

### Auto inject and watch the props

@StatedBean()
class InputModel implements InitializingBean {
  @Props('initialValue')
  @Stated()
  value: number;

  @ObservableProps()
  value$: BehaviorSubject<number\>;

  afterProvided() {
    this.value$.subscribe(v \=> {
      this.value \= v;
    });
  }
}

function Input(props: InputProps) {
  const model \= useBean(InputModel, { props });

  return (
    // input component
  );
}

### Effect action state and observer

@StatedBean()
class SearchModel {

  @Effect()
  search() {
    return fetchUsers();
  }
}

const UserTable() {
  const model \= useBean(SearchModel);
  const { loading, error } \= useObserveEffect(model, "search");

  if (loading) {
    return <Loading /\>;
  }
  return (
    // ...user table
  );
}

API
---

### Decorators

#### `StatedBean`

_Signature_: `@StatedBean(name?: string | symbol): ClassDecorator`

Indicates that an annotated class is a `StatedBean`. The `name` may indicate a suggestion for the bean name. Its default value is `Class.name`.

#### `Stated`

_Signature_: `@Stated(): PropertyDecorator`

Indicates that an annotated property is `Stated`. Its reassignment will be observed and notified to the container.

#### `AfterProvided`

_Signature_: `@AfterProvided(): MethodDecorator`

The `AfterProvided` decorator is used on a method that needs to be executed after the `StatedBean` be instanced to perform any initialization.

#### `Effect`

_Signature_: `@Effect(name?: string | symbol): MethodDecorator`

The `Effect` decorator is used on a method that can get the execution state by `useObserveEffect`.

#### `Props` and `ObservableProps`

_Signature_: `@Props(name?: string): PropertyDecorator` `@ObservableProps(name?: string): PropertyDecorator`

The `Props` decorator is used on a property that can sync the value from props. The `ObservableProps` decorator is used on a `BehaviorSubject` property. You can subscribe the next new props value.

### use Hooks

#### `useBean`

_Signature_: `useBean<T>(typeOrSupplier: ClassType<T> | () => T, name?: string | symbol): T`

The `useBean` will create an instance of the stated bean with a new `StatedBeanContainer` and listen for its data changes to trigger the re-rendering of the current component.

#### `useInject`

_Signature_: `useInject<T>(type: ClassType<T>, option: UseStatedBeanOption<T> = {}): T`

The `useInject` will get the instance of the stated bean from the `StatedBeanContainer` in the context and listen for its data changes to trigger the re-rendering of the current component.

##### `UseStatedBeanOption`

option \= {
  name: string | symbol;   // get/create the instance with special name
  dependentFields: Array<string | symbol\>;   // do re-render when the special property changed
};

#### `useObserveEffect`

_Signature_: `useObserveEffect(bean: StatedBeanType, name: string | symbol): EffectAction`

observe the execution state of the method which with `@Effect`.

### Provider

#### `<StatedBeanProvider {...props: StatedBeanProviderProps} />`

The `StatedBeanProvider` is responsible for creating an instance of the stated bean and dispatching an event after data changes.

**StatedBeanProviderProps**

interface StatedBeanProviderProps {
  types?: ClassType\[\];
  beans?: Array<StatedBeanType<unknown\>\>;
  beanProvider?: BeanProvider;
  application?: StatedBeanApplication;
}

License
-------

MIT
