// All articles
export const getAllArticles = `
    query getAllArticles {
        viewer {
            allArticles{
                edges {
                    node {
                        id
                        title
                        content
                        category
                        author {
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;

// Campus category articles
export const getCampsArticles = `
    query getAllArticles {
        viewer {
            allArticles{
                edges {
                    node {
                        id
                        title
                        content
                        category
                        author {
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }`;