const showCars = () => {
    axios.get('https://car-service-api-app.herokuapp.com/repairs')
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error)
        });
};

const form = document.getElementById('carForm');

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

const repair ={
        year: yearField.value,
        total_amount: totalField.value,
        mileage: mileageField.value,
        brand: brandField.value,
        items_attributes: [
            (maintenanceField != '' && {amount: maintenanceField, category: 'maintenance'}),
            (coolingField != '' && {amount: coolingField, category: 'cooling_system'}),
            (exhaustField != '' && {amount: exhaustField, category: 'exhaust_system'}),
            (brakeField != '' && {amount: brakeField, category: 'brake_system'}),
            (electricalField != '' && {amount: electricalField, category: 'electrical_system'}),
            (engineField != '' && {amount: engineField, category: 'engine'}),
            (bodyField != '' && {amount: bodyField, category: 'body'}),
            (suspensionField != '' && {amount: suspensionField, category: 'suspension'})]
}

axios({
        method: "post",
        url: 'https://car-service-api-app.herokuapp.com/repairs',
        data: {
            repair
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


form.addEventListener('submit', sentForm);