let defaults = {
    title: 'title',
    description: 'meta[name = "description"]'
}

let openGraph = {
    url: 'meta[property = "og:url"]',
    title: 'meta[property = "og:title"]',
    description: 'meta[property = "og:description"]',
    siteName: 'meta[property = "og:site_name"]',
    type: 'meta[property = "og:type"]',
    image: 'meta[property = "og:image"]',
    imageType: 'meta[property = "og:image:type"]',
    imageWidth: 'meta[property = "og:image:width"]',
    imageHeight: 'meta[property = "og:image:height"]'
};
let twitter = {
    title: 'meta[name = "twitter:title"]',
    description: 'meta[name = "twitter:description"]',
    image: 'meta[name = "twitter:image"]',
    site: 'meta[name = "twitter:site"]',
    card: 'meta[name = "twitter:card"]',
    dnt: 'meta[name = "twitter:dnt"]'
};
let link = {
    canonical: 'link[rel = "canonical"]',
    alternateRu: 'link[rel = "alternate"][hreflang = "ru"]',
    alternateUkr: 'link[rel = "alternate"][hreflang = "uk"]'
};

export {defaults, openGraph, twitter, link};