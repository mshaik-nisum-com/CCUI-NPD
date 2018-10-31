import { connect } from 'react-redux';
import Brands from '../components/brands/Brands';
import { getBrandsFromCountryId } from '../middlewares/brands';
import { getOrderNumber } from '../middlewares/orderNumber'

const mapStateToProps = state => state.brandsReducer

const mapDispatchToProps = {
    fetchBrands: getBrandsFromCountryId,
    orderNumberGenerator : getOrderNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);