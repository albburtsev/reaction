import {connect} from 'react-redux';

import PageEntry from './PageEntry.jsx';

export default connect(
    ({meta: {name, description, version}}) => ({
        name,
        description,
        version
    })
)(PageEntry);
