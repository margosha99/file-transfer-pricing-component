const inputSwitch = document.querySelector('input[type="checkbox"]');
const basicPrice = document.getElementById("basic");
const profPrice = document.getElementById("prof");
const masterPrice = document.getElementById('master');

inputSwitch.addEventListener('change', () => {
    if(inputSwitch.checked){
        basicPrice.innerHTML = "&dollar;19.99";
        profPrice.innerHTML = "&dollar;24.99";
        masterPrice.innerHTML = "&dollar;39.99"
    }else{
        basicPrice.innerHTML = "&dollar;199.99";
        profPrice.innerHTML = "&dollar;249.99";
        masterPrice.innerHTML = "&dollar;399.99" 
    }
})