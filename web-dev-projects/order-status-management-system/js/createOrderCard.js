let ordersDiv = document.getElementById("orders-area");

const createNewOrderCard = (orderID) => {
    // >>>> order box
    let orderDiv = document.createElement('div');

    // >>>> order box header and order Id
    let orderIDandHeader = document.createElement('p');
    let orderIdText = document.createTextNode(`Order ID : ${orderID}`);

    // >>>> order Body
    let orderBody = document.createElement('div');
    // order amount
    let orderAmount = document.createElement('h3');
    let orderAmountText = document.createTextNode("Bill Amount: $150");

    let orderStatus = document.createElement('span');
    let orderStatusText = document.createTextNode("Corn Delight Large Size Pizza");

    let orderFooterDiv = document.createElement('div');
    let cancelButton = document.createElement('button');
    let cancelButtonText = document.createTextNode("Cancel Order");

    // combine all elements
    ordersDiv.appendChild(orderDiv);
    orderDiv.appendChild(orderIDandHeader);
    orderIDandHeader.appendChild(orderIdText);

    orderDiv.appendChild(orderBody);
    orderBody.appendChild(orderAmount);
    orderAmount.appendChild(orderAmountText);

    orderBody.appendChild(orderStatus);
    orderStatus.appendChild(orderStatusText);

    orderBody.appendChild(orderFooterDiv);
    orderFooterDiv.appendChild(cancelButton);
    cancelButton.appendChild(cancelButtonText);

    // combine classes and id's

    orderDiv.classList = "order"
    orderIDandHeader.classList = "order-header";
    orderBody.classList = "order-body";
    orderAmount.classList = "order-amount";
    orderStatus.classList = "order-status";
    orderFooterDiv.classList = "order-footer";
    cancelButton.classList = "cancel-button";

    orderStatus.id = orderID

    cancelButton.addEventListener(`click`, () => {
        orderDiv.style.display = 'none'
    })



}