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
                                name
                            }
                        }
                    }
                }
            }
        }
    }
}`;

$.ajax({
    type: "POST",
    url: "https://us-west-2.api.scaphold.io/graphql/sct-course",
    data: JSON.stringify({
        query: getAllArticles
    }),
    contentType: 'application/json',
    success: function(response) {
        console.log(response);
        let articles = [];
        if (response.hasOwnProperty('data')) {
            let articleEdges = response.data.viewer.allArticles.edges;
            for (var article of articleEdges) {
                articles.push(article.node);
            }
        }
        
        $('#article-1').find('h1').html(articles[0].title);
        $('#article-1').find('article').html(articles[0].content);
        
        console.log('HERE IS THE ARTICLES ARRAY');
        console.log(articles);
    }
});
