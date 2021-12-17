const ordersCont = document.querySelector('.orders-container');
const pageNumbers = document.getElementById('pagination');




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


            const nodeListOrders = document.querySelectorAll('.order');
            const allOrders = Array.from(nodeListOrders);
            const section = document.querySelector('section');
            for (let i = 0; i < allOrders.length; i++) {
                allOrders[i].addEventListener('click', () => {

                    const popup = document.createElement('div');
                    const popupText = document.createElement('p');
                    const popupMenu = document.createElement('div');
                    const closeContainer = document.createElement('div');
                    const closeBtn = document.createElement('button');
                    section.appendChild(popup);
                    popup.appendChild(popupMenu);
                    popupMenu.appendChild(closeContainer);
                    closeContainer.appendChild(closeBtn);
                    popup.appendChild(popupText);

                    popupMenu.classList.add('popup-menu');
                    closeContainer.classList.add('close-btn')
                    closeBtn.classList.add('close')
                    popup.classList.add('order-popup');
                    popupText.classList.add('popup-info');

                    closeBtn.textContent = 'X';
                    // console.log(res.data[i].id);
                    // console.log(res.data[i].items.map((item)=>`${item.category}: ${item.amount}`))

                    const closePopup = () => {
                        section.removeChild(popup);
                    }

                    popupText.textContent = res.data[i].items.map((item) => `${item.category}: ${item.amount}`)
                    closeBtn.addEventListener('click', closePopup);
                });
            }

            let currentPage = 1;
            let rows = 2;
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