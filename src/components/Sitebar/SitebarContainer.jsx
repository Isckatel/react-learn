import {connect} from 'react-redux';
import  Sitebar from "./Sitebar";

let mapStateToProps = (state) => {
  return {
    sitebar: state.sitebar
  }
}

const SitebarContainer = connect(mapStateToProps)(Sitebar);

export default SitebarContainer;
