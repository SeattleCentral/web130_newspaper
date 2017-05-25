import { getAllArticles } from './queries';


if (js_page == 'home_page') {
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
}
