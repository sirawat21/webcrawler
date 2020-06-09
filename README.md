# Web Crawler

### Installation & Runing

Install the entire dependencies : `npm install`

Execute the script : `npm start`

For a manual installation command :
```
npm install -D @babel/core @babel/cli @babel/node @babel/preset-env \
    @babel/plugin-proposal-class-properties npm-run-all nodemon; \
npm install nightmare colors
```

---

### Usage

```javascript
import {crawler} from "./libs"

const webbot = new crawler([{
    url: "localhost:80",
    name: "Localhost",
    limit: null,
    selectors: {
        url: "div nav a",
        article: {
            header: ".container h1",
            date: ".container .datatime span",
            author: ".container .author p",
            content: ".container .content",
        }
    }
}])

const main = (async () => {
    let result = await webbot.start()
})()

```

---

### Dependencies
- **Libraries**
    - [colors](https://www.npmjs.com/package/colors)
    - [nightmare](https://www.npmjs.com/package/nightmare)
- **Development tools**
    - [@babel/core](https://www.npmjs.com/package/@babel/core)
    - [@babel/cli](https://www.npmjs.com/package/@babel/cli)
    - [@babel/node](https://www.npmjs.com/package/@babel/node)
    - [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
    - [@babel/plugin-proposal-class-properties](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
    - [nodemon](https://www.npmjs.com/package/nodemon)
    - [npm-run-all](https://www.npmjs.com/package/npm-run-all)

---


