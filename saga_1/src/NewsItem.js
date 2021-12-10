import React from 'react';
import { connect } from 'react-redux'

let NewsItem = ({ article }) => (
    article ?
        <article>
            <div>
                <h1>{article.title}</h1>
                <img src={article.urlToImage} alt="" />
                <h4>{article.description}</h4>
                <a href={article.url} target="_blank">READ MORE</a>
            </div>
</article > :
null
);

const mapStateToProps = (state) => ({
    article: state.news,
})

NewsItem = connect(mapStateToProps, null)(NewsItem)
export default NewsItem;