
var library = [
        {
            "word": "Cascading Style Sheets",
            "abbreviation" : "CSS"
        },
        {
            "word": "File Transfer Protocol",
            "abbreviation" : "FTP"
        },
        {
            "word": "Hypertext Markup Language",
            "abbreviation" : "HTML"
        },
        {
            "word": "The Hypertext Transfer Protocol",
            "abbreviation" : "HTTP"
        },
        {
            "word": "JavaScript",
            "abbreviation" : "JS"
        },
        {
            "word": "Test Driven Development",
            "abbreviation" : "TDD"
        } 
    ];


var abrev = process.argv[ 2 ];
var wasFound = false;

for(i = 0; i < library.length; i++){
    if(library[ i ].abbreviation === abrev){
        console.log(abrev + " - "+library[ i ].word);
        wasFound = true;
        break;    
    }
    
}

if(!wasFound){
    console.log("Não foi encontrado!!!");
}






