const config = {
    bucket_name: process.env.GATSBY_APP_BUCKET_SLUG || "",
    bucket_slug: process.env.GATSBY_APP_BUCKET_SLUG || "",
    bucket_id: process.env.GATSBY_APP_BUCKET_ID || "",
    read_key: process.env.GATSBY_APP_BUCKET_READ_KEY || "",
    write_key: process.env.GATSBY_APP_BUCKET_WRITE_KEY || "",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;