
document.querySelector('.options').addEventListener('click', () => {
    const dashboardContent = document.querySelector('.dashboard__content');
    const closeButton = document.querySelector('.close_button');
    
    dashboardContent.classList.toggle('active'); 
    closeButton.classList.toggle('active'); 
});

document.querySelector('.arrow').addEventListener('click', () => {
    const dashboardContent3 = document.querySelector('.dashboard__content3');
    const closeButton2 = document.querySelector('.close_button2');
    
    dashboardContent3.classList.toggle('active'); 
    closeButton2.classList.toggle('active'); 
});

document.querySelector('.close_button').addEventListener('click', () => {
    const dashboardContent = document.querySelector('.dashboard__content');
    const closeButton = document.querySelector('.close_button');
    
    dashboardContent.classList.remove('active'); 
    closeButton.classList.remove('active'); 
});

document.querySelector('.close_button2').addEventListener('click', () => {
    const dashboardContent3 = document.querySelector('.dashboard__content3');
    const closeButton2 = document.querySelector('.close_button2');
    
    dashboardContent3.classList.remove('active'); 
    closeButton2.classList.remove('active'); 
});
