import { connect } from 'react-redux';

import Footer from './Footer';
import { IStore } from '../../../reducers';

const mapStateToProps = ({ meta: { description, version } }: IStore) => ({
    description,
    version
});

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer as React.ComponentClass<any>;
