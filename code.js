function deleteDialog(index, timeout){
  var node = document.getElementById('im_dialogs')
  var element = node.childNodes[index]
  element.getElementsByClassName('nim-dialog--close _im_dialog_close')[0].click()
  setTimeout(()=>{
    modalDelete(element)
  }, timeout)
}

function modalDelete(element){
  //Получение типа диалога (личный/конференция)
  var dataPeer = element.getAttribute('data-peer')
  var box = document.getElementById('box_layer')
  if(dataPeer >= 2000000000) {
    //галочка удаление всех сообщений
      box.getElementsByClassName('checkbox im-delete-forall-checkbox _check_is_delete')[0].click()
    setTimeout(()=>{
       //Нажать кнопку удалить
  box.getElementsByClassName('flat_button')[1].click()
    }, 100)
  }
  else {
     //Нажать кнопку удалить
  box.getElementsByClassName('flat_button')[1].click()
  }
 
}

function recursiveDelete(){
  deleteDialog(1, 200)
  setTimeout(recursiveDelete, 400)
}
recursiveDelete()
