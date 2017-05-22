var createArticle = `mutation createArticleQuery($input: CreateArticleInput!) {
	  createArticle(input: $input) {
        changedArticle {
            id
            modifiedAt
            title
            content
            category
            author {
                edges {
                    node {
                        username
                        id
                        name
                    }
                }
            }
        }
    }
}`;

var articleData = {
  "input": {
  	"title": "The first article ever written",
    "content": "Blah blah blah",
    "category": "Campus"
  }
};


var getArticle = `query getArticleQuery($input: ID!){
  getArticle(id:$input){
    title
    id
    content
    category
    modifiedAt
  }
}`;

var getArticleData = {
  "input": "QXJ0aWNsZTo2"
};

var getAllArticles = `query getAllArticles {
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
                            }
                        }
                    }
                }
            }
        }
    }
}`;

$.ajax({
    type: 'POST',
    url: 'https://us-west-2.api.scaphold.io/graphql/sct-course',
    data: JSON.stringify({
        'operationName': 'getAllArticles',
        'query': getAllArticles,
        'variables': {}
    }),
    success: function(response) {
        if (response.hasOwnProperty('data')) {
            let articles = response.data.viewer.allArticles.edges;
            for (var article of articles) {
                console.log(article.node.title);
            }
        }
        console.log(response);
    },
    contentType: 'application/json'
});

var article = 'lsdjflsjflksdjflksdjflsdjfsd'
article.substr(0, 500) + '...'