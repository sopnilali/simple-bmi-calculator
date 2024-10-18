
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
    const heightInMeters = newHeight * 0.0254;
    const bmi = newWeight / (heightInMeters ** 2);
    score.classList.remove('hidden');
    score.textContent = `${bmi.toFixed(2)}`;
    // saveBMIToLocalStorage(bmi);
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