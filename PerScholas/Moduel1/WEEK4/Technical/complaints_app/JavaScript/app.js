// Grabbing About the Game button
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');

//Add event listener to About the Game button
$openBtn.on('click', openModal);

// Event handler to open the modal
const openModal = () => {
    $modal.css('display', 'block');
  }

  //Add event listener to Close button
$closeBtn.on('click', closeModal);

// Event handler to close the modal
const closeModal = () => {
    $modal.css('display', 'none');
  }

  $( () => {

    //Grabbing Elements
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    
    //Event Handlers
    const openModal = () => {
      $modal.css('display', 'block');
    }
    
    const closeModal = () => {
      $modal.css('display', 'none');
    }
    
    //Event Listeners
    $openBtn.on('click', openModal);
    
    $closeBtn.on('click', closeModal);
    
    }); //

    setTimeout(openModal, 5000);