import  profileReducer    from "./profile-reducer";
import  dialogsReducer  from "./dialogs-reducer";
import  sidebarReducer  from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 11 },
        { id: 3, message: 'It is', likesCount: 11 },
        { id: 4, message: 'It is my first', likesCount: 11 }
      ],
      newPostText: 'it camasutra'
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Rezvan' },
        { id: 2, name: 'Anvar' },
        { id: 3, name: 'Kairat' },
        { id: 4, name: 'Erken' },
        { id: 5, name: 'Radjan' },
        { id: 6, name: 'Zair' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ''
    },
    sideBar: {}
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;