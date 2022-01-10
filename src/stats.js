const showStats = () => {
    axios({
        method: 'get',
        url: 'https://car-service-api-app.herokuapp.com/stats',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        console.log(resp.data);
    }).catch(err => {
        // Handle Error Here
        console.error(err);
    });
}

showStats();