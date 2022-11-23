import Users from './Users';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispath) => {
    return {
        follow: (userId) => { 
            dispath(followAC(userId));
        },

        unfollow: (userId) => { 
            dispath(unfollowAC(userId));
        },

        setUsers: (users) => { 
            dispath(setUsersAC(users));
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);