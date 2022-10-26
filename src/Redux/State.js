
  let state = {
    profilePage: {
      posts:[
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'It is my first post', likesCount: 11},
        {id:3, message: 'It is', likesCount: 11},
        {id:4, message: 'It is my first', likesCount: 11}
      ]
    },

    dialogsPage: {
      messages:[
        {id:1, message: 'Hi'},
        {id:2, message: 'How is your it?'},
        {id:3, message: 'Yo'},
        {id:4, message: 'Yo'},
        {id:5, message: 'Yo'}
      ],
      dialogs:[
        {id:1, name: 'Rezvan'},
        {id:2, name: 'Anvar'},
        {id:3, name: 'Kairat'},
        {id:4, name: 'Erken'},
        {id:5, name: 'Radjan'},
        {id:6, name: 'Zair'}
      ]
    },
    sideBar: {}
  }

  export let addPost = (postMessage) => {
  
    let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
    };
    
    state.profilePage.posts.push(newPost);
  }

  export default state;