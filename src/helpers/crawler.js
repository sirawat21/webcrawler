import Nightmare from "nightmare"
import colors from "colors"

class crawler {

    constructor(config) {
        this._CONF = { ...config[0] }
        this.store = {
            pages: [], // store the links from urlCrawling func
            result: []
        }
    }

    start = async () => {
        await this.urlCrawling()
        await this.pageScraping()
        return this.store.result
    }

/* Extract the URL from first page and make the lists for further scraping */
    urlCrawling = async () => {
        const nightmare = Nightmare()
        try{
            await nightmare
                .goto(this._CONF.url)
                .wait('body')
                .evaluate((selector) => {
                    return Array.from(document.querySelectorAll(selector))
                        .map(element => element.href)
                }, this._CONF.selectors.url)
                .end()
                .then( res => {
                    this.store.pages = (this._CONF.limit !== null) ? [...res.slice(0, this._CONF.limit)] : [...res]
                })
        } catch(err) {
            console.log(colors.red("[FUNC: urlCrawling]") + err)
        }
    }

/* Start scraping webpage from the URL lists */
    pageScraping = async () => {
        try{
            const cache = []
            for(let page of this.store.pages) {
                console.log(`${colors.green("[EXTRACT]")}:${colors.yellow(this._CONF.name)} - ${page}`)
                const nightmare = Nightmare()
                await nightmare
                    .goto(page)
                    .wait('body')
                    .evaluate((selector) => {
                        return {
                            header: document.querySelector(selector.header).innerText,
                            date: document.querySelector(selector.date).innerText,
                            author: document.querySelector(selector.author).innerText,
                            content: document.querySelector(selector.content).innerText
                        }
                    }, this._CONF.selectors.article)
                    .end()
                    .then( html => { 
                        cache.push({
                            url: page,
                            body: html
                        })
                    })
            }
            this.store.result = [...cache]
        } catch(err) {
            console.log(colors.red("[FUNC: pageScrping]") + err)
        }
    }
}

export default crawler
