
const feets = document.getElementById('feets');
const inches = document.getElementById('inches');
const weight = document.getElementById('weight');
const button = document.getElementById('button');
const score = document.getElementById('score');


const handleCalulate = (e)=> {
    e.preventDefault();
    const newFeets = parseInt(feets.value)
    const newInches = parseInt(inches.value)
    const newWeight = parseInt(weight.value)
    
    const newHeight = (newFeets * 12) + newInches;
    console.log(newHeight);
    
   
    const heightInMeters = newHeight * 0.0254;
    console.log(heightInMeters);
    const bmi = newWeight / (heightInMeters ** 2).toFixed(2);

    if(bmi < 18.6){
        score.classList.remove('hidden');
        score.textContent = `Under Weight: ${bmi.toFixed(2)}`;
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        score.classList.remove('hidden');
        score.textContent = `Normal Weight: ${bmi.toFixed(2)}`;
    }
    else if(bmi >= 25 && bmi < 29.9){
        score.classList.remove('hidden');
        score.textContent = `Over Weight: ${bmi.toFixed(2)}`;
    }
    else {
        score.classList.remove('hidden');
        score.textContent = `Extreme Obesity: ${bmi.toFixed(2)}`;
    }
    


}

button.addEventListener('click', handleCalulate);


// const getLocalStorages = ()=>{
//     let data = {};
//     const storedBMI = localStorage.getItem('bmi-scores');
//     if(storedBMI){
//         data = JSON.parse(storedBMI);
//     }
//     return data;
// }

// const saveBMIToLocalStorage = (bmi)=>{
//     const data = getLocalStorages();
//     data['bmi'] = bmi.toFixed(2)
//     const bmiStringfind = JSON.stringify(data);
//     localStorage.setItem('bmi-scores', bmiStringfind);
// }
// const displayLocalStorage = ()=> {
//     const data = getLocalStorages();
//     for(let bmi in data){
//         document.getElementById('score').textContent = data[bmi]
        
//     }
    
    
// }

// const clearCart = ()=>{
//     localStorage.removeItem('bmi-scores');
//     document.getElementById('score').innerHTML = '';
//     alert('Cart cleared!');
// }

// displayLocalStorage();