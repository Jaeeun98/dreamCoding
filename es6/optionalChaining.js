//optionalChaining / 템플릿 리터럴
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals.

{
    const person1 = {
        name : 'jaeeun',
        job : {
            title : 'front Engineer',
            manager : {
                name : 'Bob',
            },
        },
    };

    const person2 = {
        name : 'jineun',
    };

    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
    }

    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}

