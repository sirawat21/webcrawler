/* Example using the script */

import { crawler } from "./helpers"

/* Create & configuration webbots */
const webbot_9news = new crawler([{
    url: "https://www.9news.com.au/just-in",
    name: "9News",
    limit: 2,
    selectors: {
        url: ".feed--latest .story__details h3 a",
        article: {
            header: ".layout__main .article .article__header h1",
            date: ".layout__main .article .author time",
            author: ".layout__main .article .author__details .text--author a",
            content: ".layout__main .article .article__body",
        }
    }
}])

/* Execution */
const app = async () => {
    const result = await webbot_9news.start()
    console.log(result)
}
app()
