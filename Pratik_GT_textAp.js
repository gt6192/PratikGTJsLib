/*
Class : Pratik_GT_textAp
File name : Pratik_GT_textAp.js
Created By : Pratik Thombre (Pratik GT) | pratikgt82@gmail.com
Release Date : 16th Oct, 2020
version : GT-1.0
Code Type : Open source
*/

//Class "Pratik_GT_textAp" Starts from here
class Pratik_GT_textAp{
    
    //Constructor : takes all required values from user.
    constructor(gt_take_string_from_user, gt_take_time_from_user, gt_take_id_from_user)
    {
        //gt_loop_temp : temp variable
        this.gt_loop_temp = "";

        //gt_loop_loop : for creating loop
        this.gt_loop_loop = 0;

        //gt_splited_str : List of characters after spliting given string
        this.gt_splited_str = gt_take_string_from_user.split("");

        //gt_splited_str_len : length of characters (gt_splited_str) 
        this.gt_splited_str_len = this.gt_splited_str.length;

        //gt_appear_time : given delay time given by user
        this.gt_appear_time = gt_take_time_from_user;

        //gt_got_id : id of a DOM element given by user 
        this.gt_got_id = gt_take_id_from_user;

        //main operation Starts from here
        this.gt_loop();
    }

    //gt_loop() : handles the loop till the number of characters
    gt_loop()
    {
        if(this.gt_loop_loop < this.gt_splited_str_len)
        {
            this.gt_addText();
        }
    }

    //gt_addText : add characters to the DOM element
    async gt_addText()
    {
        this.gt_loop_temp = this.gt_loop_temp + this.gt_splited_str[this.gt_loop_loop];
        document.getElementById(this.gt_got_id).innerHTML=this.gt_loop_temp;

        //increasing loop value
        this.gt_loop_loop = this.gt_loop_loop+1;

        //delay till the provided delay time
        await this.gt_resolve20();
        this.gt_loop();
    }

    gt_resolve20()
    {
        //returns the await prommise
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('go');
            }, this.gt_appear_time);
        });
    }

}
//Class "Pratik_GT_textAp" ends here