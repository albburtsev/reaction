import {connect} from 'react-redux';

import Footer from './Footer';
import {Store} from '../../../reducers';

const mapStateToProps = ({meta: {description, version}}: Store) => ({
    description,
    version
});

const FooterContainer = connect(
    mapStateToProps
)(Footer);

export default FooterContainer as React.ComponentClass<any>;
