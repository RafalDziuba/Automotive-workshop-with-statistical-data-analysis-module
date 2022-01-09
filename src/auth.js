const checkToken = () => {
    if(localStorage.length < 1){
        window.location.href = 'notoken.html'
    }
}
checkToken();