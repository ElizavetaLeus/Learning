import Tag from "./tag.js";

const app = document.getElementById("app"); // получаю эл-т по id из html
const userListNode = new Tag({
    tagName: 'div',
    classList: [],
})

const user1Node = new Tag({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 1',
    text: 'User 1',
    id: '1276',
});

const user2Node = new Tag ({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 2',
    text: 'User 2',
    id: '1278',
});

const user3Node = new Tag ({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 3',
    text: 'User 3',
    id: '1346',
});

const user4Node = new Tag ({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 4',
    text: 'User 4',
    id: '1056',
});

const user5Node = new Tag ({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 5',
    text: 'User 5',
    id: '1209',
});

const user6Node = new Tag ({
    tagName: 'div',
    classList: [ 'user' ],
    userName: 'User 6',
    text: 'User 6',
    id: '8766',
});

const userList = [user1Node, user2Node, user3Node, user4Node, user5Node, user6Node]; // создаю общий массив юзеров
let inputValue = null; // задаю переменную, в которую положу значение инпута

const filterUsersByName = (value) => { 
// функция, которая проходится по св-ву userName у массива юхеров и ищет эл-т, 
// включающий в себя заданное значение (содержимое инпута)
    const userListByName = userList.filter((obj) => obj.userName.includes(value));
    
    return userListByName;
};

const inputNode = new Tag ({
    tagName: 'input',
    classList: [ 'input' ],
    text: 'Введите id',
    onInput: (event) => {
        inputValue = event.target.value; // переопределяю переменную, записывая в нее значение инпута
    }
});


const buttonNode =new Tag ({
    tagName: 'button',
    classList: [ 'button' ],
    text: 'Найти',
    onClick: () => {
        renderUserList(filterUsersByName(inputValue));
        //рендерю список юзеров, чье имя включает в себя значение инпута
    },
});


const renderUserList = (userList) => {
    userListNode.render().innerHTML = ""; //обнуляю все, что записано в переменную userListNode
    userList.forEach(user => {
        userListNode.render().append(user.render())
    }) //рендерю все элементы массива юзеров
};


renderUserList(userList);
app.append(userListNode.render())
app.append(inputNode.render());
app.append(buttonNode.render());