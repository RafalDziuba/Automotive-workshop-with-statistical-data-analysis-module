

const form = document.getElementById('carForm');
const totalField = document.getElementById('total');
const yearField = document.getElementById('year');
const mileageField = document.getElementById('mileage');
const brandField = document.getElementById('brand');


const autoSummaryBtn = document.getElementById('total-sum');

const totalAmount = (e) => {
    e.preventDefault();
    const maintenanceField = document.getElementById('maintenance').value;
    const coolingField = document.getElementById('cooling').value;
    const exhaustField = document.getElementById('exhaust').value;
    const brakeField = document.getElementById('brake').value;
    const electricalField = document.getElementById('electrical').value;
    const engineField = document.getElementById('engine').value;
    const bodyField = document.getElementById('body').value;
    const suspensionField = document.getElementById('suspension').value;
    const arr = [Number(maintenanceField), Number(coolingField), Number(exhaustField), Number(brakeField), Number(electricalField), Number(engineField), Number(bodyField), Number(suspensionField)]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    totalField.value = sum;

}

const sentForm = (e) => {

    e.preventDefault();

    const totalField = document.getElementById('total');
    const yearField = document.getElementById('year');
    const mileageField = document.getElementById('mileage');
    const brandField = document.getElementById('brand');
    const maintenanceField = document.getElementById('maintenance').value;
    const coolingField = document.getElementById('cooling').value;
    const exhaustField = document.getElementById('exhaust').value;
    const brakeField = document.getElementById('brake').value;
    const electricalField = document.getElementById('electrical').value;
    const engineField = document.getElementById('engine').value;
    const bodyField = document.getElementById('body').value;
    const suspensionField = document.getElementById('suspension').value;

    const repair = {
        year: yearField.value,
        total_amount: totalField.value,
        mileage: mileageField.value,
        brand: brandField.value,
        items_attributes: [
            (maintenanceField != '' && {
                amount: maintenanceField,
                category: 'maintenance'
            }),
            (coolingField != '' && {
                amount: coolingField,
                category: 'cooling_system'
            }),
            (exhaustField != '' && {
                amount: exhaustField,
                category: 'exhaust_system'
            }),
            (brakeField != '' && {
                amount: brakeField,
                category: 'brake_system'
            }),
            (electricalField != '' && {
                amount: electricalField,
                category: 'electrical_system'
            }),
            (engineField != '' && {
                amount: engineField,
                category: 'engine'
            }),
            (bodyField != '' && {
                amount: bodyField,
                category: 'body'
            }),
            (suspensionField != '' && {
                amount: suspensionField,
                category: 'suspension'
            })
        ]
    }

    axios({
            method: "post",
            url: 'https://car-service-api-app.herokuapp.com/repairs',
            data: {
                repair
            },
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });

}



autoSummaryBtn.addEventListener('click', totalAmount);

form.addEventListener('submit', sentForm);