# jstoolmax

jstoolmax is a JavaScript utility library that provides commonly used functions and methods to facilitate JavaScript application development. It is currently in the learning and sharing stage.

The current version offers the following features:

-   Array Methods: range

-   String Methods: truncate

-   Function Methods: debounce

## Installation

Installation

```bash
npm install jstoolmax
```

or

```bash
yarn add jstoolmax
```

## Usage

Before using it, you need to import jstoolmax:

```js
import { range, truncate, debounce } from 'jstoolmax'
```

Then you can use these methods. Here are some usage examples:

**range**

```js
range(0, 5) // [0, 1, 2, 3, 4]
range(1, 5) // [1, 2, 3, 4]
range(0, 5, 2) // [0, 2, 4]
```

**truncate**

```js
truncate('Hello, world!', 5) // 'He...'
truncate('Hello, world!', 8) // 'Hello...'
truncate('Hello, world!', 20) // 'Hello, world!'
```

**debounce**

```js
const fn = debounce(
    () => console.log('Hello, world!'),
    1000
)
fn() //  Won't execute immediately
fn() //  Won't execute immediately
fn() //  Won't execute immediately
// After 1000 milliseconds, 'Hello, world!' will only be logged once
```

## Contributing

If you encounter any issues while using jstoolmax, or have any suggestions and ideas, please feel free to raise an issue or submit a PR on GitHub.

## License

jstoolmax follows the MIT license. For more details, please refer to the LICENSE file.
