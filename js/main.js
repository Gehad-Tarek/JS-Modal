/**
 *  Add the given event to all elements which have the same selector
 * and apply the callbackFun if event is triggered
 * 
 * @param {string} selector 
 * @param {string} event 
 * @param {function} callback 
 */
function modalEvent(selector, event, callbackFun) {
    let elements = document.querySelectorAll(selector);
    for (let element of elements) {
        element.addEventListener(event, function(){
            callbackFun(element);
        });
    }
}

modalEvent('.open_Btn', 'click', function(modalBtn){
    let modalId = modalBtn.getAttribute('data-modal-id'),
        modal = document.getElementById( modalId);
    showModal(modal);
});

/**
 * function to show modal when i press on the button
 * 
 * @param modal
 */
function showModal(modal){
    modal.style.visibility = 'visible';

    hideModal(modal);
}

/**
 * 
 * function to hide modal in two cases
 * when i click on the overlay and close button
 * 
 * @param modal
 */
function hideModal(modal){
    let callback = ()=> {     
        modal.style.visibility = 'hidden';
    }
    modalEvent('.close_button', 'click', callback);
    modalEvent('.modal-overlay', 'click', callback);
}