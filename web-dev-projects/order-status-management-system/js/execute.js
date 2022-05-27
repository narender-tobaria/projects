let emptyOrdersGif = document.getElementById("no-order-gif");

const executeOrder = () => {
    emptyOrdersGif.style.display = 'none';

    let orderId = document.getElementById("input-order").value;

    if(!orderId.length){
        alert("Please Enter a Valid Order Id");
        return;
    }

    createNewOrderCard(orderId);

    chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAdded)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderId).innerText = 'Order Ready!')
        .then(() => document.getElementById(orderId).style.backgroundColor = "#006600")
		.catch((err) => console.log(err))
}