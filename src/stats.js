const ordersCont = document.querySelector('.orders-container');
const loadMoreBtn = document.querySelector('.load-more');



const showOrders = () => {
    axios.get('https://car-service-api-app.herokuapp.com/repairs')
        .then((res) => {


            res.data.forEach(element => {

                const orderWrap = document.createElement('div');
                const orderBrand = document.createElement('div');
                const orderPrice = document.createElement('div');
                const orderDate = document.createElement('div');

                const spanBrand = document.createElement('span');
                const spanModel = document.createElement('span');
                const spanPrice = document.createElement('span');
                const spanDate = document.createElement('span');



                // spanBrand.setAttribute('class', 'brand');
                spanModel.setAttribute('class', 'model');
                spanPrice.setAttribute('class', 'price');
                spanDate.setAttribute('class', 'date');

                orderWrap.classList.add('order');
                orderBrand.classList.add('brand-info');
                orderBrand.classList.add('order-basic-style');

                orderPrice.classList.add('price-info');
                orderPrice.classList.add('order-basic-style');

                orderDate.classList.add('date-info');
                orderDate.classList.add('order-basic-style');

                ordersCont.appendChild(orderWrap);
                orderWrap.appendChild(orderBrand);
                orderWrap.appendChild(orderPrice);
                orderWrap.appendChild(orderDate);

                orderBrand.appendChild(spanBrand);
                orderBrand.appendChild(spanModel);
                orderPrice.appendChild(spanPrice);
                orderDate.appendChild(spanDate);


            });

            const priceList = document.querySelectorAll('.price');
            const dateList = document.querySelectorAll('.date');

            for (let i = 0; i < priceList.length; i++) {
                priceList[i].textContent = res.data[i].total_amount;
            }

            for (let i = 0; i < dateList.length; i++) {
                dateList[i].textContent = res.data[i].created_at.slice(0, 10);
            }


            const allOrders = document.querySelectorAll('.order');
            const section = document.querySelector('section');
            for (let i = 0; i < allOrders.length; i++) {
                allOrders[i].addEventListener('click', () => {

                    const popup = document.createElement('div');
                    const popupText = document.createElement('p');
                    section.appendChild(popup);
                    popup.appendChild(popupText);
                    popup.classList.add('order-popup');
                    popupText.classList.add('popup-info');
                    // console.log(res.data[i].id);
                    // console.log(res.data[i].items.map((item)=>`${item.category}: ${item.amount}`))

                    popupText.textContent = res.data[i].items.map((item)=>`${item.category}: ${item.amount}`)
                });
            }








        })
        .catch(function (error) {
            console.log(error)
        });
}

showOrders();