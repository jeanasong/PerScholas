const list = [];
const list2 = [];
$('form').on('submit', (e) => {
    console.log($('#input-box').val());
    list.push($('#input-box').val());
    e.preventDefault();
    $(e.currentTarget).trigger('reset');
    render();
});
const render = () => {
    console.log('list: ', list);
    $('ul').empty();
    list.forEach((item) => createElementsOnDom(item, '#things-to-do'));
    list2.forEach((item) => createElementsOnDom(item, '#things-that-are-done'));
};
const createElementsOnDom = (item, currentArray) => {
    let completedOrRemoved;
    let handleCompleteOrRemove;
    if(currentArray === '#things-to-do'){
    completedOrRemoved = 'Completed';
    handleCompleteOrRemove = handleComplete;
    }else{
        completedOrRemoved = 'Removed';
        handleCompleteOrRemove = handleRemove;
    }
    const newLi =$('<li> </li>').text(item);
    const newButton = $("<button></button>").text(completedOrRemoved);
    console.log(newButton);

    $(newButton).on('click', handleCompleteOrRemove);
    $(newLi).append(newButton);
    $(currentArray).append(newLi);
  //  console.log(i);
    console.log(newLi);
}
const handleComplete = (event) => {
    let rawText = event.target.parentNode.textContent;
    const finalText = rawText.split('Completed').join('');
   // console.log(finalText)
    let indexOfItem;
   list.forEach((value, index) => {
       if(value === finalText){
         indexOfItem = index;
       }
   })
   const itemToMove = list.splice(indexOfItem,1)[0];
   console.log(itemToMove);
   list2.push(itemToMove)
   render();
}
const handleRemove = (event) => {
    let rawText = event.target.parentNode.textContent;
    const finalText = rawText.split('Removed').join('');
    console.log(finalText)
    let indexOfItem;
   list.forEach((value, index) => {
       if(value === finalText){
         indexOfItem = index;
       }
   })
   const itemToMove = list2.splice(indexOfItem,1)[0];
   console.log(itemToMove);
  // list2.push(itemToMove)
   render();
}
