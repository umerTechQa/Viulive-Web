export class ViuLive{
    /**
    * @param {import('@playwright/test').Page} page
    */
        constructor(page)
        {
         this.page=page;
         this.email= "//div[@id='root']/div/section/div/aside/div/div[3]/form/div[1]/div/div/span/input";
         //input[@placeholder="Email"];
         this.password= "//div[@id='root']/div/section/div/aside/div/div[3]/form/div[2]/div/div/span/input";
         this.submitbtn= "//div[@id='root']/div/section/div/aside/div/div[3]/form/div[4]/div/div/div/span/button";
         
        }

        
      async ViuLivelogin()
      {
        await this.page.fill(this.email,"neha@gmail.com")
        await this.page.fill(this.password,"neha@1234$")
        await this.page.click(this.submitbtn)
      }
     }

