
    const showCars = () => {
        axios.get('https://car-service-api-app.herokuapp.com/repairs')
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error)
            });
    }


    const sentForm = (e) => {

        e.preventDefault();



        const yearField = document.getElementById('year');
        const mileageField = document.getElementById('mileage');
        const totalField = document.getElementById('total');

        axios({
                method: "post",
                url: 'https://car-service-api-app.herokuapp.com/repairs',
                data: {
                    repair: {
                        year: yearField.value,
                        mileage: mileageField.value,
                        total_amount: totalField.value
                    }
                },
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });

    }

    const form = document.getElementById('carForm');
    form.addEventListener('submit', sentForm);
