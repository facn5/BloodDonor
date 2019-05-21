import React from 'react';
import './profile.css';
import Spinner from "react-spinner-material";
import cookie from 'react-cookie';


export class Profile extends React.Component {
state = {
  mode: 'view',
  userProfile: null,
  searchStatus: 'idle',
  username: '',
  email:'',
  changeConfig:{
     email:'',
     phone:'',
     bloodType:'',
     validAge:null,
     goothealth:null,
     recentSurgery:null,
     notification:false
  }
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
        .then(profile => {
          if(!profile.data.config){
            this.setState({searchStatus:'noconfig'});
          } else {
            this.setState({
              searchStatus:'found',
              username:profile.data.username
          });
          }

        });
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
  .then(data=>cb(data.authenticated));
}

componentDidUpdate(){
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
handleInputChange = event => {
  if (event.target.name === 'email')
    this.setState({email: event.target.value });
  else if (event.target.name == 'phone')
    this.setState({ phone: event.target.value });
  else if (event.target.name == 'bloodType')
    this.setState({ bloodType: event.target.value });
  else if (event.target.name == 'validAge')
    this.setState({ validAge: event.target.checked });
  else if (event.target.name == 'healthStatus')
    this.setState({ goothealth: event.target.checked });
  else if (event.target.name == 'recentSurgery')
    this.setState({ recentSurgery: event.target.checked });
  else if (event.target.name == 'notification')
    this.setState({ notification: event.target.checked });
  else console.log('nochange');
  console.log('current save',this.state.changeConfig);
};
showUserConfig = (isVerified) => {
  if(isVerified) {
    return (
      <>
        <div className='container-profile'>
            <div className='avatar section'><img src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'></img></div>
            <div className='userDetails section'>
              <p className='username'>{this.state.userProfile.username}</p>
              <p>{this.state.userProfile.email}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/phone.png"/> {this.state.userProfile.phoneNumber}</p>
              <p><img src="https://img.icons8.com/pastel-glyph/64/000000/--bloodbag.png"/> {this.state.userProfile.config.bloodType}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/18-plus.png"/> {this.state.userProfile.config.validAge?'Age verified':'Age is not verified'}</p>
              <p><img src="https://img.icons8.com/dotty/80/000000/health-calendar.png"/> {this.state.userProfile.config.healthStatus?'Health status is GOOD':'Your health status is NOT GOOD'}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/hospital-3.png"/> {this.state.userProfile.config.recentSurgey?'You had a recent surgery':'You didnt do any surgery recently'}</p>
              <p><img src="https://img.icons8.com/ios/50/000000/alarm.png"/> {this.state.userProfile.config.getNotification?'Getting notification':'Dont notify me'}</p>
              <div className='Edit'>
                <button onClick={()=>this.editConfig()}><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"/>{this.state.mode==='edit'?'Hide edit':'Edit'}</button>
              </div>
            </div>
            <div className={this.state.mode!=='edit'?'configEditForm section hideEdit':'configEditForm section'}>
              <div><input
                name="email"
                placeholder="Email address"
                type="email"
                onChange={this.handleInputChange}
              /></div>
              <div><input
                name="phone"
                placeholder="Phone number"
                type="text"
                onChange={this.handleInputChange}
              /></div>
              <div><input
                name="bloodtype"
                placeholder="Blood type"
                type="text"
                onChange={this.handleInputChange}
              /></div>
              <div>Older than 18 and weight 50 kg+<input
                name="validAge"
                type="checkbox"
                onChange={this.handleInputChange}
              /></div>
              <div>Your health status is good?<input
                name="healthStatus"
                type="checkbox"
                onChange={this.handleInputChange}
              /></div>
              <div>Have you made any recent surgery?<input
                name="recentSurgery"
                type="checkbox"
                onChange={this.handleInputChange}
              /></div>
              <div>Would you like to get notification?<input
                name="notification"
                type="checkbox"
                onChange={this.handleInputChange}
              /></div>
              <button onClick={()=>this.saveConfig(this.state.changeConfig)}><img src="https://img.icons8.com/ios/50/000000/save-as-filled.png"/> Save</button>
            </div>
        </div>
      </>);
  } else {
  return (
    <>
      <div className='container-profile'>
          <div className='avatar section'><img src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png'></img></div>
          <div className='userDetails section'>
            <p className='username'>{this.state.userProfile.username}</p>
            <div className='section noconfig'>Your user is not verified please head to <a href='/regform'>this page</a> to verify your account.</div>
          </div>
      </div>
    </>);
}};
saveConfig = (configObj) => {
  console.log('saved config',configObj);
}
editConfig = () => {
  this.setState({mode:'edit'});
}

render(){
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
     case 'noconfig':
      return (this.showUserConfig(false));
     case 'displayUserDetails':
      return (this.showUserConfig(true));
   }
}

}
