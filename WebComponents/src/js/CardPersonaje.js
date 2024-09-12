    class CardPersonaje extends HTMLElement {

        constructor() {
            super();
        }

        static get styles(){
            return `
                card-personaje {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 15px;
                    width: 250px;
                    height: 300px;
                    box-sizing: border-box;
                    border-radius: 8px;
                    box-shadow: 0px 0px 10px 1px #000;
                    background: linear-gradient(#569655, #71b870);
                    transition: all 400ms ease;
                }

                card-personaje:hover {
                    cursor: pointer;
                    transform: translateY(-20px);
                }

                .img-personaje {
                    margin-top: 20px;
                    width: 150px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px 1px #000;
                }

                .name {
                    margin-top: 10px;
                    font-weight: bold;
                    font-size: 15px;
                    color: #183201;
                }

                .card-info {
                    width: 100%;
                    margin-left: 100px;
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: end;
                    font-weight: bold;
                    font-size: 15px;
                    color: #183201;
                }
            `;
        }

        connectedCallback(){
            this.innerHTML = `
                <style>
                    ${CardPersonaje.styles}
                </style>
                <img class="img-personaje"></img>
                <p class="name"></p>
                <div class="card-info">
                    <p class="status"></p>
                    <p class="specie"></p>
                </div>
            `;
        }
    }
    customElements.define('card-personaje', CardPersonaje)