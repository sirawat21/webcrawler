# Web Crawler
The crawler script in this project has used a library named Nightmare for helping to crawl and scrap webpages. The Javascript codes in this project were written by ES6 syntax.

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
**The definition of configuration :**

| Property | Description |
| ------ | ----------- |
|url|The first page that bot starts scraping URL and making a scraping lists.|
|name|Name bots, for indicates the status of bots in the console.|
|limit|The limit number of URL lists which bot going to crawl. `null = no limit`|
|selectors|Contain the CSS selectors for extract text from HTML.|

**! Note** In `selectors` contain 2 properties `url` and `article`, which used to extract the link from the first page then scraping contents from the crawled page.

**Example script :**

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
**Result Formate :**
```javascript
[{
    url: "localhost:80/",
    body: {
        author: "No name",
        content: "There is no detail in this article.",
        date: "4:30pm Jun 9, 2020",
        header: "Static header"
    }
}]
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


