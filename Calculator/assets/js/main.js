function createCalculator() {
    return {
        display: document.querySelector(".display"),

        start() {
            this.buttonsClick()
            this.pressEnter()
        },

        pressEnter() {
            this.display.addEventListener("keyup", e => {
                if(e.keyCode === 13) {
                    this.performOperation()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        performOperation() {
            let operation = this.display.value

            try {
                operation = eval(operation)

                if(!operation) {
                    alert("Invalid Operation!")
                    return
                }

                this.display.value = String(operation)
            } catch(e) {
                alert("Invalid Operation!")
                return
            }
        },

        buttonsClick() {
            document.addEventListener("click", e => {
                const el = e.target

                if (el.classList.contains("btn-num")) {
                    this.btnForDisplay(el.innerText)
                }

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay()
                }

                if (el.classList.contains("btn-del")) {
                    this.deleteOne()
                }

                if (el.classList.contains("btn-eq")) {
                    this.performOperation()
                }

            })
        },

        btnForDisplay(vl) {
            this.display.value += vl
        }
    }
}

const calculator = createCalculator()
calculator.start()