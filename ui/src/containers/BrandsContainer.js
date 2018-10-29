import { connect } from 'react-redux';
import Brands from '../components/brands/Brands';
import { getBrandsFromCountryId } from '../middlewares/brands';


const mapStateToProps = state => state.brandsReducer

const mapDispatchToProps = {
    fetchBrands: getBrandsFromCountryId
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);