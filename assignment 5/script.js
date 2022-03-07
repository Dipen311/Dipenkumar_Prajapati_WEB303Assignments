/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        id = 0;
        name = "Name 1";
        description = "Description";
        genre = "type";
        constructor(id, name, description, genre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }
        get id(){
            return this.id;
        }
        set id(value){
            this.id = value;
        }
        get name(){
            return this.name;
        }
        set name(value){
            this.name = name;
        }
        get description(){
            return this.description;
        }
        set description(value){
            this.description = description;
        }
        get genre(){
            return this.genre;
        }
        set genre(value){
            this.genre = genre;
        }
        updateContentItem(name, description, genre){
            if(name != null && description != null && genre != null){
             this.name = name;
             this.description = description;
             this.genre = genre;   
            }
        }

        toString(){
            return `<div id ="content-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.genre}</div>
                    </div>`;
        }
    }

    let ContentItems = [
        {
            id:0,
            name:"Aashiqi", 
            description:"This is bestLove songs", 
            genre: "Classical"
        },
        { 
            id:1, 
            name:'Dil to pagal Hai', 
            description:'This is album of shahrukh khan', 
            genre: 'Love'
        },
        {
            id:2, 
            name:'Raja Hindustani', 
            description:'This is album of Amir khan', 
            genre:'Hip-hop'
        },
        {
            id:3, 
            name:'Kaho na pyar hai',
            description:'This is album of Hritik roshan', 
            genre:'Hip-hop'
        },
        {
            id:4, 
            name:'Dilwale', 
            description:'This is album of kajol',
            genre:'Classical'
        }
    ];

    let  array = [];
    for(i=0; i< ContentItems.length; i++){
        array[i] = new ContentItem(ContentItems[i].id,
                                ContentItems[i].name,
                                ContentItems[i].description,
                                ContentItems[i].genre);
    }
    for(i=0; i<array.length; i++){
        $('#content-item-list').append(""+ array[i]);
        $(`#content-${i}`).css({"border": "solid", "padding":"5px"});
    }

});


