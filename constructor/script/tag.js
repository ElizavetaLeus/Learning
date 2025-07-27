function Tag(props) {
    this.tag = document.createElement(props.tagName); //задаем тег для элемента
    this.tag.innerText = props.text; // добавляем текст внутрь тега
    this.userName = props.userName; // задаем имя пользователя
    this.id = props.id; // задаем id пользователя

    this.render = () => { // рендерим DOM элемент
            this.addClassList(); // добавляем класслист
            this.initAction(); // вешаем события

            return this.tag;
    }

    this.initAction = () => {
        if(props.onClick) {
            this.tag.addEventListener('click', props.onClick); // если происходит событие, запускается метод 
        }
        if(props.onInput) {
            this.tag.addEventListener ('input', props.onInput);
        }
    };
    this.addClassList = () => {
            props.classList.forEach(classItem => {
                this.tag.classList.add(classItem)
            });
    };
};

export default Tag;