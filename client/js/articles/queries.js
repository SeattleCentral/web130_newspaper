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
export const getCampusArticles = `
    query getCampusArticles($where: ArticleWhereArgs) {
        viewer {
            allArticles(where: $where) {
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