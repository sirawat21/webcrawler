/* Example using the script */
import { crawler } from "./libs"

/* Create & configuration webbots */
const webbot_7news = new crawler([{
    url: "https://7news.com.au/news/qld",
    name: "7News",
    limit: 2,
    selectors: {
        url: ".css-17y2dnz-StyledMain.ex9zihq1 .PortraitCard.css-1yghjv5-StyledPortrait.e1k0ooyj5 a",
        article: {
            header: ".css-17y2dnz-StyledMain.ex9zihq1 h1",
            date: ".css-1oiaxm1-StyledBylineTextWrap.eghrpuw15 .css-1n3g7db-StyledMultipleTimestampWrapper.eghrpuw8 time",
            author: ".css-1oiaxm1-StyledBylineTextWrap.eghrpuw15 span span",
            content: ".css-1avq4ub-StyledArticleContent.e1gpd5nn2",
        }
    }
}])
const webbot_9news = new crawler([{
    url: "https://www.9news.com.au/queensland",
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
const main = ( async () => {
    const rawData = []
    /* rawData.push(await webbot_7news.start()) */
    rawData.push(await webbot_9news.start())
    console.log(JSON.stringify(rawData, null, 4))
})()
