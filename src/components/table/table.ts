import Component, { ComponentProps } from '../../app/js/component';

export default class Table extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        
        this.getElement('footer-button').addEventListener('click', ()=>{
            const [el1, el2] = this.getElements('container-el');
            el1.classList.toggle('table__container-el--green');
            el2.classList.toggle('table__container-el--none');
        })
    }
        
    destroy = () => {
        // Destroy functions
    }
}