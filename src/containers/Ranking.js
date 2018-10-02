import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

// Reducerを定義後に実装する
const mapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.categoryId,
    // カテゴリ情報、ランキング情報をRankingコンポーネントに渡す
    category: state.Ranking.category,
    Ranking: state.Ranking.ranking,
    error: state.Ranking.error
});

const mapDispatchToProps = dispatch => ({
    // onMount,onUpdateとfetchRankignを接続
    onMount (categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate (categoryId) {
        dispatch(actions.fetchRanking(categoryId));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Ranking);