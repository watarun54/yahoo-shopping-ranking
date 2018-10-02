import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component {
    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }

    render() {
        return (
            <div>
                <h2>Ranking コンポーネント</h2>
                <p>カテゴリーID: {categoryId}</p>
            </div>
        )
    }
}

Ranking.propTypes = {
    categoryId: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: propTypes.func.isRequired
};

Ranking.defaultProps = {
    categoryId: '1'
};