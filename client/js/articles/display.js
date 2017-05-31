const MAX_ARTICLES = 5;

export let displayArticles = (articles) => {
    let numberToDisplay = Math.min(articles.length, MAX_ARTICLES),
        i;
    for (i = 1; i < numberToDisplay + 1; i++) {
        let article = articles[i],
            $elem = $('#article-'+i);
        $elem.find('h1, h2').html(article.title);
        $elem.find('article').html(article.content);
    }
};

