
// function myFunction() {

//   }

validated_inputs = []
var x = [1, 2, 3] + [2, 3, 4]
function darkmode() {
    document.getElementById('hide_password').style.color = "#ffffff"
    document.getElementById('show_password').style.color = "#ffffff"
    document.getElementById('lightmode').style.display = "inline"
    document.getElementById('darkmode').style.display = "none"
    body_tag = document.getElementById('body')
    body_tag.style.backgroundColor = "#2e2e2e"
    body_tag.style.color = "#ffffff"
}
function lightmode() {
    document.getElementById('hide_password').style.color = "#2e2e2e"
    document.getElementById('show_password').style.color = "#2e2e2e"
    document.getElementById('darkmode').style.display = "inline"
    document.getElementById('lightmode').style.display = "none"
    body_tag = document.getElementById('body')
    body_tag.style.backgroundColor = "#e8e8e8"
    body_tag.style.color = "#2e2e2e"
}
function check_input(object_id) {
    // console.log(object_id.name)
    
    // for (let i = 0; i <= 5; i++) {
    tag_id = `remark_${object_id.name}`
    tag_id = document.getElementById(tag_id)
    
    input_value = object_id.value
    console.log(input_value)
    

    if (input_value == "") {
        var i = 0;
        var txt = `Kindly fill in your ${object_id.name}. `
        var speed = 60;
        
        function typeWriter() {
            // repeat_numm = 0
            for (let repeat_num = 0; repeat_num >= 0; repeat_num--) {
                if (i <= txt.length) {
                    if (tag_id.innerHTML.length < txt.length) {
                        tag_id.innerHTML += txt.charAt(i);
                        i++;
                    }else if(tag_id.innerHTML.length >= txt.length){
                        tag_id.innerHTML += "" 
                        // i--;
                    }
                    // if (tag_id.innerHTML == txt.charAt(i)) {
                        // tag_id.innerHTML += "" 
                    // }else{
                    // }
                    setTimeout(typeWriter, speed);
                }
                const repeat_numm = 9
            }
        }   
        typeWriter()

        if (object_id.name == "i_d") {
            object_id.name = "id"
        }

        document.getElementById('hide_password').style.display="none"
        document.getElementById('show_password').style.display="none"       

        // tag_id.innerHTML = `<code class="m_text-red">Kindly fill in your ${object_id.name}</code>`
        // tag_id.style.transition = '2s'
        // tag_id.style.animation = "coded infinite 2s"
        join.disabled = true

        check_array = 0
        // check_array = validated_inputs.find(there => there.find = object_id.name)
        // in_dex = validated_inputs.indexOf(object_id.name)
        // console.log(in_dex);
        // console.log(validated_inputs)
        // console.log(undefined_array_object)
        // break
        if (object_id.name == "id") {   
            object_id.name = "i_d"
        }
        
    }
    if (input_value != "") {

        if (object_id.name == "password") {
            document.getElementById('show_password').style.display="inline"
        }

        tag_id.innerHTML = `&nbsp`

        for (let i = 0; i <= validated_inputs.length; i++) {
            check_array = validated_inputs.find(there => there.obj = object_id.name)
        }

        console.log(check_array)
        
        if (check_array) {
            // validated_inputs = validated_inputs
            
        // }else if(!check_array){
            // validated_inputs.push(object_id.name)
        }else{
            validated_inputs.push(object_id.name)
        }

        console.log(validated_inputs)

        if (validated_inputs.length == 6) {
            join.disabled = false
        }else(
            join.disabled = true
        )
    // break
    }
    // }
}
function show_password() {
    if (password.value != "") {
        password.type = "text"
        document.getElementById('hide_password').style.display="inline"
        document.getElementById('show_password').style.display="none"        
    }

    // document.getElementById('show_password').innerHTML="hide_password"
    
    // if (password.type == "text") {
    //     show_password.innerHTML="hide_password"
    // }
    
    // if (show_password.innerHTML=="hide_password") {
        //     password.type = "password"
        // } 
    }
function hide_password() {
    if (password.value != "") {
        password.type = "password"
        document.getElementById('hide_password').style.display="none"
        document.getElementById('show_password').style.display="inline"
    }
    // if (password.type == "text") {
    //     show_password.innerHTML="hide_password"
    // }
    
    // if (show_password.innerHTML=="hide_password") {
    //     password.type = "password"
    // } 
}

function submit() {
    if (firstname.value == "" || lastname.value == "" || id.value == "" || email.value == "" || password.value == "" || referrer.value == "") {
        message1.innerHTML = `<code class="m_text-red">Incomplete form</code>`
        // message2.innerHTML = `<code class="m_text-red">Incomplete form</code>`
        join.disabled = false
    } else if (firstname.value != "" && lastname.value != "" && id.value != "" && email.value != "" && password.value != "" && referrer.value != "") {
        join.disabled = true
    }
}

function hoveer() {
    for (let i = 0; i <= 5 ; i++) {
        const element = array[i];
        
    }
}