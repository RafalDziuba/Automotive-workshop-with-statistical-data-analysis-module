const total_orders = document.getElementById('total_orders');
const total_income = document.getElementById('total_income');

const showInfo = () => {
    axios({
        method: 'get',
        url: 'https://car-service-api-app.herokuapp.com/repairs',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    )
        .then((res) => {
            total_orders.textContent = res.data.length;

            const getAmount = () => {
                let result = 0;
                for (let x of res.data) {
                    let parsed = parseFloat(x.total_amount);
                    result += parsed;
                }
                total_income.textContent = result.toFixed(2);
            }
            getAmount();



        })
        .catch(function (error) {
            console.log(error)
        });
}

showInfo();