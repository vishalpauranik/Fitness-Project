document.addEventListener('DOMContentLoaded', () => {
  
  const logForm = document.getElementById('log-form');
  const foodNameInput = document.getElementById('food-name');
  const caloriesInput = document.getElementById('calories');
  const foodLogList = document.getElementById('food-log-list');
  const totalCaloriesDisplay = document.getElementById('total-calories');
  const clearLogBtn = document.getElementById('clear-log-btn');
  const formError = document.getElementById('form-error');
  const currentDateDisplay = document.getElementById('current-date');

  
  let foodLog = []; 
  const today = new Date().toISOString().split('T')[0]; 
  const storageKey = `calorieLog_${today}`;

  

  
  function getReadableDate(dateString) {
      const date = new Date(dateString + 'T00:00:00'); 
      return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  
  function loadLog() {
      const storedLog = localStorage.getItem(storageKey);
      if (storedLog) {
          foodLog = JSON.parse(storedLog);
      } else {
          foodLog = []; 
      }
      
      clearOldLogs();
      renderLog();
      currentDateDisplay.textContent = getReadableDate(today);
  }

  
  function saveLog() {
      localStorage.setItem(storageKey, JSON.stringify(foodLog));
  }

   
  function clearOldLogs() {
      Object.keys(localStorage).forEach(key => {
          if (key.startsWith('calorieLog_') && key !== storageKey) {
              localStorage.removeItem(key);
              console.log(`Removed old log: ${key}`);
          }
      });
  }

  
  function renderLog() {
      foodLogList.innerHTML = ''; 
      let totalCalories = 0;

      foodLog.forEach(item => {
          const li = document.createElement('li');

          const detailsSpan = document.createElement('span');
          detailsSpan.className = 'food-details';
          detailsSpan.textContent = item.name;

          const caloriesSpan = document.createElement('span');
          caloriesSpan.className = 'food-calories';
          caloriesSpan.textContent = `${item.calories} kcal`;

          const removeBtn = document.createElement('button');
          removeBtn.className = 'remove-btn';
          removeBtn.textContent = 'Remove';
          removeBtn.dataset.id = item.id; 

          removeBtn.addEventListener('click', () => {
              removeItem(item.id);
          });

          li.appendChild(detailsSpan);
          li.appendChild(caloriesSpan);
          li.appendChild(removeBtn);
          foodLogList.appendChild(li);

          totalCalories += item.calories;
      });

      totalCaloriesDisplay.textContent = totalCalories;
  }

  
  function addItem(name, calories) {
      const newItem = {
          id: Date.now(), 
          name: name,
          calories: calories
      };
      foodLog.push(newItem);
      saveLog();
      renderLog();
  }

  
  function removeItem(id) {
      foodLog = foodLog.filter(item => item.id !== id);
      saveLog();
      renderLog();
  }

  
  function clearLog() {
       if (confirm("Are you sure you want to clear all entries for today?")) {
          foodLog = [];
          saveLog(); 
          renderLog();
      }
  }

  

  
  logForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      formError.textContent = ''; 

      const foodName = foodNameInput.value.trim();
      const calories = parseInt(caloriesInput.value);

      
      if (!foodName) {
           formError.textContent = 'Please enter a food name.';
           foodNameInput.focus();
          return;
      }
       if (isNaN(calories) || calories < 0) {
           formError.textContent = 'Please enter a valid positive number for calories.';
           caloriesInput.focus();
           return;
      }

      addItem(foodName, calories);

      foodNameInput.value = '';
      caloriesInput.value = '';
      foodNameInput.focus(); 
  });

  
  clearLogBtn.addEventListener('click', clearLog);


  
  loadLog();

}); 