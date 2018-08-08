# `s9a`

[Numeronymize](https://en.wikipedia.org/wiki/Numeronym) [synesthesia](https://en.wikipedia.org/wiki/Synesthesia) :hibiscus:

```
npm install s9a
```

### `s9a(text)`

Replace matches within <var>text</var> with lowercase numeronym string `"s9a"`

```js
// Matches several translations
s9a("synesthesia") // "s9a"
s9a("synaesthesia") // "s9a"
s9a("sinestesia") // "s9a"
s9a("synesthésie") // "s9a"
s9a("synesth&eacute;sie") // "s9a"
```

```js
// Case doesn't matter
s9a("SYNESTHESIA") // "s9a"
```

```js
// Delimits via word boundary
s9a("notsynesthesia") // "notsynesthesia"
s9a("Synesthesia?") // "s9a?"
```

```js
// Universally available
import s9a from "s9a" // ES6 loaders
const s9a = require("s9a") // CommonJS
const s9a = self.s9a // Elsewhere
```
