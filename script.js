         let typedText = '';
        let savedText = '';
        let bool = false;
        let diva = 'Diva Please answer my question ?';
        let counter  =0;
        var delay = 1; // Delay in milliseconds (adjust as needed)
        var timer;
        function checkDotOperator(event) {
                const dotKeyCode = 190; // Key code for dot (.)
                const character = String.fromCharCode(event.keyCode);
                var c = event.key;
                console.log(c);

                if(counter<=0)
                {
                    savedText = '';
                }

                var isAlphabet = /^[a-zA-Z]+$/.test(c);
                if (isAlphabet) {
                    console.log("The key is an alphabet.");
                } else {
                    console.log("The key is not an alphabet.");
                }

                if(c === 'Backspace')
                {
                    savedText = savedText.slice(0,-1);
                    document.getElementById("hiddenInput").value =savedText;
                    counter = counter-1;
                    return;
                }

                if ( event.code === 'ShiftLeft' || event.code === 'MetaLeft' || event.code === 'MetaRight'|| event.code === 'Alt' ||
                     event.code === 'ShiftRight' ||  event.code === 'Control' ||
                     event.code === 'Enter' || 
                     event.code === 'CapsLock' || 
                     event.code === 'Tab') {
                    return; // Ignore these keys
                }

                if (event.keyCode === dotKeyCode) 
                {
                    clearTimeout(timer);
                    timer = setTimeout(function() 
                    {
                        document.getElementById("hiddenInput").value = "";
                        savedText += (diva.charAt(counter))
                        document.getElementById("hiddenInput").value =savedText;
                        bool = !bool;
                        counter = counter+1;
                    }, delay);

                } else if (event.keyCode !== dotKeyCode && bool === true){
                    clearTimeout(timer);
                    timer = setTimeout(function() 
                    {
                    typedText += c;
                    savedText += (diva.charAt(counter));
                    document.getElementById("hiddenInput").value = "";
                    document.getElementById("hiddenInput").value =savedText;
                    counter = counter+1;
                    }, delay);
                }
                else 
                {
                    clearTimeout(timer);
                    timer = setTimeout(function() 
                    {
                    savedText += c;
                    document.getElementById("hiddenInput").value = "";
                    document.getElementById("hiddenInput").value = savedText;
                    counter = counter+1;
                    }, delay);
                }
    }


        function display()
        {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
           

            fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
          

            fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())

            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
           

            fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
          
         
            if(typedText === '')
            {
                typedText  ="Hey! Our connection is not everlasting or eternal."
            }
            if(document.getElementById('Question').value === '')
            {
                typedText  ="Hey ask valid Questions to Diva :("
            }
            // if(savedText === '')
            // {
            //     typedText  ="You will be cursed next time. ~ Diva"
            // }


            const visibleText = document.getElementById('visibleText');
            visibleText.classList.remove("hide");
            visibleText.textContent = typedText;

        }

        function reloadPage()
        {
            location.reload();
        }