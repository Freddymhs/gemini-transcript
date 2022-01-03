import { Supadata, SupadataError } from "@supadata/js";

const getTranscriptionSupa = async (url) => {
  const supadata = new Supadata({
    apiKey: process.env.REACT_APP_SUPADATA_API_KEY,
  });

  try {
    const transcript = await supadata.youtube.transcript({
      url,
    });

    const { lang: _, availableLanguages: __, content } = transcript;
    return content;
  } catch (e) {
    if (e instanceof SupadataError) {
      console.error(e.error); // e.g., 'video-not-found'
      console.error(e.message); // Human readable error message
      console.error(e.details); // Detailed error description
      console.error(e.documentationUrl); // Link to error documentation (optional)
    }
  }
};

// // Translate YouTube transcript
// const translated: Transcript = await supadata.youtube.translate({
//   videoId: "dQw4w9WgXcQ",
//   lang: "es",
// });

// // Scrape web content
// const webContent: Scrape = await supadata.web.scrape("https://supadata.ai");

// // Map website URLs
// const siteMap: Map = await supadata.web.map("https://supadata.ai");

// // Crawl website
// const crawl: Crawl = await supadata.web.crawl({
//   url: "https://supadata.ai",
//   limit: 10,
// });

// // Get crawl job results
// const crawlResults: CrawlJob = await supadata.web.getCrawlResults(crawl.jobId);

export default getTranscriptionSupa;
