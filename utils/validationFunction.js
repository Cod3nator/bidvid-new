export const checkName = (form, name, serverError) => {
    const nameInput = form.querySelector(`input[name="${name}"]`);
    const nameLabel = form.querySelector(
      `.input input[name="${name}"] + .inputLabel`
    );
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
  
    if (!nameRegex.test(nameInput.value)) {
      nameInput.classList.add("error");
      nameLabel.classList.add("errorText");
      return false;
    } else if (!serverError) {
      nameInput.classList.add("error");
      nameLabel.classList.add("errorText");
      return false;
    } else {
      nameInput.classList.remove("error");
      nameLabel.classList.remove("errorText");
    }
    return true;
  };
  

  export const checkNumber = (num) => {
    const numberRegex = /^[6-9]\d{9}$/;
    if (!numberRegex.test(num)) {
      console.log(num);
      return false;
    }else{
      return true;
    }
  };
  
  export const checkLabName = (form, name) => {
    const input = form.querySelector(`input[name="${name}"]`);
    const label = form.querySelector(
      `.input input[name="${name}"] + .inputLabel`
    );
  
    if (!input || input.value.trim() === "") {
      input.classList.add("error");
      label.classList.add("errorText");
      return false;
    } else {
      input.classList.remove("error");
      label.classList.remove("errorText");
      return true;
    }
  };
  export const checkTextarea = (form, name, serverError) => {
    const input = form.querySelector(`textarea[name="${name}"]`);
    const label = form.querySelector(
      `.input textarea[name="${name}"] + .inputLabel`
    );
  
    const valueArr = input.value.split(" ");
    let count = 0;
    let pattern = /[\w\d]+/;
    valueArr.forEach((item) => {
      if (pattern.test(item)) {
        count++;
      }
    });
    if (count < 3) {
      input.classList.add("error");
      label.classList.add("errorText");
      return false;
    } else {
      input.classList.remove("error");
      label.classList.remove("errorText");
    }
    return true;
  };
  export const checkEmail = (form, name) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const input = form.querySelector(`input[name="${name}"]`);
    const label = form.querySelector(
      `.input input[name="${name}"] + .inputLabel`
    );
  
    if (!emailRegex.test(input.value)) {
      input.classList.add("error");
      label.classList.add("errorText");
      return false;
    } else {
      input.classList.remove("error");
      label.classList.remove("errorText");
      return true;
    }
  };
  export const checkInput = (form, name) => {
    const input = form.querySelector(`input[name="${name}"]`);
    const label = form.querySelector(
      `.input input[name="${name}"] + .inputLabel`
    );
    if (!input || input.value.trim() === "") {
      input.classList.add("error");
      label.classList.add("errorText");
      return false;
    } 
    else {
      console.log("calling rem");
      input.classList.remove("error");
      label.classList.remove("errorText");
      return true;
    }
  };
  export const validateName = (e) => {
    var inputValue = e.target.value;
    inputValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
    inputValue = inputValue.replace(/[\W_]+/g, "");
  
    const arr = [inputValue.split(" ")];
  
    e.target.value = arr[0];
  };
  
  export const validateNumber = (e) => {
    if (e.target && e.target.value !== null) {
      let inputValue = e.target.value;
      inputValue = inputValue.replace(/[^0-9]/g, "");
      if (inputValue.length > 10) {
        inputValue = inputValue.substring(0, 10);
      }
      e.target.value = inputValue;
    }
  };
  