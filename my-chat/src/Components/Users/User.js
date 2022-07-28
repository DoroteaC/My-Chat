const User = (props) {
    const user = {
        key:Math.random(),
        id: Math.random(),
        name: props.userName,
        avatar: []
    }
    console.log (user);
}

export default User;