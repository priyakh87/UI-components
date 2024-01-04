import Button from "../components/Button"

function Buttons(){
    return (<div >
         <Button primary>Primary</Button>
         <Button secondary>Secondary</Button>
         <Button success>Success</Button>
         <Button warning>warning</Button>
         <Button danger>Danger</Button>
         <Button outline>Outline</Button>
         <Button rounded>Rounded</Button>
         <br/>
         
         <Button outline primary>outline primary    </Button>
         <Button outline secondary>outline secondary   </Button>
         <Button outline success>outline  success  </Button>
         <Button outline warning>outline  warning  </Button>
         <Button outline danger>outline danger   </Button>
         
         <br/>
         
         <Button rounded primary>rounded primary    </Button>
         <Button rounded secondary>rounded secondary   </Button>
         <Button rounded success>rounded  success  </Button>
         <Button rounded warning>rounded  warning  </Button>
         <Button rounded danger>rounded danger   </Button>
         <br/>

         <Button outline rounded primary>rounded primary    </Button>
         <Button outline rounded secondary>rounded secondary   </Button>
         <Button outline rounded success>rounded  success  </Button>
         <Button outline rounded warning>rounded  warning  </Button>
         <Button outline  rounded danger>rounded danger   </Button>
         <br/>
         <Button link >Link</Button>
         <Button disable >Disable</Button>
    </div>)
}
    
export default Buttons