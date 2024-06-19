import ReadBooks from "../Component/ReadBooks";

// Ata holo  akna jodi thak
const  getReadBooks=()=>{
    const getBooks=localStorage.getItem('readedBook')
    if(getBooks){
        return JSON .parse(getBooks)
    }
    return [];
}

const readBook=(selectedBook)=>{
    const readBook=getReadBooks();
    const exists=readBook.find(readBook=>readBook.bookId===selectedBook.bookId)

// Reaed book id satha ami Selected korvo ==>> ami jat deme oita id satha jodi mathch kora tah hola 
    if(!exists){
        readBook.push(selectedBook);
        localStorage.setItem('readBook'.JSON.stringify(readBook))
        //  ata holo josi select book sata book is mathc nh kaa tah hola ami new id ta pussh korlam ja bhi toi ja akhon savbe hoo

    }
}