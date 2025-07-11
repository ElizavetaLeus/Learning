function Tag(props) {
    this.tag = document.createElement(props.tagName);
    this.tag.innerText = props.text;
    this.userName = props.userName;
    this.id = props.id;

    this.render = () => {
            this.addClassList();
            this.initAction();

            return this.tag;
    }

    this.initAction = () => {
        if(props.onClick) {
            this.tag.addEventListener('click', props.onClick);
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