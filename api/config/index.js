module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "jfhjdlkhflkjdhflkdfldfkdflkdhfkdklfdjfkdkfjdlkfjdklfldjfssd",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-test.ampliee.com": "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-test.ampliee.com" : "http://localhost:8000"
}