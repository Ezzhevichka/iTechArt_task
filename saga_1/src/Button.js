import React from 'react';
import { connect } from 'react-redux';
import { getNews } from './actions';

let Button = ({getNews}) => {
    <Button onClick={getNews}>Want to check?</Button>
}

const dispatchingProps = {
    getNews: getNews,
}

Button = connect(null, dispatchingProps)(Button);

export default Button;