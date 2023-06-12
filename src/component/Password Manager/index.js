import {Component} from 'react'
import './index.css'

import {v4 as uuidv4} from 'uuid'

cons colorList = ['yellow','green','orange','brown', 'blue']

class app extends Component{
    state = {
        isTrue : flase,
        isLatestList : [],
        website:'',
        username:'',
        password:'',
        isShow:false,
    }
    listenWebsite=e=>{
        this.setState({website:e.target.value})
    }
    listUsername = e =>{
        this.setState({username:e.target.value})
    }
    listPassword = e => {
        this.setState({password:e.target.value})
    }
    addContent = e => {
        e.preventDefault()
        const {username,website,password}= this.state
        const initial = website.slice(0,2).toUpperCase()
        const classValue = colorList[Math.floor(Math.random()*5)]
        const newValues = {
            id : uuidv4(),
            initialValue : initial,
            userName: username,
            Password: password,
            classId : classValue,


        }
        this.setState(prevState=>({
            latestList: [...prevState.latestList,newValues]
        }))
    }
    showPassword=e=>{
        if(e.target.cheked){
            this.setState({isShow:true})
        }
        else{
            this.setState({isShow:false})
        }
    }
    searchList = e => {
        this.setState({searchInput:e.target.value})
    }
    deleteItem=id=>{
        const{latestList}=this.state
        const newList = latestList.fliter(eachValue=> eachValue.id!==id)
        const caseOf = newList.length!==0
        this.setState({latestList:newList,isTrue:caseOf})

    }
    render(){
        const{
            website,
            username,
            password,
            latestList,
            isShow,
            searchInput,
        }= this.state
        let{isTrue}= this.state
        const newList = latestList.filter(eachValue=>
            eachValue.websiteName.toLowercase().includes(searchInput.toLowercase())
            )
            if(newList.length===0){
                isTrue:false
            }
            else{
                isTrue:true
            }
            return(
                <div className="main-container">
                <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" className:'app-logo' alt = 'app logo'/>
                  <div className="sub-div1">
                      <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" className="sub-divi-image2" alt = "password manager"/>
                   <form className = "add-details" onSubmit={this.addContent}>
                   <h1 className="detail-heading">Add New Password</h1>
                   <div className="input-holder">
                   <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website" class="input-image"/>
                   <input type="text" className="input-element" 
                       placeholder="Enter Website"
                       onChange= {this.listenWebsite}
                       value = {website}
                   />
                   
                   </div>
                   <div className = "input-holder">
                   <img src= "https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="usrename" className="input-image"/>
                    <input type = "text"
                       className = "input-element"
                       onChange = {this.listUsername}
                       value = {username}
                   />
                    
                   </div>
                   <div className = "input-holder">
                   <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" alt="password" className="input-image"/>
                   <input type = "password"
                       className = "input-element"
                       onChange = {this.listPassword}
                       value = {password}
                   />

                   </div>
                   <button type = "submit" className="add-btn">
                       Add
                   </button>

                   </form>
                   <img src = 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png ' alt = "password manager" className="sub-div1-image1"/>
                  </div>
                  <div className = "sub-div2">
                  <div className = "first-div">
                  <div className = "your-password">
                  <h1 className="heading-name"> your password</h1>
                  <p className="colored-text">{newList.length}</p>
                  </div>
                  <div className="search-header">
                  <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt = "search" className="input-image"/>
                   <input type="search" 
                       placeholder="search"
                       onChange = {this.searchList}
                       value = {searchInput}
                   />
                  </div>

                  </div>
                  <br/>
                  <div className="show-password">
                  <input type = "checkbox"
                      className = "check-box"
                      id="check"
                      onChange = {this.showPassword}
                  />
                  <label htmlFor = "check" className = "label-password">
                  Show Password
                  </label>

                  </div>
                  {isTrue && (
                      <div className="empty-state">
                      <img src = "https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt = "no password" className="empty-image"/>
                             <p className= "no-password">no password</p>
                      </div>
                  )}
                  </div>
                  {isTrue && (
                      <ul className = "result-container" >
                      {newList.map(eachValue=>(
                          <li className ="item-list" id={eachValue.id} key={eachValue.id}>
                          <p className={`initial${eachVlue.classAdd}`}>
                           {eachValue.initialValue}
                           </p> 
                           <div className="list-content">
                           <p className="website">{eachValue.websiteName}</p>
                           <p className="website">{eachValue.userName}</p>}
                          {isShow && (
                              <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png " alt = "stars" className="star-image"/>
                          )}
                          {isShow && 
                              <p className="website">{eachValue.Password}</p>
                          }
                           </div>
                           <button type="button"
                           className="del-btn"
                           onClick= {()=>this.deleteItem(eachValue.id)}
                           data-testid="delete">
                           <img src = "https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png" alt="delete" className"del-image"/>

                           </button>
                          </li>
                      ))}

                      </ul>
                  )}
                </div>
            )
    }
}
export default App