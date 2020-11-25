import React from 'react';
import {connect} from 'react-redux';
import {set_data, facebook_login} from '../../store/action'
import './style.css';

class Home extends React.Component{

    static getDerivedStateFromProps(props,state){
        console.log("props==>",props)
        return{

        }
    }
    render(){  
      let user = {name: "Ken Adams", email: "mehroz@gmail.com"}
  return (
    <div>
        <h1 className = "boo">Home</h1>
        <button onClick={() => this.props.facebook_login()}>Facebook Login</button>    </div> 
  );
}}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProp = (dispatch) => ({
    set_data: (data) => dispatch(set_data()),
    facebook_login: () => dispatch(facebook_login()),
    
})

export default connect(mapStateToProps, mapDispatchToProp)(Home);
