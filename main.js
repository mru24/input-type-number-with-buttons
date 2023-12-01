var app = {
    jq: $,
    init() {
        console.log("Input Type Number Buttons READY");
        this.inputNumber = this.jq('input[type="number"]');
        this.inputNumber.length>0?this.initInputTypeNumber():'';
    },
    initInputTypeNumber() {
        this.inputNumber.wrap('<div class="ITN-container"></div>');
        this.inputNumber.before('<span class="downITNbtn">-</span>');
        this.inputNumber.after('<span class="upITNbtn">+</span>');
        let val = this.inputNumber.val();
        this.jq(document).on('click','.downITNbtn',(e)=>{
            if(val > 1) {
                val --;
                this.inputNumber.val(val);
                console.log(val);
            }
        })
        this.jq(document).on('click','.upITNbtn',(e)=>{
            if(val > 0) {
                val ++;
                this.inputNumber.val(val);
                console.log(val);
            }
        })
    },
}

app.init();