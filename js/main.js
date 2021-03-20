'use strict'
{
  class CreateFilter{
    constructor(content,img){
      imgNum++;
      this.imgNum = imgNum - 1;
      this.content = content;
      this.img = img;
      this.create();
      const input = document.getElementById('inputText');
      input.addEventListener('input',()=> {
        check(input.value,this.p2.textContent,this.imgNum);
      })
    }

    create(){
      this.li = document.createElement('li');
      this.p1 = document.createElement('p');
      this.p2 = document.createElement('p');
      this.filterImg = document.createElement('img');
      this.insertInto();
      this. appendElem();
    }
    
    insertInto(){
      this.filterImg.src = this.img;
      this.p1.textContent = ('キーワード');
      this.str = this.content.join(' ');
      this.p2.textContent = this.str;
    }

    appendElem(){
      this.li.appendChild(this.filterImg);
      this.li.appendChild(this.p1);
      this.li.appendChild(this.p2);
      document.querySelector('ul').appendChild(this.li);
    }

    addHidden(){
      this.li.classList.add('hidden');
    }

    removeHidden(){
      this.li.classList.remove('hidden');
    }

  }

  let imgNum = 0;


  
  function check(value,text,Num){
    if(text.indexOf(value.toLowerCase()) === -1){
      create[Num].addHidden();
    }else{
      create[Num].removeHidden();
    }
  }



  const create = [
    new CreateFilter(['くるま','車','car','kuruma'],'images/DSCF0870.JPG'),
    new CreateFilter(['はな','花','flower','hana'],'images/DSCF0686.JPG'),
    new CreateFilter(['たぬき','狸','tanuki'],'images/DSCF0700.JPG'),
    new CreateFilter(['うみ','海','sea','umi'],'images/IMG_9560.JPG'),
  ];



}