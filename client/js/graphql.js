
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

