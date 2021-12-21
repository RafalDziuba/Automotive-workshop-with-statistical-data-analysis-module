const ordersCont = document.querySelector('.orders-container');
const pageNumbers = document.getElementById('pagination');




const showOrders = () => {
    axios.get('https://car-service-api-app.herokuapp.com/repairs\?BYPASS_AUTHENTICATION\=true')
        .then((res) => {

            console.log(res.data)
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


            const nodeListOrders = document.querySelectorAll('.order');
            const allOrders = Array.from(nodeListOrders);
            const section = document.querySelector('section');
            for (let i = 0; i < allOrders.length; i++) {
                allOrders[i].addEventListener('click', () => {

                    const popup = document.createElement('div');
                    const popupMenu = document.createElement('div');

                    const closeContainer = document.createElement('div');
                    const closeBtn = document.createElement('button');
                    const popupTextContainer = document.createElement('div');

                    const popupText = document.createElement('p');
                    const popupText2 = document.createElement('p');
                    const popupText3 = document.createElement('p');
                    const popupText4 = document.createElement('p');
                    const popupText5 = document.createElement('p');
                    const popupText6 = document.createElement('p');
                    const popupText7 = document.createElement('p');

                    const popupTextPrice = document.createElement('p');
                    const popupTextPrice2 = document.createElement('p');
                    const popupTextPrice3 = document.createElement('p');
                    const popupTextPrice4 = document.createElement('p');
                    const popupTextPrice5 = document.createElement('p');
                    const popupTextPrice6 = document.createElement('p');
                    const popupTextPrice7 = document.createElement('p');

                    const popupOrdersInfo = document.createElement('div');
                    const popupOrdersInfo2 = document.createElement('div');
                    const popupOrdersInfo3 = document.createElement('div');
                    const popupOrdersInfo4 = document.createElement('div');
                    const popupOrdersInfo5 = document.createElement('div');
                    const popupOrdersInfo6 = document.createElement('div');
                    const popupOrdersInfo7 = document.createElement('div');

                    section.appendChild(popup);
                    popup.appendChild(popupMenu);
                    popup.appendChild(popupTextContainer);
                    popupMenu.appendChild(closeContainer);
                    closeContainer.appendChild(closeBtn);
                    popupTextContainer.appendChild(popupOrdersInfo);
                    popupTextContainer.appendChild(popupOrdersInfo2);
                    popupTextContainer.appendChild(popupOrdersInfo3);
                    popupTextContainer.appendChild(popupOrdersInfo4);
                    popupTextContainer.appendChild(popupOrdersInfo5);
                    popupTextContainer.appendChild(popupOrdersInfo6);
                    popupTextContainer.appendChild(popupOrdersInfo7);
                    popupOrdersInfo.appendChild(popupText);
                    popupOrdersInfo2.appendChild(popupText2);
                    popupOrdersInfo3.appendChild(popupText3);
                    popupOrdersInfo4.appendChild(popupText4);
                    popupOrdersInfo5.appendChild(popupText5);
                    popupOrdersInfo6.appendChild(popupText6);
                    popupOrdersInfo7.appendChild(popupText7);

                    popupOrdersInfo.appendChild(popupTextPrice);
                    popupOrdersInfo2.appendChild(popupTextPrice2);
                    popupOrdersInfo3.appendChild(popupTextPrice3);
                    popupOrdersInfo4.appendChild(popupTextPrice4);
                    popupOrdersInfo5.appendChild(popupTextPrice5);
                    popupOrdersInfo6.appendChild(popupTextPrice6);
                    popupOrdersInfo7.appendChild(popupTextPrice7);


                    // popup.appendChild(popupOrdersInfo);

                    popupOrdersInfo.classList.add('popup-orders-info')
                    popupOrdersInfo2.classList.add('popup-orders-info')
                    popupOrdersInfo3.classList.add('popup-orders-info')
                    popupOrdersInfo4.classList.add('popup-orders-info')
                    popupOrdersInfo5.classList.add('popup-orders-info')
                    popupOrdersInfo6.classList.add('popup-orders-info')
                    popupOrdersInfo7.classList.add('popup-orders-info')
                    popupTextContainer.classList.add('orders-info-container');
                    popupMenu.classList.add('popup-menu');
                    closeContainer.classList.add('close-btn')
                    closeBtn.classList.add('close')
                    popup.classList.add('order-popup');
                    popupText.classList.add('popup-info');
                    popupText2.classList.add('popup-info');
                    popupText3.classList.add('popup-info');
                    popupText4.classList.add('popup-info');
                    popupText5.classList.add('popup-info');
                    popupText6.classList.add('popup-info');
                    popupText7.classList.add('popup-info');

                    closeBtn.textContent = 'X';
                    // console.log(res.data[i].id);
                    // console.log(res.data[i].items.map((item)=>`${item.category}: ${item.amount}`))

                    const closePopup = () => {
                        section.removeChild(popup);
                    }


                    if (res.data[i].items[0] === undefined) {
                        popupText.textContent = 'None';
                        popupTextPrice.textContent = '0zł';
                    } else {
                        popupText.textContent = res.data[i].items[0].category + ':';
                        popupTextPrice.textContent = res.data[i].items[0].amount + 'zł';
                    };


                    if (res.data[i].items[1] === undefined) {
                        popupText2.textContent = 'None';
                        popupTextPrice2.textContent = '0zł';
                    } else {
                        popupText2.textContent = res.data[i].items[1].category + ':';
                        popupTextPrice2.textContent = res.data[i].items[1].amount + 'zł';
                    };


                    if (res.data[i].items[2] === undefined) {
                        popupText3.textContent = 'None';
                        popupTextPrice3.textContent = '0zł';
                    } else {
                        popupTex3.textContent = res.data[i].items[2].category + ':';
                        popupTextPrice3.textContent = res.data[i].items[2].amount + 'zł';
                    };


                    if (res.data[i].items[3] === undefined) {
                        popupText4.textContent = 'None';
                        popupTextPrice4.textContent = '0zł';
                    } else {
                        popupText4.textContent = res.data[i].items[3].category + ':';
                        popupTextPrice4.textContent = res.data[i].items[3].amount + 'zł';
                    };


                    if (res.data[i].items[4] === undefined) {
                        popupText5.textContent = 'None';
                        popupTextPrice5.textContent = '0zł';
                    } else {
                        popupText5.textContent = res.data[i].items[4].category + ':';
                        popupTextPrice5.textContent = res.data[i].items[4].amount + 'zł';
                    };


                    if (res.data[i].items[5] === undefined) {
                        popupText6.textContent = 'None';
                        popupTextPrice6.textContent = '0zł';
                    } else {
                        popupText6.textContent = res.data[i].items[5].category + ':';
                        popupTextPrice6.textContent = res.data[i].items[5].amount + 'zł';
                    };


                    if (res.data[i].items[6] === undefined) {
                        popupText7.textContent = 'None';
                        popupTextPrice7.textContent = '0zł';
                    } else {
                        popupText7.textContent = res.data[i].items[6].category + ':';
                        popupTextPrice7.textContent = res.data[i].items[6].amount + 'zł';
                    };


                    // popupTextPrice.textContent = res.data[i].items[2].amount
                    console.log(res.data[i].id)
                    closeBtn.addEventListener('click', closePopup);
                });
            }

            let currentPage = 1;
            let rows = 6;
            const displayList = (items, wrapper, rowsPerPage, page) => {
                wrapper.innerHTML = "";
                page--;
                let start = rowsPerPage * page;
                let end = start + rowsPerPage;
                let paginatedItems = items.slice(start, end);
                for (let i = 0; i < paginatedItems.length; i++) {
                    let item = paginatedItems[i];
                    wrapper.appendChild(item);
                }
            }

            const setupPagination = (items, wrapper, rowsPerPage) => {
                wrapper.innerHTML = '';

                let pageCount = Math.ceil(items.length / rowsPerPage);
                for (let i = 1; i < pageCount + 1; i++) {
                    let btn = paginationButton(i, items);
                    wrapper.appendChild(btn);
                }

            }

            const paginationButton = (page, items) => {
                let button = document.createElement('button');
                button.innerText = page;

                if (currentPage == page) {
                    button.classList.add('active');
                };

                button.addEventListener('click', () => {
                    currentPage = page;
                    displayList(items, ordersCont, rows, currentPage);

                    let currentBtn = document.querySelector('.pagenumbers button.active');
                    currentBtn.classList.remove('active');

                    button.classList.add('active');
                })
                return button;
            }

            displayList(allOrders, ordersCont, rows, currentPage);
            setupPagination(allOrders, pageNumbers, rows);

        })
        .catch(function (error) {
            console.log(error)
        });
}

showOrders();