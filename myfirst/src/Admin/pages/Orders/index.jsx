import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

// import all_orders from '../../constants/orders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';
import { ordersGet } from '../../../Redux/cartReducer/actions';
import { useDispatch, useSelector } from 'react-redux';

function Orders () {
    const all_orders = useSelector((store) => store.cartReducer.orders) || [];
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_orders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (all_orders.length === 0) {
            dispatch(ordersGet());
        } else {
            setPagination(calculateRange(all_orders, 5));
            setOrders(sliceData(all_orders, page, 5));
        }
    }, [dispatch, all_orders, page]);

    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            const searchResults = all_orders.filter((item) =>
                item.username.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(searchResults);
        } else {
            setPage(1);
        }
    };

    const __handleChangePage = (newPage) => {
        setPage(newPage);
        setOrders(sliceData(all_orders, newPage, 5));
    };

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Order" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Orders List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>S.NO</th>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                        <th>COSTUMER</th>
                        <th>PRODUCT</th>
                        <th>REVENUE</th>
                    </thead>

                    {orders.length !== 0 ?
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{index+1}</span></td>
                                    <td><span>{order._id}</span></td>
                                    {/* <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.status}</span>
                                        </div>
                                    </td> */}
                                    <td>
                                        <div>
                                            <span>{order.username}</span>
                                        </div>
                                    </td>
                                    <td><span>{order.totalProducts}</span></td>
                                    <td><span>${order.amount}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Orders;