// console.log('Global Stoage==>', window.localStorage);

//! Set Items in Local Storage
const setItems=()=>{
  localStorage.setItem('them', 'dark');
  localStorage.setItem('password', 'Preeti@!@#@!@#');
  localStorage.setItem('student', 'Preeti');
}
// setItems()


//! Get Items in Local Storage
const getItems=()=>{
  const theme = localStorage.getItem('them');
  console.log('Get Items Storage==>', theme)
}
// getItems()

//! To Clear Local Storage
const clearData=()=>{
  localStorage.clear();
  console.log('After Clear Data==>', localStorage)
}
// clearData()


// ! Storing Object in Local Storage
const userSettings={
  theme: 'dark',
  font: 'bold',
  password: 'Preeti@#$%##',
  username:'Preeti_12342',
  browser: 'Chrome'
}
const setObjects=()=>{
  const jsonData= JSON.stringify(userSettings)
  localStorage.setItem('userSettings', jsonData);
  console.log('JSON Data===>',jsonData)
  const getObject= JSON.parse(localStorage.getItem('userSettings'))
  console.log('Get Objects===>',getObject.font)
}
// setObjects()

// ! Real Life Example Theam Change.

const themeSelector= document.querySelector('#themeSelector');

themeSelector.addEventListener('change', (e)=>{
  localStorage.setItem('theme',e.target.value);
  const oldtheme= localStorage.getItem('theme')
  changeTheme(oldtheme)
})
//Get the Theam value and set color
const changeTheme=(theme)=>{
  if(theme === 'dark'){
    document.body.style.backgroundColor='#222';
  } else if(theme === 'light'){
    document.body.style.backgroundColor='#e6e6c6';
  } else{
    document.body.style.backgroundColor='#fff';
  }
}
//this function sync all the tab for same theam 
window.addEventListener('storage', (e)=>{
  if(e.key === 'theme'){
    changeTheme(e.newValue)
    themeSelector.value=(e.newValue)
  }
})


if(storageAvailable('localStorage')){
  console.log('Yes You csn Store');
} else{
  console.log('Noooo You can not Store')
}

// Local Storage
/**
 * Local Storage size is more than cookies. 5mb
 * Local Storage does not have Expari date but if you open in incognito mode then Local storage destory when you close the tab.
 */

// Cookies
/**
 * Cookies have Experi date.
 * Cookies send data to server to store.
 */