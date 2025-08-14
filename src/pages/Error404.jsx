import ErrorPage from "../components/ErrorPage"

export default function Error404() {
    return(
       <div>
          <ErrorPage
          code={404}
          description={"OOPSSSSS You catch up!!!"}
          image={"https://www.google.com/imgres?q=gif%20kucing&imgurl=https%3A%2F%2Fwww.tiktok.com%2Fapi%2Fimg%2F%3FitemId%3D7424894484661521696%26location%3D0%26aid%3D1988&imgrefurl=https%3A%2F%2Fwww.tiktok.com%2Fdiscover%2Fgif-kucing&docid=aI3U1VbQYkqJwM&tbnid=eCtvmMxntHpurM&vet=12ahUKEwiR4IWCpvyMAxU7cWwGHY3DClUQM3oECE4QAA..i&w=2160&h=3840&hcb=2&ved=2ahUKEwiR4IWCpvyMAxU7cWwGHY3DClUQM3oECE4QAA"}
          />
       </div>
    )
   }