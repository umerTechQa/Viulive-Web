export  class SignupViulive 
{
    /**
    * @param {import('@playwright/test').Page} page
    */

        constructor(page)
        {
            this.page=page;
            this.createaccount = "//div[@class='MSD-Login']/form/div[4]/div[3]" ;
             //div[@class="registerLink light"]
            this.fullname = "//div[@class='signupForm']/form/div[1]/div/div/span/input" ;
            this.email = "//div[@class='signupForm']/form/div[3]/div/div/span/input";
            this.password = "//div[@class='signupForm']/form/div[4]/div/div/span/input";
            this.confirmpassword = "//div[@class='signupForm']/form/div[5]/div/div/span/input";
            this.promotioncode = "//div[@class='signupForm']/form/div[6]/div/div/span/input";
            this.joinus = "//div[@class='signupForm']/form/div[7]/div/div/span/div/button";
            this.terms_conditions = "//div[@class='ant-modal-content']/div/div/button/span" ;
        }

        async signup()
        {
            await this.page.click(this.createaccount) ;
            await this.page.waitForSelector(this.fullname, {state:'visible'}) ;
            await this.page.fill(this.fullname, "Umar Tariq");
            await this.page.fill(this.email, "umart4767@gmail.com");
            await this.page.fill(this.password, "Viulive123");
            await this.page.fill(this.confirmpassword, "Viulive123");
            await this.page.click(this.joinus);
            await this.page.click(this.terms_conditions);
        }


}