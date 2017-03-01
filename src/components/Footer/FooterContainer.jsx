import {connect} from 'react-redux';

import Footer from './Footer';

export default connect(
    ({meta: {description, version}}) => ({
        description,
        version
    })
)(Footer);
