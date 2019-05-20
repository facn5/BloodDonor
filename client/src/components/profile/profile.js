import React from 'react';
import './profile.css';
import Spinner from "react-spinner-material";
import cookie from 'react-cookie';

export class Profile extends React.Component {
state = {
  mode: 'view',
  userProfile: null,
  searchStatus: 'idle'
}

componentDidMount(){
  fetch(`/getProfile/${JSON.parse(window.atob(cookie.load('udetails').split('.')[1])).u$u}`)
  .then(res => {
    this.setState({searchStatus:'searching'});
     return res.json();
  })
  .then(results => {
    this.setState({
      userProfile:results.data,
      searchStatus:'finished'})
      console.log(results);
      return results;
    })
  .then(profile => {profile.data === null?this.setState({searchStatus:'notfound'}):this.setState({searchStatus:'found'})})
};
displaySearchStatus = (status) => (
  <>
  <Spinner
    className="spinner"
    size={60}
    spinnerColor={"#333"}
    spinnerWidth={2}
    visible={true}
  />
  <p className='searchStatus'>{status}</p>
  </>
);
componentDidUpdate(){

  if(this.state.searchStatus === 'notfound'){
    this.setState({searchStatus:'displayNotFound'});
  } else if(this.state.searchStatus === 'found') {
    this.setState({searchStatus:'displayUserDetails'})
  }
}
render(){
  console.log(this.state.userProfile);
   switch(this.state.searchStatus) {
     case 'idle':
      return (this.displaySearchStatus('Preparing process...'));
     case 'searching':
      return (this.displaySearchStatus('Finding profile...'));
     case 'finished':
      return (this.displaySearchStatus('Finished looking...'));
     case 'notfound':
      return (this.displaySearchStatus('Profile not found...'));
     case 'found':
      return (this.displaySearchStatus('Profile found...'));
     case 'displayNotFound':
      return (<h1>Profile not found, if you are not logged it please login in here: <a href='/login'> login page</a></h1>)
     case 'displayUserDetails':
      return (
        <>
          <div className='container-profile'>
            <div className='avatar section'><img src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'></img></div>
            <div className='userDetails section'>
              <p className='username'>{this.state.userProfile.username}</p>
              <p>{this.state.userProfile.email}</p>
              <p>{this.state.userProfile.phoneNumber}</p>
              <p>{this.state.userProfile.config.bloodType}</p>
              <p>{this.state.userProfile.config.validAge}</p>
              <p>{this.state.userProfile.config.healthStatus}</p>
              <p>{this.state.userProfile.config.recentSurgey}</p>
              <p>{this.state.userProfile.config.getNotification}</p>
              <div className='Edit'>
                <button>Edit</button>
              </div>
            </div>
          </div>
        </>
      );
   }
}

}
