<!DOCTYPE html>  
<html>  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Using change Event for Radio Buttons</title>  
</head>  
<body>  
    <h3>Choose the one you like</h3>  
    <input type="radio" id="happy" name="status">Be Happy with what you have</br>  
    <input type="radio" id="excited" name="status">Be Excited about what you want</br>  
    <input type="radio" id="sad" name="status">Don't be Sad </br>  
    <input type="radio" id="angry" name="status">Anger is your biggest enemy</br>  
    <input type="radio" id="none" name="status">That's great</br>  
<p id="show"></p>  
    <script>  
        let show = document.querySelector('#show');  
        document.body.addEventListener('change', function (e) {  
            let target = e.target;  
            let display_msg;  
            switch (target.id) {  
           case 'happy':  
                    display_msg = 'You are happy';  
                    break;  
            case 'excited':  
                    display_msg = 'You are excited';  
                    break;  
             case 'sad':  
                   display_msg = 'You are sad';  
                   break;  
    case 'angry':  
                   display_msg = 'You are angry';  
                   break;  
    case 'none':  
                   display_msg = 'none';  
                   break;  
            }  
            show.textContent = display_msg;  
        });
yarn run lint --fix
    </script>  
</body>  
</html>  
