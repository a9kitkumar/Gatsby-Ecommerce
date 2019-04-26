const config = {
    bucket_name: process.env.GATSBY_APP_BUCKET_SLUG || "Gatsby Ecommerce",
    bucket_slug: process.env.GATSBY_APP_BUCKET_SLUG || "gatsby-ecommerce",
    bucket_id: process.env.GATSBY_APP_BUCKET_ID || "5cc1ead2516526548dab945e",
    read_key: process.env.GATSBY_APP_BUCKET_READ_KEY || "I1PfzotU6HCFGnJHPEw9uedKwiwKtSt6AovV2Jp5x5iyPHBMeC",
    write_key: process.env.GATSBY_APP_BUCKET_WRITE_KEY || "lcO9D0ocYPXTx9cceWZn2PoQZBPcUdwtNqMxubZ9i63k0W43iU",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;