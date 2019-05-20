import React from 'react';
import './profile.css';
import Spinner from "react-spinner-material";

export class Profile extends React.Component {
state = {
  mode: 'view',
  userProfile: null,
  username : 'Admin',
  searchStatus: 'idle'
}

componentDidMount(){
  fetch('/getProfile')
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
            <div className='avatar'></div>
            <div className='userDetails'></div>
            <div className='Edit'></div>
          </div>
        </>
      );
   }
}

}
