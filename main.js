var app = {
    jq: $,
    init() {
        console.log("Input Type Number Buttons READY");
        this.inputNumber = this.jq('input[type="number"]');
        this.inputNumber.bind('keyup change click',(e)=>{
            this.inputNumber.val(this.inputNumber.val());
        });
        this.inputNumber.length>0?this.initInputTypeNumber():'';        
    },
    initInputTypeNumber() {
        this.inputNumber
            .wrap('<div class="ITN-container"></div>')
            .before('<span class="downITNbtn">-</span>')
            .after('<span class="upITNbtn">+</span>');
        let val = this.inputNumber.val();
        this.jq(document).on('click','.downITNbtn',(e)=>{
            if(val > 1) {
                val--;
                this.inputNumber.val(val);
            }
        })
        this.jq(document).on('click','.upITNbtn',(e)=>{
            if(val > 0) {
                val++;
                this.inputNumber.val(val);
            }
        })
    },
}

app.init();