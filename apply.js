const allbtn =document.getElementsByClassName('add-btn');

for(const btn of allbtn){
    btn.addEventListener("click", function(event){
      const nameEvent = event.target.parentNode.childNodes[1].innerText;
      const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
      const catogory = event.target.parentNode.childNodes[5].childNodes[1].innerText;
    

      const selectedplayercontainer =document.getElementById("selected-player-container");

const firstcartcount =getConvertedValue("cart");
    if(firstcartcount +1> 6){
        alert("limit ses ar hobena")
        return;
       }

      const buget = getConvertedValue("buget");
      document.getElementById("buget").innerText=buget-parseInt(price);

      const cartCount = getConvertedValue("cart");
      document.getElementById("cart").innerText=cartCount + 1;

      const leftCount = getConvertedValue("left")
      document.getElementById("left").innerText=leftCount-1;

      const div = document.createElement('div');
      div.classList.add('selected-player')
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p.innerText=nameEvent;
      p2.innerText=price;
      p3.innerText=catogory;
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(p3);
      selectedplayercontainer.appendChild(div);

      updateTotalCost(price);
      updatedGrandTotal()
    })
}

function updatedGrandTotal (status) {
    const totalCost = getConvertedValue("total-cost");
    if(status== undefined){    
        document.getElementById("grand-total").innerText = totalCost;
    } else{
       const copunCode = document.getElementById("coupon-code").value;
       if(copunCode== "love20"){
         const discountprice = totalCost * 0.2;
         document.getElementById("grand-total").innerText = totalCost - discountprice;
       }else{
        alert("please enter valid copun code")
       }
    }
  
}

function updateTotalCost (value){
    const totalCost = getConvertedValue("total-cost");
    const  sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText =sum;

}


function getConvertedValue (id){
    const price = document.getElementById(id).innerText;
const convertPrice = parseInt(price);
return convertPrice;
}

