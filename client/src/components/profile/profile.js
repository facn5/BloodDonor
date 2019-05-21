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
  let udetails = cookie.load('udetails');
  if(udetails){
    udetails = JSON.parse(window.atob(udetails.split('.')[1])).u$u;
    if(udetails){
      this.isAuthorized((authorized)=>{
        if(authorized) {
        this.setState({searchStatus:'reqverified'})
        fetch(`/getProfile/${udetails}`)
        .then(res => {
          this.setState({searchStatus:'searching'});
          return res.json();
        })
        .then(results => {
          this.setState({
            userProfile:results.data,
            searchStatus:'finished'})
            return results;
        })
        .then(profile => {profile.data === null?this.setState({searchStatus:'notfound'}):this.setState({searchStatus:'found'})})
       }else{
        this.setState({searchStatus:'notfound'})
      }
   });
 }else {
     this.setState({searchStatus:'notfound'})
   }
}else{
   this.setState({searchStatus:'notfound'})
      }
};


  isAuthorized = (cb) => {
    this.setState({searchStatus:'checkauth'});
    fetch('/checkAuth')
  .then(res=>{
    this.setState({searchStatus:'verifyreq'})
    return res.json()})
  .then(data=>{
    console.log('authorized',data.authenticated);
    return cb(data.authenticated)});
}

componentDidUpdate(){
  console.log('search status',this.state.searchStatus);
  if(this.state.searchStatus === 'notfound'){
    this.setState({searchStatus:'displayNotFound'});
  } else if(this.state.searchStatus === 'found') {
    this.setState({searchStatus:'displayUserDetails'})
  }
}
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
render(){
  console.log('user profile',this.state.userProfile);
   switch(this.state.searchStatus) {
     case 'checkauth':
      return (this.displaySearchStatus('Checking authentication...'));
     case 'verifyreq':
      return (this.displaySearchStatus('Verifying request...'));
     case 'reqverified':
      return (this.displaySearchStatus('Request verfied...'));
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
              <p><img src="https://img.icons8.com/ios/50/000000/email.png"/> {this.state.userProfile.email}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/phone.png"/> {this.state.userProfile.phoneNumber}</p>
              <p><img src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png"/> {this.state.userProfile.config.bloodType}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/18-plus.png"/> {this.state.userProfile.config.validAge.toString()}</p>
              <p><img src="https://img.icons8.com/dotty/80/000000/health-calendar.png"/> {this.state.userProfile.config.healthStatus.toString()}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/hospital-3.png"/> {this.state.userProfile.config.recentSurgey.toString()}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/alarm.png"/> {this.state.userProfile.config.getNotification.toString()}</p>
              <div className='Edit'>
                <button className='edit'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"/> Edit</button>
              </div>
            </div>
          </div>
        </>
      );
   }
}

}
