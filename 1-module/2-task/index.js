
function print(text) {
  console.log(text);
};

function isValid(name) {
  	return (name != '') && (name != null) && (name.length > 3) && (name.includes(' ') == false);
};

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    console.log(`Welcome back, ${userName}!`);
  } else {
    console.log('Некорректное имя');
  }
};

sayHello('user');
